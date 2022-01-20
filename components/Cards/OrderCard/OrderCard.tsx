import React from 'react';
import { getLang } from '#controllers/getLang';
import { firstToUpper } from '#controllers/text/firstToUpper';
import { ReduxState } from '#declarations/types/Redux';
import { OrderSchema } from '#firebase/declarations/schemas';
import { useSelector } from 'react-redux';

import styles from './OrderCard.module.scss';
import { ORDER_STATUS } from '#firebase/declarations/enums';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	order: OrderSchema;
	index: number;
}

const OrderCard: React.FC<Props> = ({ order, index, className, ...rest }) => {
	const lang = getLang();

	const {
		app: { currency, restaurants },
	} = useSelector(({ app }: ReduxState) => ({ app }));

	const { uid, status, items, total, date, restaurant: restaurantUid } = order;
	const orderDate = new Date(date);
	const totalItems = items.reduce((curr, acc) => (curr += acc.quantity), 0);
	const restaurantName = restaurants?.filter(location => location.uid === restaurantUid)?.[0]?.name;
	const isPending = status === ORDER_STATUS.PENDING;
	const isAccepted = status === ORDER_STATUS.ACCEPTED;
	const isCompleted = status === ORDER_STATUS.COMPLETED;
	const isCanceled = status === ORDER_STATUS.CANCELED;

	return (
		<div className={[styles['order-card'], className].join(' ')} {...rest}>
			<div className={styles['order-card-body']}>
				<p className={styles['order-card-body-restaurant-name']}>{restaurantName}</p>
				<p className={styles['order-card-body-order-number']}>
					{lang.orderNo}
					{uid.slice(0, 5)}
				</p>
				<p suppressHydrationWarning className={styles['order-card-body-order-date']}>
					{orderDate.toLocaleString(undefined, {
						day: '2-digit',
						month: 'short',
						hour: '2-digit',
						year: 'numeric',
						minute: '2-digit',
						hour12: false,
					})}
				</p>
				<div className={styles['order-card-body-items']}>
					{items.map(({ uid, name, description, quantity, price }, index) => (
						<div key={uid + index}>
							<span style={{ display: 'flex', gap: '.35rem' }}>
								<p>x{quantity}</p>
								<p>{name}</p>
							</span>
							<p>{description}</p>
							<p>
								{price * quantity} {currency}
							</p>
						</div>
					))}
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
					<div>
						<p className={styles['order-card-body-items-count']}>
							x{totalItems} {lang.items}
						</p>
						<p className={styles['order-card-body-total']}>
							{lang.total}: {total} {currency}
						</p>
					</div>
					<p
						style={{
							color: isPending
								? '#e0e400'
								: isAccepted
								? '#a7e400'
								: isCompleted
								? '#2ee400'
								: isCanceled
								? '#e40000'
								: '#333',
						}}
						className={styles['order-card-body-order-status']}
					>
						{firstToUpper(status)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default OrderCard;
