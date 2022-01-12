import { NextApiRequest, NextApiResponse } from 'next';

import { REQUEST_METHODS } from '#declarations/enums/REST';

import { RestaurantReturnType } from '#firebase/declarations/types';
import { COLLECTIONS, MESSAGES } from '#firebase/declarations/enums';
import { RestaurantSchema } from '#firebase/declarations/schemas';
import { firestore } from '#firebase/initServerApp';

import { handleError } from '#controllers/api/handleError';
import { useCors } from '#controllers/api/middleware/useCors';

export default async (req: NextApiRequest, res: NextApiResponse<RestaurantReturnType>) => {
	// INITIAL ROUTE VERIFICATIONS
	try {
		await useCors(req, res);
	} catch (error) {
		handleError(error, res);
	}

	switch (req.method?.toUpperCase()) {
		// GET
		case REQUEST_METHODS.GET: {
			try {
				const { uid } = req.query;
				if (!uid) return res.status(401).json({ message: MESSAGES.RESTAURANTS_MANDATORY_FIELDS_UID });

				const restaurantDoc = await firestore
					.collection(COLLECTIONS.RESTAURANTS)
					.doc(uid as string)
					.get();
				if (!restaurantDoc.exists) return res.status(404).json({ message: MESSAGES.NOT_FOUND });

				const restaurant = restaurantDoc.data() as RestaurantSchema;

				return res.status(200).json({ restaurant });
			} catch (error) {
				handleError(error, res);
			}

			break;
		}

		default:
			return res.status(405).json({ message: `Method "${req.method}" not allowed!` });
	}
};
