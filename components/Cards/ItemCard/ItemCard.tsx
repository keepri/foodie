import React from 'react';
import Image from 'next/image';

import styles from './ItemCard.module.scss';
import { MenuItem } from '#firebase/declarations/interfaces';

import { defaultItemPhoto } from 'utils/misc';
import { useSelector } from 'react-redux';
import { ReduxState } from '#declarations/types/Redux';
import { MENU_ITEM_STATUS, RESTAURANT_STATUS } from '#firebase/declarations/enums';
import { useCartActions } from '#redux/actions';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	item: MenuItem;
}

const ItemCard: React.FC<Props> = ({ className, item, ...rest }) => {
	const {
		app: { currency, restaurants },
		cart: { items, restaurant: restaurantUid },
	} = useSelector(({ app, cart }: ReduxState) => ({ app, cart }));
	const [itemIsInCart, setItemIsInCart] = React.useState(false);

	const { addItemCart } = useCartActions();

	const selectedRestaurant = restaurants?.filter(restaurant => restaurant.uid === restaurantUid)[0];
	const restaurantIsOpen = selectedRestaurant && selectedRestaurant.status === RESTAURANT_STATUS.OPEN;

	const { status, photo, name, description, price } = item;
	const itemIsUnavailable = status === MENU_ITEM_STATUS.UNAVAILABLE;

	const handleAddToCart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();

		!itemIsInCart && !itemIsUnavailable && restaurantIsOpen && addItemCart({ ...item, quantity: 1 });
	};

	React.useEffect(() => {
		const exists = items.some(item => item.name === name);

		setItemIsInCart(exists);
	}, [items]);

	return (
		<div
			className={[styles['item-card'], itemIsInCart && styles['item-card-in-cart'], className].join(' ')}
			onMouseUp={e => handleAddToCart(e)}
			{...rest}
		>
			<div className={styles['item-card-photo']}>
				<Image
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					src={photo && photo !== '' ? photo : defaultItemPhoto}
					alt='menu-item-photo'
				/>
			</div>
			<div
				style={{ borderColor: itemIsUnavailable ? 'rgba(255, 0, 0, .2)' : 'rgb(219, 219, 219)' }}
				className={styles['item-card-body']}
			>
				<h3 className={styles['item-card-body-name']}>
					{name}
					{itemIsInCart && (
						<>
							{' '}
							<Image src={'/images/icons/checked.svg'} alt='added' width={15} height={15} />
						</>
					)}
				</h3>
				<p style={{ maxWidth: '18rem' }} className={styles['item-card-body-description']}>
					{description}
				</p>
				<div
					style={{ display: 'flex', marginTop: 'auto', gap: '1rem', justifyContent: 'space-between' }}
					className={styles['item-card-body-bottom-container']}
				>
					<p className={styles['item-card-body-price']} style={{ fontWeight: 'bold' }}>
						{price} {currency}
					</p>
					{!itemIsInCart && restaurantIsOpen && (
						<Image
							width={15}
							height={15}
							src={'/images/icons/plus.svg'}
							alt='add'
							onMouseUp={e => handleAddToCart(e)}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
