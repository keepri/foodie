import type { GetStaticProps, NextPage } from 'next';
import { fetcher } from '#controllers/fetcher';

interface Props {
	name: string;
}

const Home: NextPage<Props> = ({ name }) => {
	return (
		<div>
			<h1>Hello {name}!</h1>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { name } = await fetcher('/api/hello');

		return { props: { name } };
	} catch (err) {
		console.warn('err:', err);
		return { props: {} };
	}
};

export default Home;
