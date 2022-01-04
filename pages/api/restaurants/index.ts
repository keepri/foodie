import { NextApiRequest, NextApiResponse } from 'next';

import { REQUEST_METHODS } from '#declarations/enums/REST';

import { RestaurantsRequestBody, RestaurantsReturnType } from '#firebase/declarations/types';
import { COLLECTIONS, MESSAGES } from '#firebase/declarations/enums';
import { RestaurantSchema } from '#firebase/declarations/schemas';
import { firestore } from '#firebase/initServerApp';

import { handleError } from '#controllers/api/handleError';
import { useCors } from '#controllers/api/middleware/useCors';
import { restaurantRouteValidation } from '#controllers/api/validation/routes/restaurantRouteValidation';

export default async (req: NextApiRequest, res: NextApiResponse<RestaurantsReturnType>) => {
	// INITIAL ROUTE VERIFICATIONS
	try {
		await useCors(req, res);
		await restaurantRouteValidation(req, res);
	} catch (error) {
		await handleError(error, res);
	}

	switch (req.method) {
		// GET
		case REQUEST_METHODS.GET: {
			try {
				const restaurantsCol = await firestore.collection(COLLECTIONS.RESTAURANTS).get();
				const restaurants = restaurantsCol.docs.map(doc => doc.data() as RestaurantSchema);

				return res.status(200).json({ restaurants });
			} catch (error) {
				await handleError(error, res);
			}

			break;
		}

		// POST
		// case REQUEST_METHODS.POST: {
		// 	try {
		// 		const { uid, data } = req.body as RestaurantsRequestBody;
		// 		const restaurantCol = firestore.collection(COLLECTIONS.RESTAURANTS);
		// 		await restaurantCol.doc(uid as string).set(data as RestaurantSchema);

		// 		return res.status(200).json({ message: MESSAGES.SUCCESS });
		// 	} catch (error) {
		// 		await handleError(error, res);
		// 	}

		// 	break;
		// }

		// PATCH
		case REQUEST_METHODS.PATCH: {
			try {
				const { uid, data } = req.body as RestaurantsRequestBody;
				const restaurantDoc = firestore.collection(COLLECTIONS.RESTAURANTS).doc(uid as string);

				if (!(await restaurantDoc.get()).exists) return res.status(404).json({ message: MESSAGES.NOT_FOUND });

				await restaurantDoc.update(data as Partial<RestaurantSchema>);
				const restaurant = (await restaurantDoc.get()).data() as RestaurantSchema;

				return res.status(200).json({ restaurant });
			} catch (error) {
				await handleError(error, res);
			}

			break;
		}

		// PUT
		case REQUEST_METHODS.PUT: {
			try {
				const { uid, data } = req.body as RestaurantsRequestBody;
				const restaurantDoc = firestore.collection(COLLECTIONS.RESTAURANTS).doc(uid as string);

				if (!(await restaurantDoc.get()).exists) return res.status(404).json({ message: MESSAGES.NOT_FOUND });

				await restaurantDoc.set(data as RestaurantSchema);
				const restaurant = (await restaurantDoc.get()).data() as RestaurantSchema;

				return res.status(200).json({ restaurant });
			} catch (error) {
				await handleError(error, res);
			}

			break;
		}

		// DELETE
		case REQUEST_METHODS.DELETE: {
			try {
				const { uid } = req.body as RestaurantsRequestBody;
				const restaurantDoc = firestore.collection(COLLECTIONS.RESTAURANTS).doc(uid as string);

				if (!(await restaurantDoc.get()).exists) return res.status(404).json({ message: MESSAGES.NOT_FOUND });

				await restaurantDoc.delete();

				return res.status(200).json({ message: MESSAGES.SUCCESS });
			} catch (error) {
				await handleError(error, res);
			}

			break;
		}

		default:
			return res.status(405).json({ message: `Method "${req.method}" not allowed!` });
	}
};
