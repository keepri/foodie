import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Navbar.module.scss';

import { useAuthActions } from '#redux/actions';
import { URLS } from 'utils/misc';
import { ReduxState } from '#declarations/types/Redux';

import Button from '#components/Buttons/Button';
import Link from '#components/Buttons/Link';
import Logo from '#components/Logo/Logo';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Navbar: React.FC<Props> = ({ className, ...rest }) => {
	const {
		auth: { isLogged },
	} = useSelector(({ auth }: ReduxState) => ({ auth }));
	const { logoutUserAuth } = useAuthActions();

	return (
		<nav className={['container', styles['navbar'], className].join(' ')} {...rest}>
			<Logo />
			<ul>
				<Link button secondary href={URLS.CART}>
					CART
				</Link>
				{isLogged && (
					<Button secondary onMouseUp={() => logoutUserAuth()}>
						LOGOUT
					</Button>
				)}
				{!isLogged && (
					<>
						<Link button secondary href={URLS.LOGIN}>
							LOGIN
						</Link>
						<Link button secondary href={URLS.REGISTER}>
							REGISTER
						</Link>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
