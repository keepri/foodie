import React, { useRef } from 'react';

import styles from './NavbarDashboard.module.scss';

import Link from '#components/Buttons/Link';
import { SETTINGS_ROUTES } from '#declarations/enums/SettingsRoutes';
import { getLang } from '#controllers/getLang';
import { useSelector } from 'react-redux';
import { ReduxState } from '#declarations/types/Redux';

interface Props extends React.HTMLAttributes<HTMLElement> {
	compact?: boolean;
}

const NavbarDashboard: React.FC<Props> = ({ className, compact }) => {
	const lang = getLang();

	const listItems = useRef([{ label: lang.account, href: `/settings/${SETTINGS_ROUTES.ACCOUNT}` }]).current;

	const {
		app: {
			settingsPage: { routeSelected },
		},
	} = useSelector(({ app }: ReduxState) => ({ app }));

	return (
		<aside className={[styles['navbar-dashboard'], className].join(' ')}>
			<nav aria-label='dashboard navigation'>
				<ul className={styles.list}>
					{listItems.map(({ label, href }, index) => (
						<li
							key={`settings-dashboard-nav-item-${index + 1}`}
							className={[styles.listItem, routeSelected === href && styles.listItemSelected].join(' ')}
						>
							<Link className={[styles.listItemLink].join(' ')} underline={href.includes(routeSelected)} href={href}>
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
