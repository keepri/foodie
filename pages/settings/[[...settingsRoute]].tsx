import React from 'react';
import type { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';

import styles from '#styles/pages/SettingsPage.module.scss';

import NavbarDashboard from '#components/Navigation/NavbarDashboard/NavbarDashboard';
import { useSelector } from 'react-redux';
import { ReduxState } from '#declarations/types/Redux';
import { parseCookies } from 'nookies';
import { COOKIE_NAMES } from '#firebase/declarations/enums';
import { settingsPagePossibleRoutes, URLS } from '#utils/misc';
import { SETTINGS_ROUTES } from '#declarations/enums/SettingsRoutes';
import { useAppActions } from '#redux/actions';
import SettingsAccount from '#modules/Settings/SettingsAccount/SettingsAccount';
import SettingsHeader from '#components/SettingsHeader/SettingsHeader';

interface Props {
	urlRoute: SETTINGS_ROUTES;
}

const SettingsPage: NextPage<Props> = ({ urlRoute }) => {
	const {
		app: {
			settingsPage: { routeSelected },
		},
	} = useSelector(({ app }: ReduxState) => ({ app }));

	const { setSettingsPageApp } = useAppActions();

	React.useEffect(() => {
		if (urlRoute !== routeSelected) {
			setSettingsPageApp({ routeSelected: urlRoute });
		}
	}, []);

	return (
		<main className={styles.settingsPage}>
			<NavbarDashboard />
			<section className={styles['settingsPage-body']}>
				<SettingsHeader />
				{routeSelected === SETTINGS_ROUTES.ACCOUNT && <SettingsAccount />}
			</section>
		</main>
	);
};

export const getServerSideProps: GetServerSideProps = async ({
	req,
	query,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> => {
	const { settingsRoute } = query;

	if (!settingsRoute) {
		return {
			props: {
				urlRoute: SETTINGS_ROUTES.ACCOUNT,
			},
		};
	}

	if (settingsRoute && settingsRoute.length > 1) {
		return {
			notFound: true,
		};
	}

	const { [COOKIE_NAMES.TOKEN]: token } = parseCookies({ req });

	if (!token) {
		return {
			redirect: {
				permanent: true,
				destination: URLS.LOGIN,
			},
		};
	}

	const [urlRoute] = settingsRoute as SETTINGS_ROUTES[];

	if (!settingsPagePossibleRoutes.includes(urlRoute)) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			urlRoute,
		},
	};
};

export default SettingsPage;
