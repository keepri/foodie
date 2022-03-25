import { COLLECTIONS } from '#firebase/declarations/enums';
import { OrderSchema } from '#firebase/declarations/schemas';
import { firestore } from '#firebase/initServerApp';

export { getOrdersByUidServerSide };

const getOrdersByUidServerSide = async (uid: string) => {
	try {
		const ordersCol = firestore.collection(COLLECTIONS.ORDERS);
		const ordersQuery = await ordersCol.where('client', '==', uid as string).get();

		if (ordersQuery.empty) return { orders: [] };

		const orders = ordersQuery.docs.map(doc => doc.data() as OrderSchema).sort((a, b) => b.date - a.date);

		return { orders };
	} catch (error) {
		throw error;
	}
};
