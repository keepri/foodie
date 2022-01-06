import React from 'react';
import type { NextPage } from 'next';
import { privateRoute } from '#controllers/privateRoute';
import RegisterForm from '#components/Forms/RegisterForm/RegisterForm';

interface Props {}

const RegisterPage: NextPage<Props> = ({}) => {
	privateRoute({ whenIsLoggedIs: true });

	return (
		<main>
			<RegisterForm />
		</main>
	);
};

export default RegisterPage;
