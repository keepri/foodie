import React from 'react';
import { useSelector } from 'react-redux';

import styles from './SettingsAccount.module.scss';
import { ReduxState } from '#declarations/types/Redux';

interface Props {}

const SettingsAccount: React.FC<Props> = ({}) => {
	const {
		app: {
			settingsPage: { user },
		},
	} = useSelector(({ app }: ReduxState) => ({ app }));

	return <section className={styles['settings-account-container']}></section>;
};

export default SettingsAccount;
