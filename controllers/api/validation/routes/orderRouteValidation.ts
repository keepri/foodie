import { REQUEST_METHODS } from '#declarations/enums/REST';
import { MESSAGES } from '#firebase/declarations/enums';
import { OrderSchema } from '#firebase/declarations/schemas';
import { OrdersRequestBody } from '#firebase/declarations/types';
import { NextApiRequest, NextApiResponse } from 'next';
import { baseOrder } from 'utils/baseForms';
import { objectContainsSameKeys } from '../objectContainsSameKeys';
import { verifyToken } from '../verifyToken';

export { orderRouteValidation };

const orderRouteValidation = async (req: NextApiRequest, res: NextApiResponse) => {
	// BYPASS FOR ROUTES THAT ARE NOT IMPLEMENTED
	if (req.method === REQUEST_METHODS.DELETE || req.method === REQUEST_METHODS.PUT) return;

	// ROUTE SECURITY
	try {
		await verifyToken(req, res);
	} catch (error) {
		throw error;
	}

	// TEST MANDATORY FIELDS "PATCH" & CHECK FIELDS SENT TO BE WHAT WE ACCEPT IN THE SCHEMA
	if (req.method === REQUEST_METHODS.PATCH) {
		const { uid, data } = req.body as OrdersRequestBody;
		if (!uid || !data) return res.status(400).json({ message: MESSAGES.ORDERS_MANDATORY_FIELDS_UID_DATA });

		const { isValid, errorFields } = objectContainsSameKeys<OrderSchema>(data, baseOrder);
		if (!isValid) return res.status(400).json({ message: MESSAGES.ERROR, errorFields });
	}

	// TEST MANDATORY FIELDS "POST" & CHECK FIELDS SENT TO BE WHAT WE ACCEPT IN THE SCHEMA
	if (req.method === REQUEST_METHODS.POST) {
		const { data } = req.body as OrdersRequestBody;
		if (!data) return res.status(400).json({ message: MESSAGES.ORDERS_MANDATORY_FIELDS_DATA });

		const { isValid, errorFields } = objectContainsSameKeys<OrderSchema>(data, baseOrder);
		if (!isValid) return res.status(400).json({ message: MESSAGES.ERROR, errorFields });
	}

	// TEST MANDATORY FIELDS "GET"
	if (req.method === REQUEST_METHODS.GET) {
		const { accountType } = req.body as OrdersRequestBody;
		if (!accountType) return res.status(400).json({ message: MESSAGES.ORDERS_MANDATORY_FIELDS_UID_DATA });
	}
};
