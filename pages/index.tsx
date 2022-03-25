import React from 'react';
import type { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { RestaurantSchema } from '#firebase/declarations/schemas';
import { useAppActions } from '#redux/actions';
import Restaurants from '#modules/Restaurants/Restaurants';
import { getRestaurantsServerSide } from '#controllers/api/get/getRestaurantsServerSide';

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
	try {
		const { restaurants } = await getRestaurantsServerSide();

		return {
			props: { restaurants },
			revalidate: 1440, // 24 hours
		};
	} catch (error) {
		console.log('Get static props failed with:', error);
		return {
			notFound: true,
		};
	}
};

export default Index;
