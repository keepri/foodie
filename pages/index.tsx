import React from 'react';
import type { NextPage } from 'next';

import Button from '#components/Buttons/Button';
import { useAuthActions } from '#redux/actions';
import { useSelector } from 'react-redux';
import { ReduxState } from '#declarations/types/Redux';
import Link from '#components/Buttons/Link';
import { URLS } from 'utils/misc';

interface Props {}

const Index: NextPage<Props> = ({}) => {
	const {
		auth: { isLogged, user },
	} = useSelector(({ auth }: ReduxState) => ({ auth }));
	const { logoutUserAuth } = useAuthActions();

	return (
		<main>
			<h1>Hello{`, ${user.name}`}</h1>

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
				<Button primary onMouseUp={logoutUserAuth}>
					Logout
				</Button>
			)}
		</main>
	);
};

export default Index;
