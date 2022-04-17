import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './NavbarMain.module.scss';

import {
	// useAppActions,
	useAuthActions,
} from '#redux/actions';
import { URLS } from '#utils/misc';
import { ReduxState } from '#declarations/types/Redux';

import Button from '#components/Buttons/Button';
import Link from '#components/Buttons/Link';
import Logo from '#components/Logo/Logo';
import Icon from '#components/Icon/Icon';
import { getLang } from '#controllers/getLang';
// import { Langs } from '#declarations/enums/Langs';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Navbar: React.FC<Props> = ({ className, ...rest }) => {
	const lang = getLang();

	const {
		auth: { isLogged },
		cart: { items },
	} = useSelector(({ auth, cart }: ReduxState) => ({ auth, cart }));
	const { logoutUserAuth } = useAuthActions();
	// const { setLangApp } = useAppActions();

	const [cartItemCount, setCartItemCount] = useState<number>();

	React.useEffect(() => {
		const itemCount = items.length > 0 ? items.length : undefined;

		setCartItemCount(itemCount);
	}, [items]);

	return (
		<nav className={['container', styles['navbar'], className].join(' ')} {...rest}>
			{/* --- ALWAYS --- */}
			<Logo />
			<ul className={styles['navbar-list']}>
				{/* CART */}
				<li>
					<Link href={URLS.CART} tooltip={lang.cartTooltip} badge={cartItemCount}>
						<Icon icon={'/images/icons/cloche-svg.svg'} size='medium' />
					</Link>
				</li>

				{/* --- LOGGED --- */}
				{isLogged && (
					<>
						{/* ORDERS */}
						<li>
							<Link href={URLS.ORDERS} tooltip={lang.ordersTooltip}>
								<Icon icon={'/images/icons/orders-svg.svg'} size='medium' />
							</Link>
						</li>
						{/* SETTINGS */}
						<li>
							<Link href={URLS.SETTINGS_ACCOUNT} tooltip={lang.settingsTooltip}>
								<Icon icon={'/images/icons/settings-svg.svg'} size='medium' />
							</Link>
						</li>
						{/* SIGN OUT */}
						<li>
							<Button simple onMouseUp={() => logoutUserAuth()} tooltip={lang.signOutTooltip}>
								<Icon icon={'/images/icons/sign-out-svg.svg'} size='medium' />
							</Button>
						</li>
					</>
				)}

				{/* --- NOT LOGGED --- */}
				{/* SIGN IN */}
				{!isLogged && (
					<>
						<li className={styles['navbar-sign-in']}>
							<Link href={URLS.LOGIN}>
								<Icon icon={'/images/icons/profile-svg.svg'} size='medium' />
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
