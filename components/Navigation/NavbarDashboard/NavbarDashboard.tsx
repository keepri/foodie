import React, { useRef } from 'react';

import styles from './NavbarDashboard.module.scss';

import Link from '#components/Buttons/Link';
import { getLang } from '#controllers/getLang';
import { URLS } from '#utils/misc';
import { SETTINGS_ROUTES } from '#declarations/enums/SettingsRoutes';
import { useSelector } from 'react-redux';
import { ReduxState } from '#declarations/types/Redux';

interface Props extends React.HTMLAttributes<HTMLElement> {
	compact?: boolean;
}

const NavbarDashboard: React.FC<Props> = ({ className, compact }) => {
	const lang = getLang();

	const { onRoute } = useSelector(
		({
			app: {
				settingsPage: { onRoute },
			},
		}: ReduxState) => ({ onRoute }),
	);

	const listItems = useRef([{ label: lang.account, href: URLS.SETTINGS_ACCOUNT }]).current;

	return (
		<aside className={[styles['navbar-dashboard'], className].join(' ')}>
			<nav aria-label='dashboard navigation'>
				<ul className={styles.list}>
					{listItems.map(({ label, href }, index) => {
						const isActive =
							(onRoute === SETTINGS_ROUTES.ACCOUNT && href === URLS.SETTINGS_ACCOUNT) || (onRoute && href.includes(onRoute));

						if (isActive) {
							return (
								<li
									key={`settings-dashboard-nav-item-${index + 1}`}
									className={[styles.listItem, styles.listItemSelected].join(' ')}
								>
									<p style={{ cursor: 'pointer' }} className={[styles.listItemLink].join(' ')}>
										{!compact && label}
									</p>
								</li>
							);
						}

						return (
							<li key={`settings-dashboard-nav-item-${index + 1}`} className={[styles.listItem].join(' ')}>
								<Link className={[styles.listItemLink].join(' ')} href={href}>
									{!compact && label}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</aside>
	);
};

export default NavbarDashboard;
