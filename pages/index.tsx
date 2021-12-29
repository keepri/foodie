import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApiUrls, fetcher } from '#controllers/fetcher';
import { useCartActions } from '#redux/actions/cartActions';
import { ReduxState } from '#declarations/types/cart';
import { FormEvent } from 'react';
import axios from 'axios';
import { RegisterReturnType } from '#firebase/declarations/types';
import type { GetStaticProps, NextPage } from 'next';

interface Props {
	name: string;
}

const Home: NextPage<Props> = ({ name }) => {
	const { loading } = useSelector(({ cart }: ReduxState) => cart);
	const { setCartLoading } = useCartActions(useDispatch());
	const [fields, setFields] = React.useState({
		email: '',
		password: '',
	});

	const { email, password } = fields;

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const { status, data } = await axios.post<RegisterReturnType>('/api/auth/register', {
				...fields,
				phone: '123456',
				name: 'John Doe',
			});

			if (status === 200) {
				console.log('User successfully created. Verification email sent!');
			}
		} catch ({ response }) {
			console.error('Create account failed with:', response);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setFields({ ...fields, [e.target.name]: e.target.value });

	return (
		<div>
			<h1>Hello {name}!</h1>
			<p>Loading is: {String(loading)}</p>
			<button onClick={() => setCartLoading(!loading)}>click</button>
			<form onSubmit={e => handleSubmit(e)}>
				<input value={email} onChange={e => handleChange(e)} type='text' name='email' />
				<input value={password} onChange={e => handleChange(e)} type='text' name='password' />
				<input type='submit' value='Register' />
			</form>
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
