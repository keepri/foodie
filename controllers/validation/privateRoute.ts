/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxState } from '#declarations/types/Redux';
import { useRouter } from 'next/router';
import { URLS } from '#utils/misc';

export { privateRoute };

interface Props {
	whenIsLoggedIs: boolean;
	disabled?: boolean;
}

const privateRoute = ({ whenIsLoggedIs, disabled }: Props) => {
	const isLogged = useSelector(({ auth: { isLogged } }: ReduxState) => isLogged);
	const { replace } = useRouter();

	React.useEffect(() => {
		isLogged === whenIsLoggedIs && !disabled && replace(URLS.LOGIN);
	}, [isLogged, disabled, whenIsLoggedIs]);
};
