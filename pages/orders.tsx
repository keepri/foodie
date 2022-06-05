import React from 'react';
import type { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';

import { auth } from 'firebase-admin';
import { OrderSchema } from '#firebase/declarations/schemas';
import { COOKIE_NAMES } from '#firebase/declarations/enums';

import styles from '#styles/pages/OrdersPage.module.scss';

import { parseToken } from 'react-code-snippets';

import OrdersHeader from '#components/Headers/OrdersHeader/OrdersHeader';
import Orders from '#modules/Orders/Orders';

// import { firestore } from '#firebase/initServerApp';
import { getOrdersByUidServerSide } from '#controllers/api/get/getOrdersByUidServerSide';

interface Props {
	orders: OrderSchema[];
}

const OrdersPage: NextPage<Props> = ({ orders }) => {
	return (
		<main className={['container', styles['orders-page']].join(' ')}>
			<OrdersHeader />
			<Orders orders={orders} />
		</main>
	);
};

export const getServerSideProps: GetServerSideProps = async ({
	req,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<{ orders: OrderSchema[] }>> => {
	try {
		const token = req.cookies?.[COOKIE_NAMES.TOKEN];
		if (!token) return { redirect: { destination: '/', statusCode: 301 } };

		const checkRevoked = true;
		const { tokenString } = parseToken(token);
		const { uid } = await auth().verifyIdToken(tokenString, checkRevoked);
		const { orders } = await getOrdersByUidServerSide(uid);

		// const ordersCol = firestore.collection(COLLECTIONS.ORDERS);
		// const ordersQuery = await ordersCol.where('client', '==', uid as string).get();
		// if (ordersQuery.empty) {
		// 	return {
		// 		notFound: true,
		// 	};
		// }
		// const orders = ordersQuery.docs.map(doc => doc.data() as OrderSchema).sort((a, b) => b.date - a.date);

		return {
			props: { orders },
		};
	} catch ({ code, message }) {
		console.warn('get server side props fail:', code, message);
		return { props: { orders: [] } };
	}
};

export default OrdersPage;
