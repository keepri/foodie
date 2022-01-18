import React from 'react';
import Image from 'next/image';

import styles from './ItemCard.module.scss';
import { MenuItem } from '#firebase/declarations/interfaces';

import { defaultItemPhoto } from 'utils/misc';
import { useSelector } from 'react-redux';
import { ReduxState } from '#declarations/types/Redux';
import { MENU_ITEM_STATUS } from '#firebase/declarations/enums';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	item: MenuItem;
}

const ItemCard: React.FC<Props> = ({ className, item, ...rest }) => {
	const {
		app: { currency },
	} = useSelector(({ app }: ReduxState) => ({ app }));

	const { status, photo, name, description, price } = item;
	const unavailable = status === MENU_ITEM_STATUS.UNAVAILABLE;

	return (
		<div className={[styles['item-card'], className].join(' ')} {...rest}>
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
				style={{ borderColor: unavailable ? 'rgba(255, 0, 0, .2)' : 'rgb(219, 219, 219)' }}
				className={styles['item-card-body']}
			>
				<h3 className={styles['item-card-body-name']}>{name}</h3>
				<p style={{ maxWidth: '18rem' }} className={styles['item-card-body-description']}>
					{description}
				</p>
				<p className={styles['item-card-body-price']} style={{ fontWeight: 'bold' }}>
					{price} {currency}
				</p>
			</div>
		</div>
	);
};

export default ItemCard;
