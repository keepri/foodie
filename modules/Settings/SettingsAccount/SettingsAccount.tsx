import React from 'react';
import { useSelector } from 'react-redux';

import styles from './SettingsAccount.module.scss';
import { ReduxState } from '#declarations/types/Redux';
import Addresses from '#components/Addresses/Addresses';
import AccountInfo from '#components/AccountInfo/AccountInfo';

interface Props {}

const SettingsAccount: React.FC<Props> = ({}) => {
	const { user } = useSelector(
		({
			app: {
				settingsPage: { user },
			},
		}: ReduxState) => ({ user }),
	);

	return (
		<section className={styles['settings-account-container']}>
			{user ? (
				<>
					<AccountInfo user={user} />
					<Addresses addresses={user.addresses ?? []} />
				</>
			) : (
				<></>
			)}
		</section>
	);
};

export default SettingsAccount;
