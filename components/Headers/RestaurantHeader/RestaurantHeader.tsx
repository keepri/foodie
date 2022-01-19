import { RestaurantSchema } from '#firebase/declarations/schemas';
import React from 'react';

import styles from './RestaurantHeader.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	restaurant: RestaurantSchema;
}

const RestaurantHeader: React.FC<Props> = ({ className, restaurant, ...rest }) => {
	const { name, description } = restaurant;

	return (
		<div className={[styles['restaurant-header'], className].join(' ')} {...rest}>
			<h1>Welcome to {name}</h1>
			<p>{description}</p>
		</div>
	);
};

export default RestaurantHeader;
