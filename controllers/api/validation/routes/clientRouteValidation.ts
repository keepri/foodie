import { REQUEST_METHODS } from '#declarations/enums/REST';
import { MESSAGES } from '#firebase/declarations/enums';
import { ClientSchema } from '#firebase/declarations/schemas';
import { ClientsRequestBody } from '#firebase/declarations/types';
import {
	NextApiRequest,
	//  NextApiResponse
} from 'next';
import { baseClient } from '#utils/baseForms';
// import { isSameUser } from '../isSameUser';
import { objectContainsSameKeys } from '../objectContainsSameKeys';
import { verifyToken } from '../verifyToken';

export { clientRouteValidation };

const clientRouteValidation = async (
	req: NextApiRequest,
	//  res: NextApiResponse
) => {
	// BYPASS FOR ROUTES THAT ARE NOT IMPLEMENTED
	if (req.method === REQUEST_METHODS.GET) return;

	// ROUTE SECURITY
	try {
		await verifyToken(req);
	} catch (error) {
		throw error;
	}

	if (req.method === REQUEST_METHODS.POST) {
		// const tokenUid = req.body.tokenUid;
		// try {
		// 	isSameUser(req, res, tokenUid);
		// } catch (error) {
		// 	throw error;
		// }
	}

	// TEST MANDATORY FIELDS "PATCH", "PUT" & CHECK FIELDS SENT TO BE WHAT WE ACCEPT IN THE SCHEMA
	if (req.method === REQUEST_METHODS.PATCH || req.method === REQUEST_METHODS.PUT) {
		const { data } = req.body as ClientsRequestBody;
		if (!data) {
			// res.status(400).json({ message: MESSAGES.CLIENTS_MANDATORY_FIELDS_DATA });
			throw Error(MESSAGES.CLIENTS_MANDATORY_FIELDS_DATA);
		}

		const { isValid, errorFields } = objectContainsSameKeys<ClientSchema>(data, baseClient);
		if (!isValid) {
			// res.status(400).json({ message: MESSAGES.ERROR, errorFields });
			throw Error(MESSAGES.ERROR + errorFields);
		}
	}
};
