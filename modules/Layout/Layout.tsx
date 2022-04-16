import React from 'react';
import { useSelector } from 'react-redux';

import Footer from '#components/Layout/Footer/Footer';
// import Header from '#modules/Header/Header';

import NavbarMain from '#components/Navigation/NavbarMain/NavbarMain';
import { useAppActions, useAuthActions } from '#redux/actions';
import { ReduxState } from '#declarations/types/Redux';
import { subscribeOnAuthChange } from '#controllers/subscribeOnAuthChange';

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
			<NavbarMain />
			{/* <Header /> */}
			{children}
			<Footer />
		</>
	);
};

export default Layout;
