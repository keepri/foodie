import { NextApiRequest, NextApiResponse } from 'next';

import { REQUEST_METHODS } from '#declarations/enums/REST';

import { OrdersReturnType, OrdersRequestBody } from '#firebase/declarations/types';
import { COLLECTIONS, MESSAGES } from '#firebase/declarations/enums';
import { OrderSchema } from '#firebase/declarations/schemas';
import { firestore } from '#firebase/initServerApp';

import { handleError } from '#controllers/api/handleError';
import { useCors } from '#controllers/api/middleware/useCors';
import { orderRouteValidation } from '#controllers/api/validation/routes/orderRouteValidation';

export default async (req: NextApiRequest, res: NextApiResponse<OrdersReturnType>) => {
	// INITIAL ROUTE VERIFICATIONS
	try {
		await useCors(req, res);
		await orderRouteValidation(req, res);
	} catch (error) {
		await handleError(error, res);
	}

	switch (req.method) {
		// GET
		case REQUEST_METHODS.GET: {
			try {
				const { accountType, tokenUid } = req.body as OrdersRequestBody;
				const ordersCol = firestore.collection(COLLECTIONS.ORDERS);
				const ordersQuery = await ordersCol.where(accountType as string, '==', tokenUid as string).get();

				if (ordersQuery.empty) return res.status(404).json({ message: MESSAGES.NOT_FOUND });

				const orders = ordersQuery.docs.map(doc => doc.data() as OrderSchema);

				return res.status(200).json({ orders });
			} catch (error) {
				await handleError(error, res);
			}

			break;
		}

		// POST
		case REQUEST_METHODS.POST: {
			try {
				const { data } = req.body as OrdersRequestBody;
				const orderDoc = firestore.collection(COLLECTIONS.ORDERS).doc();
				await orderDoc.set(data as OrderSchema);

				return res.status(200).json({ message: MESSAGES.SUCCESS });
			} catch (error) {
				await handleError(error, res);
			}

			break;
		}

		// PATCH
		case REQUEST_METHODS.PATCH: {
			try {
				const { uid, data } = req.body as OrdersRequestBody;
				const orderDoc = firestore.collection(COLLECTIONS.ORDERS).doc(uid as string);

				if (!(await orderDoc.get()).exists) return res.status(404).json({ message: MESSAGES.NOT_FOUND });

				await orderDoc.update(data as Partial<OrderSchema>);
				const order = (await orderDoc.get()).data() as OrderSchema;

				return res.status(200).json({ order });
			} catch (error) {
				await handleError(error, res);
			}

			break;
		}

		// PUT
		case REQUEST_METHODS.PUT: {
			try {
				const { uid, data } = req.body as OrdersRequestBody;
				const orderDoc = firestore.collection(COLLECTIONS.ORDERS).doc(uid as string);

				if (!(await orderDoc.get()).exists) return res.status(404).json({ message: MESSAGES.NOT_FOUND });

				await orderDoc.set(data as OrderSchema);
				const order = (await orderDoc.get()).data() as OrderSchema;

				return res.status(200).json({ order });
			} catch (error) {
				await handleError(error, res);
			}

			break;
		}

		default:
			return res.status(405).json({ message: `Method "${req.method}" not allowed!` });
	}
};
