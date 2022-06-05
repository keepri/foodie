import React from 'react';

import styles from './SettingsHeader.module.scss';
import { firstToUpper } from 'react-code-snippets';
import { getLang } from '#controllers/getLang';
import { SETTINGS_ROUTES } from '#declarations/enums/SettingsRoutes';
import { ReduxState } from '#declarations/types/Redux';
import { useSelector } from 'react-redux';

interface Props {}

const SettingsHeader: React.FC<Props> = ({}) => {
	const lang = getLang();

	const {
		app: {
			settingsPage: { onRoute },
		},
	} = useSelector(({ app }: ReduxState) => ({ app }));

	const settingsHeaderTitles = React.useRef({ [SETTINGS_ROUTES.ACCOUNT]: lang.accountTitle }).current;

	const title = React.useMemo(() => (onRoute ? firstToUpper(settingsHeaderTitles[onRoute]) : ''), [onRoute]);

	return (
		<section className={styles['settings-header-container']}>
			<h1>{firstToUpper(title)}</h1>
		</section>
	);
};

export default SettingsHeader;
