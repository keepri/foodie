import { REQUEST_METHODS } from '#declarations/enums/REST';
import { MESSAGES } from '#firebase/declarations/enums';
import { RestaurantSchema } from '#firebase/declarations/schemas';
import { RestaurantsRequestBody } from '#firebase/declarations/types';
import { NextApiRequest, NextApiResponse } from 'next';
import { baseRestaurant } from 'utils/baseForms';
import { isSameUser } from '../isSameUser';
import { objectContainsSameKeys } from '../objectContainsSameKeys';
import { verifyToken } from '../verifyToken';

export { restaurantRouteValidation };

const restaurantRouteValidation = async (req: NextApiRequest, res: NextApiResponse) => {
	// BYPASS FOR ROUTES THAT ARE NOT IMPLEMENTED
	if (req.method === REQUEST_METHODS.POST) return;

	// TEST MANDATORY FIELDS (ALL ROUTES EXCEPT "GET" and "DELETE") & CHECK FIELDS SENT TO BE WHAT WE ACCEPT IN THE SCHEMA
	if (req.method !== REQUEST_METHODS.DELETE && req.method !== REQUEST_METHODS.GET) {
		const { uid, data } = req.body as RestaurantsRequestBody;
		if (!uid || !data) return res.status(400).json({ message: MESSAGES.RESTAURANTS_MANDATORY_FIELDS_ALL });

		const { isValid, errorFields } = objectContainsSameKeys<RestaurantSchema>(data, baseRestaurant);
		if (!isValid) return res.status(400).json({ message: MESSAGES.ERROR, errorFields });
	}

	// TEST MANDATORY FIELDS FOR DELETE ROUTE
	if (req.method === REQUEST_METHODS.DELETE) {
		const { uid } = req.body as RestaurantsRequestBody;
		if (!uid) return res.status(400).json({ message: MESSAGES.RESTAURANTS_MANDATORY_FIELDS_UID });
	}

	// ROUTE SECURITY
	if (req.method !== REQUEST_METHODS.GET) {
		try {
			await verifyToken(req, res);
			isSameUser(req, res, req.body?.tokenUid);
		} catch (error) {
			throw error;
		}
	}
};
