import React from 'react';

import Footer from '#components/Layout/Footer/Footer';
import Header from '#modules/Header/Header';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
