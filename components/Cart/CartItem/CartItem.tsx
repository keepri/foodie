import React from 'react';

import { OrderItem } from '#firebase/declarations/interfaces';

import ToggleQuantity from '#components/ToggleQuantity/ToggleQuantity';

import styles from './CartItem.module.scss';

import { useCartActions } from '#redux/actions';

interface Props extends React.HTMLAttributes<HTMLElement> {
	index: number;
	item: OrderItem;
}

const CartItem: React.FC<Props> = ({ className, index, item, ...rest }) => {
	const { name, description, quantity, price } = item;

	const { updateCartItem, removeItemCart } = useCartActions();

	const handleToggleQuantity = (value: number) => {
		const quantity = item.quantity + value;

		if (quantity === 0) {
			removeItemCart(index);
			return;
		}

		const update = { quantity };

		updateCartItem({ index, update });
	};

	return (
		<div className={[styles['cart-item'], className].join(' ')} {...rest}>
			<p className={styles['cart-item-name']}>{name}</p>
			<p className={styles['cart-item-description']}>{description}</p>
			<ToggleQuantity quantity={quantity} onToggle={(value: number) => handleToggleQuantity(value)} />
			<p className={styles['cart-item-price']}>{price}</p>
		</div>
	);
};

export default CartItem;
