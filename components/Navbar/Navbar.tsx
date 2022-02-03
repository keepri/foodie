import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Navbar.module.scss';

import { useAuthActions } from '#redux/actions';
import { URLS } from 'utils/misc';
import { ReduxState } from '#declarations/types/Redux';

import Button from '#components/Buttons/Button';
import Link from '#components/Buttons/Link';
import Logo from '#components/Logo/Logo';
import Icon from '#components/Icon/Icon';
import { getLang } from '#controllers/getLang';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Navbar: React.FC<Props> = ({ className, ...rest }) => {
	const lang = getLang();

	const {
		auth: { isLogged },
		cart: { items },
	} = useSelector(({ auth, cart }: ReduxState) => ({ auth, cart }));
	const { logoutUserAuth } = useAuthActions();

	return (
		<nav className={['container', styles['navbar'], className].join(' ')} {...rest}>
			<Logo />
			<ul className={styles['navbar-list']}>
				{/* ALWAYS */}
				<li>
					<Link href={URLS.CART} tooltip={lang.cartTooltip} badge={items.length ? items.length : undefined}>
						<Icon icon={'/images/icons/cloche.svg'} size='medium' />
					</Link>
				</li>

				{/* LOGGED */}
				{isLogged && (
					<li>
						<Link href={URLS.ORDERS} tooltip={lang.ordersTooltip}>
							<Icon icon={'/images/icons/orders.svg'} size='medium' />
						</Link>
					</li>
				)}
				{isLogged && (
					<li>
						{/* TODO - remove '#' */}
						<Link href={'#' ?? URLS.ACCOUNT} tooltip={lang.accountTooltip}>
							<Icon icon={'/images/icons/settings.svg'} size='medium' />
						</Link>
					</li>
				)}
				{isLogged && (
					<li>
						<Button simple onMouseUp={() => logoutUserAuth()} tooltip={lang.signOutTooltip}>
							<Icon icon={'/images/icons/sign-out.svg'} size='medium' />
						</Button>
					</li>
				)}

				{/* NOT LOGGED */}
				{!isLogged && (
					<>
						<li className={styles['navbar-sign-in']}>
							<Link href={URLS.LOGIN}>
								<Icon icon={'/images/icons/profile.svg'} size='medium' />
								{lang.signIn}
							</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
