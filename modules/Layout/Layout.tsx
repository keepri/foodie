import React from 'react';

import Footer from '#components/Layout/Footer/Footer';
import Header from '#modules/Header/Header';

import { authRef } from '#firebase/initClientApp';
import { useAuthActions } from '#redux/actions';
import axios from 'axios';
import { sendEmailVerification } from 'firebase/auth';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
	const { loginUserAuth } = useAuthActions();

	React.useEffect(() => {
		const unsubscribe = authRef.onAuthStateChanged(async user => {
			if (user) {
				const token = await user.getIdToken();
				!user.emailVerified && (await sendEmailVerification(user));

				axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

				loginUserAuth(token);
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
