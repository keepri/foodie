import React from 'react';
import type { NextPage } from 'next';
import { privateRoute } from '#controllers/validation/privateRoute';
import RegisterForm from '#modules/Forms/RegisterForm/RegisterForm';
import Modal from '#modules/Modal/Modal';
import { getLang } from '#controllers/getLang';

interface Props {}

const RegisterPage: NextPage<Props> = ({}) => {
	privateRoute({ whenIsLoggedIs: true });
	const { accountCreateSuccessTitle, accountCreateSuccessBody } = getLang();

	const [modal, setModal] = React.useState(false);

	return (
		<main>
			<RegisterForm modal={modal} setModal={setModal} />
			{modal && <Modal title={accountCreateSuccessTitle} body={accountCreateSuccessBody} setModal={setModal} />}
		</main>
	);
};

export default RegisterPage;
