import React from 'react';
import type { NextPage } from 'next';
import LoginForm from '#modules/Forms/LoginForm/LoginForm';
import { privateRoute } from '#controllers/privateRoute';

interface Props {}

const LoginPage: NextPage<Props> = ({}) => {
	privateRoute({ whenIsLoggedIs: true });

	return (
		<main>
			<LoginForm />
		</main>
	);
};

export default LoginPage;
