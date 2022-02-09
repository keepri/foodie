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
import { useAppActions, useCartActions } from '#redux/actions';
import { ParsedUrlQuery } from 'querystring';
import Menu from '#modules/Menu/Menu';
import RestaurantHeader from '#components/Headers/RestaurantHeader/RestaurantHeader';
import { useSelector } from 'react-redux';
import { ReduxState } from '#declarations/types/Redux';

interface Params extends ParsedUrlQuery {
	uid: string;
}

interface Props {
	menu: MenuSchema;
	restaurant: RestaurantSchema;
}

const RestaurantPage: NextPage<Props> = ({ restaurant, menu }) => {
	const { isFallback } = useRouter();

	const {
		cart: { items, restaurant: cartRestaurantUid },
	} = useSelector(({ cart }: ReduxState) => ({ cart }));

	const { setRestaurantUidCart } = useCartActions();
	const { setSelectedRestaurantApp } = useAppActions();

	React.useEffect(() => {
		if (!isFallback) {
			items.length === 0 && cartRestaurantUid !== restaurant.uid && setRestaurantUidCart(restaurant.uid);
			setSelectedRestaurantApp(restaurant);
		}

		return () => {
			setSelectedRestaurantApp(null);
		};
	}, [restaurant]);

	if (isFallback)
		return (
			<main className='container'>
				{/* TODO - make placeholder page */}
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
	const { status, data }: AxiosResponse<RestaurantsSuccess> = await axios.get(URLS.API_GET_RESTAURANTS);

	if (status !== 200 || !data?.restaurants)
		return {
			paths: [],
			fallback: true,
		};

	const { restaurants } = data;

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
			`${URLS.API_GET_MENU}/${'EJQpn8wM19qiqNoqaQhM'}`, // TODO - was uid
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
						{ ...menu.categories[0].items[0], uid: 'kaljsdhfadklsjfhdsa' },
						{ ...menu.categories[0].items[0], uid: 'jksdalfhkjldshfdas' },
						{ ...menu.categories[0].items[0], uid: 'kjlasdhfakjldsh' },
						{ ...menu.categories[0].items[0], uid: 'lksdajfaldskfhjdsklafds' },
					],
				},
				{
					...menu.categories[0],
					items: [
						{ ...menu.categories[0].items[0], uid: 'jkalsdhfkaljsdhfkjsda' },
						{ ...menu.categories[0].items[0], uid: 'jkalhfdkldshfdsalkjfds' },
						{ ...menu.categories[0].items[0], uid: 'sdkjlfhdskjlfadsklj' },
						{ ...menu.categories[0].items[0], uid: 'kaljsdhgfkjlasd' },
					],
				},
			],
		};

		return {
			props: { restaurant, menu },
			revalidate: 60 * 5, // 5 minutes
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default RestaurantPage;
