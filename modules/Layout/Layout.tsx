import React from 'react';

import Footer from '#components/Layout/Footer/Footer';
// import Header from '#modules/Header/Header';

import NavbarMain from '#components/Navigation/NavbarMain/NavbarMain';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
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
