import Button from '#components/Buttons/Button';
import Link from '#components/Buttons/Link';
import CartItem from '#components/Cart/CartItem/CartItem';
import { getLang } from '#controllers/getLang';
import { isObjPopulated } from '#controllers/validation/isObjPopulated';
import { ReduxState } from '#declarations/types/Redux';
import { ORDER_STATUS } from '#firebase/declarations/enums';
import { OrderSchema } from '#firebase/declarations/schemas';
import { authRef } from '#firebase/initClientApp';
import { useCartActions } from '#redux/actions';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { initCartState, URLS } from 'utils/misc';

import styles from './Cart.module.scss';

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
	page?: boolean;
}

const Cart: React.FC<Props> = ({ className, page, ...rest }) => {
	const lang = getLang();
	const { push } = useRouter();

	const [orderPlaced, setOrderPlaced] = React.useState(false);
	const {
		cart: { items, total, info, restaurant },
		auth: { isLogged },
		app: { currency },
	} = useSelector(({ cart, auth, app }: ReduxState) => ({ cart, auth, app }));
	const { updateCart } = useCartActions();

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

				if (status === 200) {
					// TODO handle successfully placed order
					console.log('Order placed successfully!');
					updateCart(initCartState);
					setOrderPlaced(true);
				}
			} catch (error) {
				console.warn('Place order failed with:', error);
			}
		}
	};

	const handleInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		updateCart({ info: e.target.value });
	};

	return (
		<div className={[styles['cart'], page && styles['cart-page'], className].join(' ')} {...rest}>
			<div className={styles['cart-body']}>
				<div className={styles['cart-body-items']}>
					{/* SHOW THIS IF THE CART IS EMPTY */}
					{items.length === 0 && (
						<>
							<p style={{ marginBottom: '1rem' }}>{lang.noItemsInCart}</p>
							{orderPlaced && (
								<Link href={URLS.ORDERS} button primary>
									{lang.myOrders}
								</Link>
							)}
							<Link href={URLS.HOME} button secondary={orderPlaced} primary={!orderPlaced}>
								{lang.restaurants}
							</Link>
						</>
					)}

					{/* SHOW THIS IF THE CART HAS ITEMS INSIDE OF IT */}
					{items.map((cartItem, index) => (
						<CartItem className={styles['cart-item']} key={'cart-item-' + index} index={index} item={cartItem} />
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
