import React from 'react';
import type { NextPage } from 'next';
import LoginForm from '#modules/Forms/LoginForm/LoginForm';
import { privateRoute } from '#controllers/privateRoute';
import Link from '#components/Buttons/Link';

interface Props {}

const LoginPage: NextPage<Props> = ({}) => {
	privateRoute({ whenIsLoggedIs: true });

	return (
		<main>
			<Link button primary href={'/'}>
				back
			</Link>
			<LoginForm />
		</main>
	);
};

export default LoginPage;
