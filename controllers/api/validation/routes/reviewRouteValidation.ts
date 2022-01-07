import { REQUEST_METHODS } from '#declarations/enums/REST';
import { MESSAGES } from '#firebase/declarations/enums';
import { ReviewSchema } from '#firebase/declarations/schemas';
import { ReviewsRequestBody } from '#firebase/declarations/types';
import { NextApiRequest, NextApiResponse } from 'next';
import { baseReview } from 'utils/baseForms';
import { objectContainsSameKeys } from '../objectContainsSameKeys';
import { verifyToken } from '../verifyToken';

export { reviewRouteValidation };

const reviewRouteValidation = async (req: NextApiRequest, res: NextApiResponse) => {
	// BYPASS FOR ROUTES THAT ARE NOT IMPLEMENTED
	if (
		req.method === REQUEST_METHODS.DELETE ||
		req.method === REQUEST_METHODS.PATCH ||
		req.method === REQUEST_METHODS.PUT
	)
		return;

	// TEST MANDATORY FIELDS "GET" & CHECK FIELDS SENT TO BE WHAT WE ACCEPT IN THE SCHEMA
	if (req.method === REQUEST_METHODS.GET) {
		const { uid } = req.body as ReviewsRequestBody;
		if (!uid) {
			res.status(400).json({ message: MESSAGES.REVIEWS_MDANDATORY_FIELDS_UID });
			throw new Error('No "uid" field found');
		}
	}

	// TEST MANDATORY FIELDS "POST" & CHECK FIELDS SENT TO BE WHAT WE ACCEPT IN THE SCHEMA
	if (req.method === REQUEST_METHODS.POST) {
		try {
			await verifyToken(req, res);

			const { data } = req.body as ReviewsRequestBody;
			if (!data) {
				res.status(400).json({ message: MESSAGES.REVIEWS_MDANDATORY_FIELDS_DATA });
				throw new Error('No "data" field found');
			}

			const { isValid, errorFields } = objectContainsSameKeys<ReviewSchema>(data, baseReview);
			if (!isValid) {
				res.status(400).json({ message: MESSAGES.ERROR, errorFields });
				throw new Error('Fields are missing from data sent');
			}
		} catch (error) {
			throw error;
		}
	}
};
