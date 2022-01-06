import React from 'react';
import type { NextPage } from 'next';

import Button from '#components/Buttons/Button';
import { useAuthActions } from '#redux/actions';
import { useSelector } from 'react-redux';
import { ReduxState } from '#declarations/types/Redux';
import Link from '#components/Buttons/Link';
import { URLS } from 'utils/misc';
import { OrderItem } from '#firebase/declarations/interfaces';
import CartItem from '#components/Cart/CartItem/CartItem';

interface Props {}

const Index: NextPage<Props> = ({}) => {
	const {
		auth: { isLogged },
		cart: { items },
	} = useSelector(({ auth, cart }: ReduxState) => ({ auth, cart }));
	const { logoutUserAuth } = useAuthActions();

	return (
		<main>
			<h1>Hello</h1>

			{items.map((item, index) => (
				<CartItem key={index} index={index} item={item} />
			))}

			{!isLogged && (
				<Link button secondary href={URLS.LOGIN}>
					Login
				</Link>
			)}
			{!isLogged && (
				<Link button secondary href={URLS.REGISTER}>
					Register
				</Link>
			)}
			{isLogged && (
				<Button primary onClick={logoutUserAuth}>
					Logout
				</Button>
			)}
		</main>
	);
};

export default Index;
