import React, { useRef } from 'react';

import styles from './NavbarDashboard.module.scss';

import Link from '#components/Buttons/Link';
import { SETTINGS_ROUTES } from '#declarations/enums/SettingsRoutes';
import { getLang } from '#controllers/getLang';

interface Props extends React.HTMLAttributes<HTMLElement> {
	compact?: boolean;
	routeSelected: SETTINGS_ROUTES;
}

const NavbarDashboard: React.FC<Props> = ({ className, compact, routeSelected }) => {
	const lang = getLang();

	const listItems = useRef([{ label: lang.account, href: SETTINGS_ROUTES.ACCOUNT }]).current;

	return (
		<aside className={[styles['navbar-dashboard'], className].join(' ')}>
			<nav aria-label='dashboard navigation'>
				<ul className={styles.list}>
					{listItems.map(({ label, href }, index) => (
						<li
							key={`settings-dashboard-nav-item-${index + 1}`}
							className={[styles.listItem, routeSelected === href && styles.listItemSelected].join(' ')}
						>
							<Link className={[styles.listItemLink].join(' ')} underline={routeSelected === href} href={href}>
								{!compact && label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default NavbarDashboard;
