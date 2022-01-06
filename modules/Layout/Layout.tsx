import React from 'react';
import axios, { AxiosResponse } from 'axios';

import Footer from '#components/Layout/Footer/Footer';
import Header from '#modules/Header/Header';

import { authRef } from '#firebase/initClientApp';
import { useAuthActions } from '#redux/actions';
import { sendEmailVerification } from 'firebase/auth';
import { isProduction, URLS } from 'utils/misc';
import { LoginSuccess } from '#firebase/declarations/types';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
	const { loginUserAuth, updateUserAuth } = useAuthActions();

	React.useEffect(() => {
		const unsubscribe = authRef.onAuthStateChanged(async user => {
			if (user) {
				try {
					const token = await user.getIdToken();

					!user.emailVerified && isProduction && (await sendEmailVerification(user));

					const {
						data: { user: userInfo },
					}: AxiosResponse<LoginSuccess> = await axios.post(URLS.API_LOGIN, { token });

					loginUserAuth(token);
					updateUserAuth(userInfo);
				} catch ({ code, message }) {
					// TODO handle errors
					console.log('On auth state change error:', code, message);
				}
			}
		});

		return () => unsubscribe();
	}, []);

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
