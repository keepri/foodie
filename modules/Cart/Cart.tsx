import Button from '#components/Buttons/Button';
import CartItem from '#components/Cart/CartItem/CartItem';
import { getLang } from '#controllers/getLang';
import { isObjPopulated } from '#controllers/validation/isObjPopulated';
import { ReduxState } from '#declarations/types/Redux';
import { ORDER_STATUS } from '#firebase/declarations/enums';
import { OrderSchema } from '#firebase/declarations/schemas';
import { authRef } from '#firebase/initClientApp';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { URLS } from 'utils/misc';

import styles from './Cart.module.scss';

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
	page?: boolean;
}

const Cart: React.FC<Props> = ({ className, page, ...rest }) => {
	const lang = getLang();
	const { push } = useRouter();

	const {
		cart: { items, total, info, restaurant },
		auth: { isLogged },
		app: { currency },
	} = useSelector(({ cart, auth, app }: ReduxState) => ({ cart, auth, app }));

	const handleSubmit = async () => {
		if (!isLogged) {
			push(URLS.LOGIN);
			return;
		}

		const currentUser = authRef.currentUser;

		if (currentUser) {
			const client = currentUser.uid ?? '';
			const date = new Date().getTime();
			const order: OrderSchema = { items, total, info, client, restaurant, status: ORDER_STATUS.PENDING, date };
			const orderOk = isObjPopulated(order, ['info']);

			if (!orderOk) {
				// TODO handle order fields not ok
				console.warn('Order fields not filled', order);
				return;
			}

			try {
				const { status } = await axios.post(URLS.API_PLACE_ORDER, { data: order });

				status === 200 && console.log('Order placed successfully!');
			} catch (error) {
				console.warn('Place order failed with:', error);
			}
		}
	};

	return (
		<div className={[styles['cart'], page && styles['cart-page'], className].join(' ')} {...rest}>
			<div className={styles['cart-body']}>
				<div className={styles['cart-body-items']}>
					{items.map((cartItem, index) => (
						<CartItem key={'cart-item-' + index} index={index} item={cartItem} />
					))}
				</div>
			</div>
			<div className={styles['cart-footer']}>
				<div className={styles['cart-footer-info']}>
					<label>
						{lang.total} :
						<p>
							{' '}
							{total} {currency}
						</p>
					</label>
				</div>
				<Button fullWidth secondary onMouseUp={() => handleSubmit()}>
					{lang.placeOrder}
				</Button>
			</div>
		</div>
	);
};

export default Cart;
