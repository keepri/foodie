import Button from '#components/Buttons/Button';
import Link from '#components/Buttons/Link';
import CartItem from '#components/Cart/CartItem/CartItem';
import { getLang } from '#controllers/getLang';
import { isObjPopulated } from '#controllers/validation/isObjPopulated';
import { ReduxState } from '#declarations/types/Redux';
import { ORDER_STATUS } from '#firebase/declarations/enums';
import { OrderSchema } from '#firebase/declarations/schemas';
import { OrdersSuccess } from '#firebase/declarations/types';
import { authRef } from '#firebase/initClientApp';
import { useAuthActions, useCartActions } from '#redux/actions';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { URLS } from 'utils/misc';

import styles from './Cart.module.scss';

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
	page?: boolean;
	onNoItems?: () => void;
	onOrderSuccess?: () => void;
	onOrderFail?: () => void;
}

const Cart: React.FC<Props> = ({ className, page, onNoItems, onOrderSuccess, onOrderFail, ...rest }) => {
	const lang = getLang();
	const { push } = useRouter();

	const {
		cart: { items, total, info, restaurant },
		auth: {
			isLogged,
			user: { orders },
		},
		app: { currency },
	} = useSelector(({ cart, auth, app }: ReduxState) => ({ cart, auth, app }));

	const { updateCart, resetCart } = useCartActions();
	const { updateUserAuth } = useAuthActions();

	const handleSubmit = React.useCallback(async () => {
		if (!items.length) {
			console.warn('no items in cart');
			onNoItems && onNoItems();
			return;
		}

		if (!isLogged) {
			push(URLS.LOGIN);
			return;
		}

		const currentUser = authRef.currentUser;

		if (currentUser) {
			const client = currentUser.uid ?? '';

			if (client === '') {
				// TODO handle error
				console.warn('no client uid has been set');
				return;
			}

			const date = new Date().getTime();
			const order: OrderSchema = {
				uid: '',
				items,
				total,
				info,
				client,
				restaurant,
				status: ORDER_STATUS.PENDING,
				date,
			};

			const orderOk = isObjPopulated(order, ['info', 'uid']);

			if (!orderOk) {
				// TODO handle order fields not ok
				console.warn('Order fields not filled', order);
				return;
			}

			try {
				const { status, data }: AxiosResponse<OrdersSuccess> = await axios.post(URLS.API_PLACE_ORDER, {
					data: order,
				});

				if (status === 200) {
					console.log('Order placed successfully!');

					const { orderUid } = data;

					orderUid && updateUserAuth({ orders: [...orders, orderUid] });
					onOrderSuccess && onOrderSuccess();
					resetCart();
				}
			} catch (error) {
				console.warn('Place order failed with:', error);
				onOrderFail && onOrderFail();
			}
		}
	}, [info, isLogged, items.length, orders.length, restaurant, total]);

	const handleInfoChange = React.useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		updateCart({ info: e.target.value });
	}, []);

	const handleClearItems = React.useCallback(() => {
		resetCart();
	}, []);

	return (
		<div className={[styles['cart'], page && styles['cart-page'], className].join(' ')} {...rest}>
			<div className={styles['cart-body']}>
				<div className={styles['cart-body-items']}>
					{/* SHOW THIS IF THE CART IS EMPTY */}
					{items.length === 0 ? (
						<>
							<p style={{ marginBottom: '1rem' }}>{lang.noItemsInCart}</p>
							<Link button primary href={URLS.HOME}>
								{lang.restaurants}
							</Link>
						</>
					) : (
						// SHOW THIS IF THE CART HAS ITEMS INSIDE OF IT
						<>
							<Button simple className={styles['cart-body-items-clear']} onMouseUp={handleClearItems}>
								{lang.clear}
							</Button>

							{items.map((cartItem, index) => (
								<CartItem className={styles['cart-item']} key={'cart-item-' + index} index={index} item={cartItem} />
							))}
						</>
					)}
				</div>
			</div>
			<div className={styles['cart-footer']}>
				<div className={styles['cart-footer-info']}>
					<label>
						{lang.total}:
						<p>
							{' '}
							{total} {currency}
						</p>
					</label>
					<textarea maxLength={200} placeholder={lang.moreInfo} value={info} onChange={e => handleInfoChange(e)} />
				</div>
				<Button fullWidth primary onMouseUp={() => handleSubmit()}>
					{lang.placeOrder}
				</Button>
			</div>
		</div>
	);
};

export default Cart;
