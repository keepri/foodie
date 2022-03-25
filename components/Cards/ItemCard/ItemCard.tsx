import React from 'react';
import Image from 'next/image';

import styles from './ItemCard.module.scss';
import { MenuItem } from '#firebase/declarations/interfaces';

import { defaultItemPhoto } from '#utils/misc';
import { useSelector } from 'react-redux';
import { ReduxState } from '#declarations/types/Redux';
import { MENU_ITEM_STATUS, RESTAURANT_STATUS } from '#firebase/declarations/enums';
import { useCartActions } from '#redux/actions';
import { getMenuItemStatus } from '#firebase/client-functions/get';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	item: MenuItem;
	index: number;
	onItemNotAv?: () => void;
}

const ItemCard: React.FC<Props> = ({ className, item, index, onItemNotAv, ...rest }) => {
	const {
		app: { currency, selectedRestaurant },
		cart: { items, restaurant: restaurantUid },
	} = useSelector(({ app, cart }: ReduxState) => ({ app, cart }));

	const { addItemCart, resetCart, setRestaurantUidCart } = useCartActions();

	const { uid, status, photo, name, description, price } = React.useMemo(
		() => ({
			uid: item.uid,
			status: item.status,
			photo: item.photo,
			name: item.name,
			description: item.description,
			price: item.price,
		}),
		[item.uid, item.status, item.photo, item.name, item.description, item.price],
	);

	const restaurantIsOpen = selectedRestaurant?.status === RESTAURANT_STATUS.OPEN;
	const itemIsUnavailable = status === MENU_ITEM_STATUS.UNAVAILABLE;

	const itemIsInCart = React.useMemo(() => items.some(item => item.uid === uid), [items, uid]);

	const handleAddToCart = React.useCallback(
		async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			e.stopPropagation();

			if (itemIsInCart || !restaurantIsOpen || itemIsUnavailable) {
				return;
			}

			const itemStatusDb = await getMenuItemStatus(selectedRestaurant?.uid ?? '', item.uid);

			if (!itemStatusDb) {
				item.status = MENU_ITEM_STATUS.UNAVAILABLE;
				onItemNotAv && onItemNotAv();
				return;
			}

			if (selectedRestaurant?.uid !== restaurantUid) {
				console.log('Tried adding item from another restaurant');

				// TODO - handle adding item from another restaurant warning modal (clear);
				confirm(
					'You have items inside your cart that are from another restaurant. Do you wish to reset the cart and add the new item?',
				) && (resetCart(), setRestaurantUidCart(selectedRestaurant?.uid ?? ''), addItemCart(item, 1));
				return;
			}

			addItemCart(item, 1);
		},
		[
			item,
			itemIsInCart,
			itemIsUnavailable,
			restaurantIsOpen,
			restaurantUid,
			selectedRestaurant?.uid,
			onItemNotAv,
		],
	);

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
					{!itemIsInCart && restaurantIsOpen && !itemIsUnavailable && (
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
