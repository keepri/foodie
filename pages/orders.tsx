import React from 'react';
import type { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';
import axios, { AxiosResponse } from 'axios';

import { auth } from 'firebase-admin';
import { OrderSchema } from '#firebase/declarations/schemas';
import { COOKIE_NAMES } from '#firebase/declarations/enums';
import { OrdersSuccess } from '#firebase/declarations/types';

import styles from '#styles/pages/OrdersPage.module.scss';
import { URLS } from '#utils/misc';

import { parseTokenString } from '#controllers/api/validation/parseTokenString';

import OrdersHeader from '#components/Headers/OrdersHeader/OrdersHeader';
import Orders from '#modules/Orders/Orders';

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
		const { tokenString } = parseTokenString(token);

		const { uid } = await auth().verifyIdToken(tokenString, checkRevoked);

		const { status, data }: AxiosResponse<OrdersSuccess> = await axios.get(`${URLS.API_GET_ORDERS}/${uid}`, {
			withCredentials: true,
		});

		if (status !== 200) return { props: { orders: [] } };

		const { orders } = data;
		if (!orders) return { props: { orders: [] } };

		return {
			props: { orders },
		};
	} catch ({ code, message }) {
		console.warn('get server side props fail:', code, message);
		return { props: { orders: [] } };
	}
};

export default OrdersPage;
