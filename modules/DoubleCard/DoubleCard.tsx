import RatingIndicator from '#components/RatingIndicator/RatingIndicator';
import { RESTAURANT_STATUS } from '#firebase/declarations/enums';
import { RestaurantSchema } from '#firebase/declarations/schemas';
import Image from 'next/image';
import React from 'react';
import { defaultRestaurantLogo, defaultRestaurantPhoto } from 'utils/misc';

import styles from './DoubleCard.module.scss';
import { getLang } from '#controllers/getLang';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	restaurant: RestaurantSchema;
}

const DoubleCard: React.FC<Props> = ({ className, restaurant, ...rest }) => {
	const lang = getLang();

	const { minOrder: MIN_ORDER, delivery: DELIVERY } = getLang();
	const { status, name, costs, rating, photo, logo } = restaurant;
	const unavailable = status === RESTAURANT_STATUS.CLOSED || status === RESTAURANT_STATUS.UNAVAILABLE;
	const { minOrder, delivery } = costs;
	// const photoWidth = 310;
	const logoSize = 60;

	return (
		<div
			className={[styles['double-card'], unavailable && styles['double-card-disabled'], className].join(' ')}
			{...rest}
		>
			<div className={styles['double-card-photo']}>
				{status === RESTAURANT_STATUS.CLOSED && (
					<p className={styles['double-card-disabled-text']}>{lang.closed}</p>
				)}
				{status === RESTAURANT_STATUS.UNAVAILABLE && (
					<p className={styles['double-card-disabled-text']}>{lang.unavailable}</p>
				)}
				<Image
					layout='fill'
					// width={photoWidth}
					// height={180}
					src={photo && photo !== '' ? photo : defaultRestaurantPhoto}
					alt='restaurant-photo'
				/>
			</div>
			<div
				style={{ borderColor: unavailable ? 'rgba(255, 0, 0, .2)' : 'rgba(0, 0, 0, .05)' }}
				className={styles['double-card-content']}
			>
				<div
					style={{
						width: logoSize,
						height: logoSize,
					}}
					className={styles['double-card-content-logo']}
				>
					<Image
						src={logo && logo !== '' ? logo : defaultRestaurantLogo}
						alt='restaurant logo'
						width={logoSize}
						height={logoSize}
						objectFit='contain'
					/>
				</div>

				<div className={styles['double-card-content-info']}>
					<h2>
						{name} <RatingIndicator compact type='small' rating={rating} />
					</h2>

					{minOrder !== undefined && minOrder !== 0 && (
						<p className={styles['restaurant-info']}>
							{MIN_ORDER}: {minOrder} RON
						</p>
					)}

					{delivery !== undefined && (
						<p className={styles['restaurant-info']}>
							{DELIVERY}: {delivery === 0 ? lang.free : `${delivery} RON`}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default DoubleCard;
