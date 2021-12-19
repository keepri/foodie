import '#firebase/initApp';

import '#styles/globals.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '#redux/store';

import React from 'react';

const Foodie = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
};

export default Foodie;
