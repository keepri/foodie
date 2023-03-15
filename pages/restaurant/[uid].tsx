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
import { MenuSchema, RestaurantSchema } from '#firebase/declarations/schemas';
import { useRouter } from 'next/router';
import { useAppActions, useCartActions } from '#redux/actions';
import { ParsedUrlQuery } from 'querystring';
import Menu from '#modules/Menu/Menu';
import RestaurantHeader from '#components/Headers/RestaurantHeader/RestaurantHeader';
import { shallowEqual, useSelector } from 'react-redux';
import { ReduxState } from '#declarations/types/Redux';
import { getRestaurantByUidServerSide } from '#controllers/api/get/getRestaurantByUidServerSide';
import { getMenuByUidServerSide } from '#controllers/api/get/getMenuByUidServerSide';
import { getRestaurantsServerSide } from '#controllers/api/get/getRestaurantsServerSide';

interface Params extends ParsedUrlQuery {
    uid: string;
}

interface Props {
    menu: MenuSchema;
    restaurant: RestaurantSchema;
}

const RestaurantPage: NextPage<Props> = ({ restaurant, menu }) => {
    const { isFallback } = useRouter();

    const { items, cartRestaurantUid } = useSelector(
        ({ cart: { items, restaurant: cartRestaurantUid } }: ReduxState) => ({
            items,
            cartRestaurantUid,
        }),
        shallowEqual,
    );

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

export const getStaticPaths: GetStaticPaths = async ({ }: GetStaticPathsContext): Promise<
    GetStaticPathsResult<Params>
> => {
    try {
        const { restaurants } = await getRestaurantsServerSide();
        const paths = restaurants.map(restaurant => ({ params: { uid: restaurant.uid } }));

        return {
            paths,
            fallback: true,
        };
    } catch ({ message }) {
        console.error('getStaticPaths in restaurant page:', message);
        return {
            paths: [],
            fallback: true,
        };
    }
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
        const { restaurant } = await getRestaurantByUidServerSide(uid);
        let { menu } = await getMenuByUidServerSide('EJQpn8wM19qiqNoqaQhM'); // was uid - TODO

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
    } catch ({ message }) {
        console.error('getStaticProps in restaurant page:', message);
        return {
            notFound: true,
        };
    }
};

export default RestaurantPage;
