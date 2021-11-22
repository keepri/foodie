import type { GetStaticProps, NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';

import { ApiUrls, fetcher } from '#controllers/fetcher';

import { useCartActions } from '#redux/actions/cartActions';
import { ReduxState } from '#declarations/types/cart';

interface Props {
	name: string;
}

const Home: NextPage<Props> = ({ name }) => {
	const { loading } = useSelector(({ cart }: ReduxState) => cart);
	const { setCartLoading } = useCartActions(useDispatch());

	return (
		<div>
			<h1>Hello {name}!</h1>
			<p>Loading is: {String(loading)}</p>
			<button onClick={() => setCartLoading(!loading)}>click</button>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data } = await fetcher.get(ApiUrls.hello);

		return { props: { name: data?.name } };
	} catch (err) {
		console.warn('err:', err);

		return { props: { name: '' } };
	}
};

export default Home;
