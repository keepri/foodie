import Button from '#components/Buttons/Button';
import CartItem from '#components/Cart/CartItem/CartItem';
import { getLang } from '#controllers/getLang';
import { ReduxState } from '#declarations/types/Redux';
import { ORDER_STATUS } from '#firebase/declarations/enums';
import { OrderSchema } from '#firebase/declarations/schemas';
import { authRef } from '#firebase/initClientApp';
import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { URLS } from 'utils/misc';

import styles from './Cart.module.scss';

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Cart: React.FC<Props> = ({ className }) => {
	const lang = getLang();

	const {
		cart: { items, total, info, restaurant },
		auth: { isLogged },
	} = useSelector(({ cart, auth }: ReduxState) => ({ cart, auth }));

	const handleSubmit = async () => {
		const currentUser = authRef.currentUser;

		if (currentUser && isLogged) {
			const client = currentUser.uid ?? '';
			const date = new Date().getTime();
			const order: OrderSchema = { items, total, info, client, restaurant, status: ORDER_STATUS.PENDING, date };

			try {
				const { status } = await axios.post(URLS.API_PLACE_ORDER, { data: order });

				status === 200 && console.log('Order placed successfully!');
			} catch (error) {
				console.warn('Place order failed with:', error);
			}
		}
	};

	return (
		<div className={[styles['cart'], className].join(' ')}>
			<header className='cart-header'></header>
			<div className='cart-body'>
				<div className='cart-body-items'>
					{items.map((cartItem, index) => (
						<CartItem key={'cart-item-' + index} index={index} item={cartItem} />
					))}
				</div>
				<div className={styles['cart-body-info']}>
					<p>
						{lang.total} : {total}
					</p>
				</div>
			</div>
			<div className='cart-footer'>
				<Button secondary onMouseUp={() => handleSubmit()}>
					{lang.placeOrder}
				</Button>
			</div>
		</div>
	);
};

export default Cart;
