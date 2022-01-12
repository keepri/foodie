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
import { RestaurantsSuccess, RestaurantSuccess } from '#firebase/declarations/types';
import { RestaurantSchema } from '#firebase/declarations/schemas';
import { useRouter } from 'next/router';
import { useCartActions } from '#redux/actions';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
	uid: string;
}

interface Props {
	restaurant: RestaurantSchema;
}

const RestaurantPage: NextPage<Props> = ({ restaurant }) => {
	const { isFallback } = useRouter();
	const { setRestaurantCart } = useCartActions();

	React.useEffect(() => {
		return () => {
			setRestaurantCart('');
		};
	}, []);

	if (isFallback)
		return (
			<strong>
				<p>TEMP - Loading... - TEMP</p>
			</strong>
		);

	const { name, description } = restaurant;

	return (
		<main className='container'>
			<h1>Welcome to {name}</h1>
			<p>{description}</p>
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
		const { status, data }: AxiosResponse<RestaurantSuccess> = await axios.get(
			`${URLS.API_GET_RESTAURANTS}/${uid}`,
		);

		if (status === 404)
			return {
				notFound: true,
			};

		const { restaurant } = data;

		return {
			props: { restaurant },
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default RestaurantPage;
