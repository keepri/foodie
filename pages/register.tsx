import React from 'react';
import type { NextPage } from 'next';

import RegisterForm from '#modules/Forms/RegisterForm/RegisterForm';
import { getLang } from '#controllers/getLang';
import SignInGoogle from '#components/SignInGoogle/SignInGoogle';
import Link from '#components/Buttons/Link';
import AccountCreateSuccess from '#modules/Modals/AccountCreateSuccess';

import { privateRoute } from '#controllers/validation/privateRoute';
import styles from '#styles/pages/RegisterPage.module.scss';
import { URLS } from 'utils/misc';

interface Props {}

const RegisterPage: NextPage<Props> = ({}) => {
	privateRoute({ whenIsLoggedIs: true });

	const lang = getLang();

	const [modalSuccess, setModalSuccess] = React.useState<boolean>(false);

	return (
		<main className={['container', styles['register-page']].join(' ')}>
			<div className={styles['register-page-welcome']}>
				<h1>{lang.createAnAccount}</h1>
				<p>{lang.createAnAccountAdditional}</p>
				<SignInGoogle fullWidth text={lang.signUpWithGoogle} />
				<p className={styles['register-page-or']}>{lang.or.toUpperCase()}</p>
				<RegisterForm modal={modalSuccess} setModal={setModalSuccess} />
			</div>
			<p className={styles['register-page-already-account']}>
				{lang.alreadyHaveAccount}{' '}
				<Link underline href={URLS.LOGIN}>
					{lang.signIn}
				</Link>
			</p>
			{modalSuccess && <AccountCreateSuccess setModal={setModalSuccess} />}
		</main>
	);
};

export default RegisterPage;
