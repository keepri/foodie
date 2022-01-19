import { getLang } from '#controllers/getLang';
import React from 'react';

import styles from './OrdersHeader.module.scss';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const OrdersHeader: React.FC<Props> = ({ className }) => {
	const lang = getLang();

	return (
		<header className={[styles['orders-header'], className].join(' ')}>
			<h1 style={{ marginBottom: '1rem' }}>{lang.myOrders}</h1>
		</header>
	);
};

export default OrdersHeader;
