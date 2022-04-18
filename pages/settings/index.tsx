import React from 'react';
import type { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';
import NavbarDashboard from '#components/Navigation/NavbarDashboard/NavbarDashboard';

import styles from '#styles/pages/SettingsPage.module.scss';
import SettingsAccount from '#modules/Settings/SettingsAccount/SettingsAccount';
// import SettingsHeader from '#components/SettingsHeader/SettingsHeader';
import { SETTINGS_ROUTES } from '#declarations/enums/SettingsRoutes';
import { UserType } from '#firebase/declarations/schemas';
import { validateUserServerSide } from '#controllers/validation/validateUserServerSide';
import { useAppActions } from '#redux/actions';

interface Props {
	user: UserType;
}

const SettingsPageAccount: NextPage<Props> = ({ user }) => {
	const { setSettingsPageApp } = useAppActions();

	React.useEffect(() => {
		if (user) {
			setSettingsPageApp({ user, onRoute: SETTINGS_ROUTES.ACCOUNT });
		}
	}, [user]);

	return (
		<main className={styles.settingsPage}>
			<NavbarDashboard />
			<section className={styles['settingsPage-body']}>
				{/* <SettingsHeader /> */}
				<SettingsAccount />
			</section>
		</main>
	);
};

export const getServerSideProps: GetServerSideProps = async ({
	req,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Partial<Props>>> => {
	try {
		const userDoc = await validateUserServerSide({ req });
		const userData = userDoc.data() as UserType;

		return {
			props: { user: userData },
		};
	} catch ({ message }) {
		console.error(message);

		return { notFound: true };
	}
};

export default SettingsPageAccount;
