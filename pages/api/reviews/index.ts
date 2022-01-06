import { NextApiRequest, NextApiResponse } from 'next';

import { REQUEST_METHODS } from '#declarations/enums/REST';

import { ReviewsRequestBody, ReviewsReturnType } from '#firebase/declarations/types';
import { COLLECTIONS, MESSAGES } from '#firebase/declarations/enums';
import { ReviewSchema } from '#firebase/declarations/schemas';
import { firestore } from '#firebase/initServerApp';

import { handleError } from '#controllers/api/handleError';
import { useCors } from '#controllers/api/middleware/useCors';
import { reviewRouteValidation } from '#controllers/api/validation/routes/reviewRouteValidation';

export default async (req: NextApiRequest, res: NextApiResponse<ReviewsReturnType>) => {
	// INITIAL ROUTE VERIFICATIONS
	try {
		await useCors(req, res);
		await reviewRouteValidation(req, res);
	} catch (error) {
		await handleError(error, res);
	}

	switch (req.method?.toUpperCase()) {
		// GET
		case REQUEST_METHODS.GET: {
			try {
				const { uid } = req.body as ReviewsRequestBody;
				const reviewsCol = firestore.collection(COLLECTIONS.CLIENTS);
				const reviewsQuery = await reviewsCol.where('restaurant', '==', uid).get();

				if (reviewsQuery.empty) return res.status(404).json({ message: MESSAGES.NOT_FOUND });

				const reviews = reviewsQuery.docs.map(review => review.data() as ReviewSchema);

				return res.status(200).json({ reviews });
			} catch (error) {
				await handleError(error, res);
			}

			break;
		}

		case REQUEST_METHODS.POST: {
			try {
				const { data } = req.body as ReviewsRequestBody;
				const reviewDoc = firestore.collection(COLLECTIONS.REVIEWS).doc();
				await reviewDoc.set(data as ReviewSchema);

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
