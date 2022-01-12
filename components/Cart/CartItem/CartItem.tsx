import React from 'react';

import { MenuItem } from '#firebase/declarations/interfaces';

import ToggleQuantity from '#components/ToggleQuantity/ToggleQuantity';

import styles from './CartItem.module.scss';

import { useCartActions } from '#redux/actions';
import Image from 'next/image';
import { defaultItemPhoto } from 'utils/misc';

interface Props extends React.HTMLAttributes<HTMLElement> {
	index: number;
	item: MenuItem;
}

const CartItem: React.FC<Props> = ({ className, index, item, ...rest }) => {
	const { name, description, quantity, price, photo } = item;
	const photoSize = 70;

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
			<Image
				src={photo && photo !== '' ? photo : defaultItemPhoto}
				width={photoSize}
				height={photoSize}
				objectFit='cover'
				objectPosition={'center'}
				alt='item-photo'
			/>
			<div className={styles['cart-item-info']}>
				<p className={styles['cart-item-info-name']}>{name}</p>
				<p className={styles['cart-item-info-description']}>{description}</p>
			</div>
			<ToggleQuantity horizontal quantity={quantity} onToggle={(value: number) => handleToggleQuantity(value)} />
			<p className={styles['cart-item-price']}>{price}</p>
		</div>
	);
};

export default CartItem;
