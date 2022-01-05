import Navbar from '#components/Navbar/Navbar';
import React from 'react';

import styles from './Header.module.scss';

interface Props {}

const Header: React.FC<Props> = ({}) => {
	return (
		<header>
			<Navbar />
		</header>
	);
};

export default Header;
