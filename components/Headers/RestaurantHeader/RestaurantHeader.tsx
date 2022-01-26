import { getLang } from '#controllers/getLang';
import { RESTAURANT_STATUS } from '#firebase/declarations/enums';
import { RestaurantSchema } from '#firebase/declarations/schemas';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

import styles from './RestaurantHeader.module.scss';
import { ReduxState } from '#declarations/types/Redux';
import Pill from '#components/Pill/Pill';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	restaurant: RestaurantSchema;
}

const RestaurantHeader: React.FC<Props> = ({ className, restaurant, ...rest }) => {
	const lang = getLang();

	const {
		app: { currency },
	} = useSelector(({ app }: ReduxState) => ({ app }));

	const { status, name, addresses, costs, hours, photo, logo, description } = restaurant;
	const { county, city, street, number } = addresses[0];
	const { packaging, delivery, minOrder } = costs;

	const deliveryFee = delivery === 0 ? lang.free : delivery + ` ${currency}`;
	const restaurantIsOpen = status === RESTAURANT_STATUS.OPEN;
	const restaurantIsClosed = status === RESTAURANT_STATUS.CLOSED;

	return (
		<div
			className={[
				styles['restaurant-header'],
				!restaurantIsOpen && styles['restaurant-header-closed'],
				className,
			].join(' ')}
			{...rest}
		>
			{!restaurantIsOpen && (
				<p className={styles['restaurant-header-closed-text']}>
					{restaurantIsClosed ? lang.closed : lang.unavailable}
				</p>
			)}

			<Image
				objectFit='cover'
				objectPosition='center'
				width={1440}
				height={400}
				src={photo}
				alt='restaurant photo'
			/>
			<div className={styles['restaurant-header-content']}>
				<Image
					width={60}
					height={60}
					src={logo}
					objectFit='contain'
					objectPosition='center'
					alt='restaurant photo'
				/>
				<h1>{name}</h1>
				{description && <p className={styles['restaurant-header-description']}>{description}</p>}
				<p className={styles['restaurant-header-address']}>
					{county}, {city},{' '}
					<strong>
						{street} {number}
					</strong>
				</p>
				{/* <p className={styles['restaurant-header-phone']}>
					<strong>
						<small>{lang.callUs}</small>
					</strong>
					: <a href={`tel:${phone}`}>{phone}</a>
				</p> */}

				<div className={styles['restaurant-header-info']}>
					<Pill boldInfo type='horizontal' label={lang.minOrder} info={`${minOrder} ${currency}`} />
					<Pill boldInfo type='horizontal' label={lang.delivery} info={deliveryFee} />
					{packaging && packaging !== 0 && (
						<Pill boldInfo type='horizontal' label={lang.packaging} info={`${packaging} ${currency}`} />
					)}
				</div>
			</div>
		</div>
	);
};

export default RestaurantHeader;
