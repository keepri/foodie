import React, { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { SETTINGS_ROUTES } from '#declarations/enums/SettingsRoutes';

interface Props {}

const SettingsPage: NextPage<Props> = ({}) => {
	const possibleRoutes: string[] = [SETTINGS_ROUTES.ACCOUNT];

	const {
		query: { settingsRoute },
	} = useRouter();

	const [routeSelected, setRouteSelected] = useState<SETTINGS_ROUTES>(
		settingsRoute && Array.isArray(settingsRoute) && possibleRoutes.includes(settingsRoute[0])
			? (settingsRoute[0] as SETTINGS_ROUTES)
			: SETTINGS_ROUTES.ACCOUNT,
	);

	return (
		<main className='container'>
			<p>Hello settings page!</p>
			{routeSelected}
		</main>
	);
};

export default SettingsPage;
