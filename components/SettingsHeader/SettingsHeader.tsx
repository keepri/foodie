import React from 'react';
import { useSelector } from 'react-redux';

import styles from './SettingsHeader.module.scss';
import { ReduxState } from '#declarations/types/Redux';
import { firstToUpper } from '#controllers/text/firstToUpper';
import { SETTINGS_ROUTES } from '#declarations/enums/SettingsRoutes';
import { getLang } from '#controllers/getLang';

interface Props {}

const SettingsHeader: React.FC<Props> = ({}) => {
	const lang = getLang();

	const settingsHeaderTitles = React.useRef({ [SETTINGS_ROUTES.ACCOUNT]: lang.accountTitle }).current;

	const {
		app: {
			settingsPage: { routeSelected },
		},
	} = useSelector(({ app }: ReduxState) => ({ app }));

	const title = React.useMemo(() => firstToUpper(settingsHeaderTitles[routeSelected]), [routeSelected]);

	return (
		<section className={styles['settings-header-container']}>
			<h1>{firstToUpper(title)}</h1>
		</section>
	);
};

export default SettingsHeader;
