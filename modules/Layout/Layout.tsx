import React from 'react';
import Footer from '#components/Layout/Footer/Footer';
import Head from '#components/Layout/Head';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Head />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
