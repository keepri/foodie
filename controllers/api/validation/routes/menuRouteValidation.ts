import { REQUEST_METHODS } from '#declarations/enums/REST';
import { MESSAGES } from '#firebase/declarations/enums';
import { MenuSchema } from '#firebase/declarations/schemas';
import { MenusRequestBody } from '#firebase/declarations/types';
import { NextApiRequest, NextApiResponse } from 'next';
import { baseMenu } from 'utils/baseForms';
import { objectContainsSameKeys } from '../objectContainsSameKeys';
import { verifyToken } from '../verifyToken';

export { menuRouteValidation };

const menuRouteValidation = async (req: NextApiRequest, res: NextApiResponse) => {
	// BYPASS FOR ROUTES THAT ARE NOT IMPLEMENTED
	if (req.method === REQUEST_METHODS.DELETE) return;

	// TEST MANDATORY FIELDS "GET" & CHECK FIELDS SENT TO BE WHAT WE ACCEPT IN THE SCHEMA
	if (req.method === REQUEST_METHODS.GET) {
		const { uid } = req.body as MenusRequestBody;
		if (!uid) return res.status(400).json({ message: MESSAGES.MENUS_MDANDATORY_FIELDS_UID });
	}

	// TEST MANDATORY FIELDS "POST" & CHECK FIELDS SENT TO BE WHAT WE ACCEPT IN THE SCHEMA
	if (
		req.method === REQUEST_METHODS.POST ||
		req.method === REQUEST_METHODS.PUT ||
		req.method === REQUEST_METHODS.PATCH
	) {
		try {
			await verifyToken(req, res);

			const { data } = req.body as MenusRequestBody;
			if (!data) return res.status(400).json({ message: MESSAGES.MENUS_MDANDATORY_FIELDS_DATA });

			const { isValid, errorFields } = objectContainsSameKeys<MenuSchema>(data, baseMenu);
			if (!isValid) return res.status(400).json({ message: MESSAGES.ERROR, errorFields });
		} catch (error) {
			throw error;
		}
	}
};
