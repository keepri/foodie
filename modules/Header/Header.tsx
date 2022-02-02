import React from 'react';

import styles from './Header.module.scss';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FC<Props> = ({ className, ...rest }) => {
	return <header className={[styles['header'], className].join(' ')} {...rest}></header>;
};

export default Header;
