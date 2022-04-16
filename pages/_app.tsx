import '#firebase/initClientApp';
import '#styles/reset.scss';
import '#styles/globals.scss';
import '#styles/mediaQueries.scss';

import React from 'react';
import { Provider } from 'react-redux';

import type { AppProps } from 'next/app';

import { store } from '#redux/store';
import axios from 'axios';

// import { baseUrl } from '#utils/misc';

import Layout from '#modules/Layout/Layout';
import Head from '#components/Layout/Head';

// axios.defaults.baseURL = baseUrl;
axios.defaults.withCredentials = true;

const Foodie = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<Head />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
};

export default Foodie;
