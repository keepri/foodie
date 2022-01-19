import React from 'react';
import type { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { useSelector } from 'react-redux';
import { ReduxState } from '#declarations/types/Redux';
import { RestaurantSchema } from '#firebase/declarations/schemas';
import { useAppActions } from '#redux/actions';
import axios from 'axios';
import { URLS } from 'utils/misc';
import Restaurants from '#modules/Restaurants/Restaurants';
import { RESTAURANT_STATUS } from '#firebase/declarations/enums';

interface Props {
	restaurants: RestaurantSchema[];
}

const Index: NextPage<Props> = ({ restaurants }) => {
	const {
		auth: { user },
	} = useSelector(({ auth }: ReduxState) => ({ auth }));
	const { setRestaurantsApp, loadRestaurants } = useAppActions();

	React.useEffect(() => {
		restaurants && restaurants.length === 0 ? loadRestaurants() : setRestaurantsApp(restaurants);
	}, []);

	return (
		<main className='container container-home'>
			<h1>Hello{`, ${user.name}`}</h1>
			<Restaurants restaurants={restaurants} />
		</main>
	);
};

export const getStaticProps: GetStaticProps = async ({}: GetStaticPropsContext) => {
	let restaurants: RestaurantSchema[] = [];

	try {
		const { status, data } = await axios.get(URLS.API_GET_RESTAURANTS, { withCredentials: true });

		status === 200 &&
			(restaurants = [
				{ ...data.restaurants[0], status: RESTAURANT_STATUS.OPEN },
				{ ...data.restaurants[0], status: RESTAURANT_STATUS.OPEN },
				{ ...data.restaurants[0], status: RESTAURANT_STATUS.OPEN },
				{ ...data.restaurants[0], status: RESTAURANT_STATUS.OPEN },
				{ ...data.restaurants[0], status: RESTAURANT_STATUS.OPEN },
				{ ...data.restaurants[0], status: RESTAURANT_STATUS.OPEN },
				{ ...data.restaurants[0], status: RESTAURANT_STATUS.OPEN },
				{ ...data.restaurants[0], status: RESTAURANT_STATUS.OPEN },
				{ ...data.restaurants[0], status: RESTAURANT_STATUS.OPEN },
				{ ...data.restaurants[0], status: RESTAURANT_STATUS.OPEN },
				{ ...data.restaurants[0], status: RESTAURANT_STATUS.OPEN },
				{ ...data.restaurants[0], status: RESTAURANT_STATUS.OPEN },
				{ ...data.restaurants[0], status: RESTAURANT_STATUS.OPEN },
				...data.restaurants,
				...data.restaurants,
				...data.restaurants,
				...data.restaurants,
				...data.restaurants,
				...data.restaurants,
			]);
	} catch (error) {
		console.log('Get static props failed with:', error);
	}

	return {
		props: { restaurants },
		revalidate: 1440, // 24 hours
	};
};

export default Index;
