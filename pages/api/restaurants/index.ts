import { NextApiRequest, NextApiResponse } from 'next';

import { REQUEST_METHODS } from '#declarations/enums/REST';
import { baseRestaurant } from 'utils/baseForms';

import { RestaurantsRequestBody, RestaurantsReturnType } from '#firebase/declarations/types';
import { COLLECTIONS, COOKIE_NAMES, MESSAGES } from '#firebase/declarations/enums';
import { RestaurantSchema } from '#firebase/declarations/schemas';
import { firestore } from '#firebase/initServerApp';

import { handleError } from '#controllers/api/handleError';
import { objectContainsSameKeys } from '#controllers/api/validation/objectContainsSameKeys';
import { verifyToken } from '#controllers/api/validation/verifyToken';

export default async (req: NextApiRequest, res: NextApiResponse<RestaurantsReturnType>) => {
	switch (req.method) {
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

		case REQUEST_METHODS.POST: {
			try {
				const token = req.cookies?.[COOKIE_NAMES.TOKEN];
				if (!token) return res.status(401).json({ message: MESSAGES.UNAUTHORIZED_NO_TOKEN });

				const { uid, data } = req.body as RestaurantsRequestBody;
				if (!uid || !data) return res.status(400).json({ message: MESSAGES.RESTAURANTS_MANDATORY_FIELDS_ALL });

				const { uid: tokenUid } = await verifyToken(token);
				if (uid !== tokenUid) return res.status(401).json({ message: MESSAGES.UNAUTHORIZED_TOKEN });

				const { isValid, errorFields } = objectContainsSameKeys<RestaurantSchema>(data, baseRestaurant);
				if (!isValid) return res.status(400).json({ message: MESSAGES.ERROR, errorFields });

				const restaurantCol = firestore.collection(COLLECTIONS.RESTAURANTS);
				await restaurantCol.doc(uid).set(data);

				return res.status(200).json({ message: MESSAGES.SUCCESS });
			} catch (error) {
				await handleError(error, res);
			}

			break;
		}

		case REQUEST_METHODS.PATCH: {
			try {
				const token = req.cookies?.[COOKIE_NAMES.TOKEN];
				if (!token) return res.status(401).json({ message: MESSAGES.UNAUTHORIZED_NO_TOKEN });

				const { uid, data } = req.body as RestaurantsRequestBody;
				if (!uid || !data) return res.status(400).json({ message: MESSAGES.RESTAURANTS_MANDATORY_FIELDS_ALL });

				const { uid: tokenUid } = await verifyToken(token);
				if (uid !== tokenUid) return res.status(401).json({ message: MESSAGES.UNAUTHORIZED_TOKEN });

				const { isValid, errorFields } = objectContainsSameKeys<RestaurantSchema>(data, baseRestaurant);
				if (!isValid) return res.status(400).json({ message: MESSAGES.ERROR, errorFields });

				const restaurantDoc = firestore.collection(COLLECTIONS.RESTAURANTS).doc(uid);
				await restaurantDoc.update(data);
				const restaurant = (await restaurantDoc.get()).data() as RestaurantSchema;

				return res.status(200).json({ restaurant });
			} catch (error) {
				await handleError(error, res);
			}

			break;
		}

		case REQUEST_METHODS.PUT: {
			try {
				const token = req.cookies?.[COOKIE_NAMES.TOKEN];
				if (!token) return res.status(401).json({ message: MESSAGES.UNAUTHORIZED_NO_TOKEN });

				const { uid, data } = req.body as RestaurantsRequestBody;
				if (!uid || !data) return res.status(400).json({ message: MESSAGES.RESTAURANTS_MANDATORY_FIELDS_ALL });

				const { uid: tokenUid } = await verifyToken(token);
				if (uid !== tokenUid) return res.status(401).json({ message: MESSAGES.UNAUTHORIZED_TOKEN });

				const { isValid, errorFields } = objectContainsSameKeys<RestaurantSchema>(data, baseRestaurant);
				if (!isValid) return res.status(400).json({ message: MESSAGES.ERROR, errorFields });

				const restaurantDoc = firestore.collection(COLLECTIONS.RESTAURANTS).doc(uid);
				await restaurantDoc.set(data);
				const restaurant = (await restaurantDoc.get()).data() as RestaurantSchema;

				return res.status(200).json({ restaurant });
			} catch (error) {
				await handleError(error, res);
			}

			break;
		}

		case REQUEST_METHODS.DELETE: {
			try {
				const token = req.cookies?.[COOKIE_NAMES.TOKEN];
				if (!token) return res.status(401).json({ message: MESSAGES.UNAUTHORIZED_NO_TOKEN });

				const { uid } = req.body as RestaurantsRequestBody;
				if (!uid) return res.status(400).json({ message: MESSAGES.RESTAURANTS_MANDATORY_FIELDS_ALL });

				const { uid: tokenUid } = await verifyToken(token);
				if (uid !== tokenUid) return res.status(401).json({ message: MESSAGES.UNAUTHORIZED_TOKEN });

				const restaurantCol = firestore.collection(COLLECTIONS.RESTAURANTS);
				await restaurantCol.doc(uid).delete();

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
