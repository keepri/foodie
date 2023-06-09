import { NextApiRequest, NextApiResponse } from 'next';

import { REQUEST_METHODS } from '#declarations/enums/REST';

import { OrdersReturnType } from '#firebase/declarations/types';
import { MESSAGES } from '#firebase/declarations/enums';

import { handleError } from '#controllers/api/handleError';
import { useCors } from '#controllers/api/middleware/useCors';
import { getOrdersByUidServerSide } from '#controllers/api/get/getOrdersByUidServerSide';

// import { isSameUser } from '#controllers/api/validation/isSameUser';

export default async (req: NextApiRequest, res: NextApiResponse<OrdersReturnType>) => {
	// INITIAL ROUTE VERIFICATIONS
	try {
		// const {uid} = req.query;

		await useCors(req, res);
		// isSameUser(req, res, uid as string);
	} catch (error) {
		handleError(error, res);
		return;
	}

	switch (req.method?.toUpperCase()) {
		// GET
		case REQUEST_METHODS.GET: {
			try {
				const { uid } = req.query;

				if (!uid) {
					return res.status(401).json({ message: 'No "uid" field passed' });
				}

				const { orders } = await getOrdersByUidServerSide(uid as string);

				if (!orders.length) {
					return res.status(404).json({ message: MESSAGES.NOT_FOUND });
				}

				// const ordersCol = firestore.collection(COLLECTIONS.ORDERS);
				// const ordersQuery = await ordersCol.where('client', '==', uid as string).get();
				// if (ordersQuery.empty) return res.status(404).json({ message: MESSAGES.NOT_FOUND });
				// const orders = ordersQuery.docs.map(doc => doc.data() as OrderSchema).sort((a, b) => b.date - a.date);

				return res.status(200).json({ orders });
			} catch (error) {
				handleError(error, res);
			}

			break;
		}

		default:
			return res.status(405).json({ message: `Method "${req.method}" not allowed!` });
	}
};
