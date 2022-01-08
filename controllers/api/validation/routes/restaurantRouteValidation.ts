import { handleError } from '#controllers/api/handleError';
import { REQUEST_METHODS } from '#declarations/enums/REST';
import { MESSAGES } from '#firebase/declarations/enums';

import { RestaurantsRequestBody } from '#firebase/declarations/types';
import { NextApiRequest, NextApiResponse } from 'next';

import { isSameUser } from '../isSameUser';
import { verifyToken } from '../verifyToken';

export { restaurantRouteValidation };

const restaurantRouteValidation = async (req: NextApiRequest, res: NextApiResponse) => {
	// BYPASS FOR ROUTES THAT ARE NOT IMPLEMENTED
	if (req.method === REQUEST_METHODS.POST || req.method === REQUEST_METHODS.GET) return;

	if (req.method === REQUEST_METHODS.PATCH || req.method === REQUEST_METHODS.PUT) {
		try {
			await verifyToken(req, res);
			const { tokenUid } = req.body;
			isSameUser(req, res, tokenUid);
		} catch (error) {
			handleError(error, res);
		}

		const { uid, data } = req.body as RestaurantsRequestBody;
		if (!uid || !data) {
			res.status(400).json({ message: MESSAGES.RESTAURANTS_MANDATORY_FIELDS_ALL });
			throw new Error('No "uid" fields found');
		}
	}

	// TEST MANDATORY FIELDS FOR DELETE ROUTE
	if (req.method === REQUEST_METHODS.DELETE) {
		const { uid } = req.body as RestaurantsRequestBody;
		if (!uid) {
			res.status(400).json({ message: MESSAGES.RESTAURANTS_MANDATORY_FIELDS_UID });
			throw new Error('No "uid" fields found');
		}
	}
};
