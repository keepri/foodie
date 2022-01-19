import { NextApiRequest, NextApiResponse } from 'next';

import { REQUEST_METHODS } from '#declarations/enums/REST';

import { OrdersReturnType, OrdersRequestBody } from '#firebase/declarations/types';
import { COLLECTIONS, MESSAGES } from '#firebase/declarations/enums';
import { ClientSchema, OrderSchema, RestaurantSchema } from '#firebase/declarations/schemas';
import { firestore } from '#firebase/initServerApp';

import { handleError } from '#controllers/api/handleError';
import { useCors } from '#controllers/api/middleware/useCors';
import { orderRouteValidation } from '#controllers/api/validation/routes/orderRouteValidation';

export default async (req: NextApiRequest, res: NextApiResponse<OrdersReturnType>) => {
	// INITIAL ROUTE VERIFICATIONS
	try {
		await useCors(req, res);
		await orderRouteValidation(req);
	} catch (error) {
		handleError(error, res);
		return;
	}

	switch (req.method?.toUpperCase()) {
		// GET
		case REQUEST_METHODS.GET: {
			try {
				const { tokenUid } = req.body as OrdersRequestBody;

				const ordersCol = firestore.collection(COLLECTIONS.ORDERS);
				const ordersQuery = await ordersCol.where('client', '==', tokenUid as string).get();

				if (ordersQuery.empty) return res.status(404).json({ message: MESSAGES.NOT_FOUND });

				const orders = ordersQuery.docs.map(doc => doc.data() as OrderSchema);

				return res.status(200).json({ orders });
			} catch (error) {
				handleError(error, res);
			}

			break;
		}

		// POST
		case REQUEST_METHODS.POST: {
			try {
				const { data } = req.body as OrdersRequestBody;
				if (!data) return res.status(400).json({ message: MESSAGES.ORDERS_MANDATORY_FIELDS_DATA });

				const orderDoc = firestore.collection(COLLECTIONS.ORDERS).doc();
				const orderUid = orderDoc.id;
				data.uid = orderUid;
				await orderDoc.set(data as OrderSchema);

				const { restaurant: restaurantUid, client: clientUid } = data as OrderSchema;
				const restaurantDoc = firestore.collection(COLLECTIONS.RESTAURANTS).doc(restaurantUid);
				const clientDoc = firestore.collection(COLLECTIONS.CLIENTS).doc(clientUid);
				const restaurant = (await restaurantDoc.get()).data() as RestaurantSchema;
				const client = (await clientDoc.get()).data() as ClientSchema;

				await restaurantDoc.update({ orders: [...restaurant.orders, orderUid] });
				await clientDoc.update({ orders: [...client.orders, orderUid] });

				return res.status(200).json({ orderUid, message: MESSAGES.SUCCESS });
			} catch (error) {
				handleError(error, res);
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
				handleError(error, res);
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
				handleError(error, res);
			}

			break;
		}

		default:
			return res.status(405).json({ message: `Method "${req.method}" not allowed!` });
	}
};
