import React from 'react';
import { RestaurantSchema } from '#firebase/declarations/schemas';
import RestaurantCard from '#components/Cards/RestaurantCard/RestaurantCard';

import styles from './Restaurants.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	restaurants: RestaurantSchema[];
}

const Restaurants: React.FC<Props> = ({ className, restaurants, ...rest }) => {
	return (
		<div className={[styles['restaurants'], className].join(' ')} {...rest}>
			<h2>Restaurants</h2>
			<div className={styles['restaurants-content']}>
				{restaurants.map((restaurant, index) => (
					<RestaurantCard key={restaurant.uid + index} restaurant={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Restaurants;
