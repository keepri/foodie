import React from 'react';
import { useAppActions, useAuthActions } from '#redux/actions';
import { useSelector } from 'react-redux';

import Footer from '#components/Layout/Footer/Footer';
// import Header from '#modules/Header/Header';

import { subscribeOnAuthChange } from '#controllers/subscribeOnAuthChange';

import { ReduxState } from '#declarations/types/Redux';
import Navbar from '#components/Navbar/Navbar';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
	const { loginUserAuth } = useAuthActions();
	const { setOnAuthChangeSubApp } = useAppActions();
	const unsubscribeOnAuthChange = useSelector(({ app }: ReduxState) => app.unsubscribeOnAuthChange);

	React.useEffect(() => {
		subscribeOnAuthChange({ loginUserAuth, setOnAuthChangeSubApp });

		return unsubscribeOnAuthChange && unsubscribeOnAuthChange();
	}, []);

	return (
		<>
			<Navbar />
			{/* <Header /> */}
			{children}
			<Footer />
		</>
	);
};

export default Layout;
