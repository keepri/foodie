import React, { useMemo, useRef } from 'react';
import type {
	//  GetStaticPaths, GetStaticPathsContext,
	NextPage,
} from 'next';
import { useRouter } from 'next/router';

import styles from '#styles/pages/SettingsPage.module.scss';
import { SETTINGS_ROUTES } from '#declarations/enums/SettingsRoutes';

import NavbarDashboard from '#components/Navigation/NavbarDashboard/NavbarDashboard';
import { privateRoute } from '#controllers/validation/privateRoute';

interface Props {}

const SettingsPage: NextPage<Props> = ({}) => {
	privateRoute({ whenIsLoggedIs: false });

	const possibleRoutes: string[] = useRef([SETTINGS_ROUTES.ACCOUNT]).current;

	const {
		query: { settingsRoute },
	} = useRouter();

	const routeSelected = useMemo(
		() =>
			settingsRoute && Array.isArray(settingsRoute) && possibleRoutes.includes(settingsRoute[0])
				? (settingsRoute[0] as SETTINGS_ROUTES)
				: SETTINGS_ROUTES.ACCOUNT,
		[possibleRoutes, settingsRoute],
	);

	return (
		<main className={styles.settingsPage}>
			<NavbarDashboard routeSelected={routeSelected} />
			<section className={styles['settingsPage-body']}>
				<p>Hello settings page!</p>
				{routeSelected}
			</section>
		</main>
	);
};

// export const getStaticPaths: GetStaticPaths = async ({}: GetStaticPathsContext) => {
// 	const paths = [{ params: {} }, { params: { settingsRoute: SETTINGS_ROUTES.ACCOUNT } }];

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// };

export default SettingsPage;
