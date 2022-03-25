import React from 'react';
import type { NextPage } from 'next';
import LoginForm from '#modules/Forms/LoginForm/LoginForm';
import { privateRoute } from '#controllers/validation/privateRoute';
import styles from '#styles/pages/LoginPage.module.scss';
import { getLang } from '#controllers/getLang';
import { URLS } from '#utils/misc';
import Link from '#components/Buttons/Link';

interface Props {}

const LoginPage: NextPage<Props> = ({}) => {
	privateRoute({ whenIsLoggedIs: true });

	const lang = getLang();

	return (
		<main className={['container', styles['login-page']].join(' ')}>
			<div className={styles['login-page-welcome']}>
				<h1>{lang.welcomeBack}</h1>
				<p>{lang.welcomeBackAdditional}</p>
				<LoginForm />
			</div>
			<p className={styles['login-page-no-account']}>
				{lang.dontHaveAccount}{' '}
				<Link underline href={URLS.REGISTER}>
					{lang.signUpNow}
				</Link>
			</p>
		</main>
	);
};

export default LoginPage;
