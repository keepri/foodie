import { REQUEST_METHODS } from '#declarations/enums/REST';
import { MESSAGES } from '#firebase/declarations/enums';
import { MenuSchema } from '#firebase/declarations/schemas';
import { MenusRequestBody } from '#firebase/declarations/types';
import { NextApiRequest } from 'next';
import { baseMenu } from 'utils/baseForms';
import { objectContainsSameKeys } from '../objectContainsSameKeys';
import { verifyToken } from '../verifyToken';

export { menuRouteValidation };

const menuRouteValidation = async (req: NextApiRequest) => {
	// BYPASS FOR ROUTES THAT ARE NOT IMPLEMENTED
	if (req.method === REQUEST_METHODS.DELETE || req.method === REQUEST_METHODS.GET) return;

	// TEST MANDATORY FIELDS "POST" & CHECK FIELDS SENT TO BE WHAT WE ACCEPT IN THE SCHEMA
	if (
		req.method === REQUEST_METHODS.POST ||
		req.method === REQUEST_METHODS.PUT ||
		req.method === REQUEST_METHODS.PATCH
	) {
		try {
			await verifyToken(req);

			const { data } = req.body as MenusRequestBody;
			if (!data) {
				// res.status(400).json({ message: MESSAGES.MENUS_MDANDATORY_FIELDS_DATA });
				throw Error(MESSAGES.MENUS_MDANDATORY_FIELDS_DATA);
			}

			const { isValid, errorFields } = objectContainsSameKeys<MenuSchema>(data, baseMenu);
			if (!isValid) {
				// res.status(400).json({ message: MESSAGES.ERROR, errorFields });
				throw Error(MESSAGES.ERROR + errorFields);
			}
		} catch (error) {
			throw error;
		}
	}
};
