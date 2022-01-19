import OrderCard from '#components/Cards/OrderCard/OrderCard';
import { OrderSchema } from '#firebase/declarations/schemas';
import React from 'react';

import styles from './Orders.module.scss';

interface Props extends React.HTMLAttributes<HTMLElement> {
	orders: OrderSchema[];
}

const Orders: React.FC<Props> = ({ orders, className, ...rest }) => {
	return (
		<section className={[styles['orders'], className].join(' ')} {...rest}>
			{orders.map((order, index) => (
				<OrderCard key={`order_key_${index}`} order={order} index={index} />
			))}
		</section>
	);
};

export default Orders;
