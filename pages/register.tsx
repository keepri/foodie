import React from 'react';
import type { NextPage } from 'next';
import { privateRoute } from '#controllers/validation/privateRoute';
import RegisterForm from '#modules/Forms/RegisterForm/RegisterForm';
import Modal from '#modules/Modal/Modal';
import { getLang } from '#controllers/getLang';

import styles from '#styles/pages/RegisterPage.module.scss';
import SignInGoogle from '#components/SignInGoogle/SignInGoogle';
import Link from '#components/Buttons/Link';
import { URLS } from 'utils/misc';

interface Props {}

const RegisterPage: NextPage<Props> = ({}) => {
	privateRoute({ whenIsLoggedIs: true });

	const lang = getLang();

	const [modal, setModal] = React.useState(false);

	return (
		<main className={['container', styles['register-page']].join(' ')}>
			<div className={styles['register-page-welcome']}>
				<h1>{lang.createAnAccount}</h1>
				<p>{lang.createAnAccountAdditional}</p>
				<SignInGoogle fullWidth text={lang.signUpWithGoogle} />
				<p className={styles['register-page-or']}>{lang.or.toUpperCase()}</p>
				<RegisterForm modal={modal} setModal={setModal} />
			</div>
			<p className={styles['register-page-already-account']}>
				{lang.alreadyHaveAccount}{' '}
				<Link underline href={URLS.LOGIN}>
					{lang.signIn}
				</Link>
			</p>
			{modal && (
				<Modal title={lang.accountCreateSuccessTitle} body={lang.accountCreateSuccessBody} setModal={setModal} />
			)}
		</main>
	);
};

export default RegisterPage;
