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
		if (!uid || !data) {
			res.status(400).json({ message: MESSAGES.ORDERS_MANDATORY_FIELDS_UID_DATA });
			throw new Error('Error');
		}

		const { isValid, errorFields } = objectContainsSameKeys<OrderSchema>(data, baseOrder);
		if (!isValid) {
			res.status(400).json({ message: MESSAGES.ERROR, errorFields });
			throw new Error('Error');
		}
	}

	// TEST MANDATORY FIELDS "POST" & CHECK FIELDS SENT TO BE WHAT WE ACCEPT IN THE SCHEMA
	if (req.method === REQUEST_METHODS.POST) {
		const { data } = req.body as OrdersRequestBody;
		if (!data) {
			res.status(400).json({ message: MESSAGES.ORDERS_MANDATORY_FIELDS_DATA });
			throw new Error('Error');
		}

		const { isValid, errorFields } = objectContainsSameKeys<OrderSchema>(data, baseOrder, ['info']);
		if (!isValid) {
			res.status(400).send({ message: MESSAGES.ERROR, errorFields });
			throw new Error('Fields are missing from data sent');
		}
	}

	// TEST MANDATORY FIELDS "GET"
	if (req.method === REQUEST_METHODS.GET) {
		const { accountType } = req.body as OrdersRequestBody;
		if (!accountType) {
			res.status(400).json({ message: MESSAGES.ORDERS_MANDATORY_FIELDS_UID_DATA });
			throw new Error('Error');
		}
	}
};
