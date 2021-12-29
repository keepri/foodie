import '#firebase/initClientApp';
import '#styles/globals.scss';

import React from 'react';
import { Provider } from 'react-redux';

import type { AppProps } from 'next/app';
import { store } from '#redux/store';
import axios from 'axios';
import { isProduction } from 'utils/variables';

if (!axios.defaults.baseURL) {
	axios.defaults.baseURL = isProduction ? 'http://localhost:3000' : 'http://localhost:3000';
}

if (!axios.defaults.headers.post['Content-Type']) {
	axios.defaults.headers.post['Content-Type'] = 'application/json';
}

const Foodie = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
};

export default Foodie;
