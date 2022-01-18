import React from 'react';

import { MenuItem } from '#firebase/declarations/interfaces';

import ToggleQuantity from '#components/ToggleQuantity/ToggleQuantity';

import styles from './CartItem.module.scss';

import { useCartActions } from '#redux/actions';
import Image from 'next/image';
import { defaultItemPhoto } from 'utils/misc';
import { useSelector } from 'react-redux';
import { ReduxState } from '#declarations/types/Redux';

interface Props extends React.HTMLAttributes<HTMLElement> {
	index: number;
	item: MenuItem;
	compact?: boolean;
}

const CartItem: React.FC<Props> = ({ className, index, item, compact, ...rest }) => {
	const { name, description, quantity, price, photo } = item;
	const photoSize = 70;

	const {
		app: { currency },
	} = useSelector(({ app }: ReduxState) => ({ app }));

	const { updateItemCart, removeItemCart } = useCartActions();

	const handleToggleQuantity = (value: number) => {
		const quantity = item.quantity + value;

		if (quantity === 0) {
			removeItemCart(index);
			return;
		}

		const update = { quantity };

		updateItemCart({ index, update });
	};

	return (
		<div
			className={[styles['cart-item'], compact && styles['cart-item-compact'], className].join(' ')}
			{...rest}
		>
			<Image
				src={photo && photo !== '' ? photo : defaultItemPhoto}
				width={photoSize}
				height={photoSize}
				objectFit='cover'
				objectPosition='center'
				alt='item-photo'
			/>
			<div className={styles['cart-item-info']}>
				<p className={styles['cart-item-info-name']}>{name}</p>
				<p className={styles['cart-item-info-description']}>{description}</p>
			</div>
			<ToggleQuantity
				compact={compact}
				quantity={quantity}
				className={styles['cart-item-toggle']}
				onToggle={(value: number) => handleToggleQuantity(value)}
			/>
			<p className={styles['cart-item-price']}>
				{price * quantity} {currency}
			</p>
		</div>
	);
};

export default CartItem;
