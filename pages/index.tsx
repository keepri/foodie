import React from 'react';
import type { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { RestaurantSchema } from '#firebase/declarations/schemas';
import { useAppActions } from '#redux/actions';
import axios, { AxiosResponse } from 'axios';
import { URLS } from '#utils/misc';
import Restaurants from '#modules/Restaurants/Restaurants';
import { RestaurantsSuccess } from '#firebase/declarations/types';

interface Props {
	restaurants: RestaurantSchema[];
}

const Index: NextPage<Props> = ({ restaurants }) => {
	const { setRestaurantsApp, loadRestaurants } = useAppActions();

	React.useEffect(() => {
		restaurants && restaurants.length === 0 ? loadRestaurants() : setRestaurantsApp(restaurants);
	}, []);

	return (
		<main className='container'>
			<Restaurants restaurants={restaurants} />
		</main>
	);
};

export const getStaticProps: GetStaticProps = async ({}: GetStaticPropsContext) => {
	let restaurants: RestaurantSchema[] = [];

	try {
		const { status, data }: AxiosResponse<RestaurantsSuccess> = await axios.get(URLS.API_GET_RESTAURANTS, {
			withCredentials: true,
		});

		if (status !== 200 || !data?.restaurants) {
			return {
				notFound: true,
			};
		}

		restaurants = data.restaurants;
	} catch (error) {
		console.log('Get static props failed with:', error);
	}

	return {
		props: { restaurants },
		revalidate: 1440, // 24 hours
	};
};

export default Index;
