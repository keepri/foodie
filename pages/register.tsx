import React from 'react';
import type { NextPage } from 'next';
import RegisterForm from '#components/Forms/RegisterForm/Registerform';
import { privateRoute } from '#controllers/privateRoute';

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
