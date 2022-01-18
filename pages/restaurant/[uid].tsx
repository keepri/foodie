import React from 'react';
import type {
	GetStaticPaths,
	GetStaticPathsContext,
	GetStaticPathsResult,
	GetStaticProps,
	GetStaticPropsContext,
	GetStaticPropsResult,
	NextPage,
} from 'next';
import axios, { AxiosResponse } from 'axios';
import { URLS } from 'utils/misc';
import { MenusSuccess, RestaurantsSuccess, RestaurantSuccess } from '#firebase/declarations/types';
import { MenuSchema, RestaurantSchema } from '#firebase/declarations/schemas';
import { useRouter } from 'next/router';
import { useCartActions } from '#redux/actions';
import { ParsedUrlQuery } from 'querystring';
import Menu from '#modules/Menu/Menu';
import RestaurantHeader from '#components/RestaurantHeader/RestaurantHeader';

interface Params extends ParsedUrlQuery {
	uid: string;
}

interface Props {
	menu: MenuSchema;
	restaurant: RestaurantSchema;
}

const RestaurantPage: NextPage<Props> = ({ restaurant, menu }) => {
	const { isFallback } = useRouter();
	const { setRestaurantCart } = useCartActions();

	React.useEffect(() => {
		return () => {
			restaurant && restaurant.uid && setRestaurantCart(restaurant.uid);
		};
	}, [restaurant]);

	if (isFallback)
		return (
			<main className='container'>
				<strong>
					<p>TEMP - Loading... - TEMP</p>
				</strong>
			</main>
		);

	return (
		<main className='container'>
			<RestaurantHeader restaurant={restaurant} />
			<Menu menu={menu} />
		</main>
	);
};

export const getStaticPaths: GetStaticPaths = async ({}: GetStaticPathsContext): Promise<
	GetStaticPathsResult<Params>
> => {
	const { restaurants }: RestaurantsSuccess = await axios.get(URLS.API_GET_RESTAURANTS);

	if (!restaurants)
		return {
			paths: [],
			fallback: true,
		};

	const paths = restaurants.map(restaurant => ({ params: { uid: restaurant.uid } }));

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async ({
	params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> => {
	const { uid } = params as Params;

	if (!uid)
		return {
			notFound: true,
		};

	try {
		const { status: statusRestaurant, data: dataRestaurant }: AxiosResponse<RestaurantSuccess> =
			await axios.get(`${URLS.API_GET_RESTAURANTS}/${uid}`);
		const { status: statusMenu, data: dataMenu }: AxiosResponse<MenusSuccess> = await axios.get(
			`${URLS.API_GET_MENU}/${uid}`,
		);

		if (statusRestaurant === 404 || statusMenu === 404)
			return {
				notFound: true,
			};

		const { restaurant } = dataRestaurant;
		let { menu } = dataMenu;
		menu = {
			...menu,
			categories: [
				{
					...menu.categories[0],
					items: [
						...menu.categories[0].items,
						...menu.categories[0].items,
						...menu.categories[0].items,
						...menu.categories[0].items,
						...menu.categories[0].items,
						...menu.categories[0].items,
						...menu.categories[0].items,
						...menu.categories[0].items,
					],
				},
			],
		};

		return {
			props: { restaurant, menu },
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default RestaurantPage;
