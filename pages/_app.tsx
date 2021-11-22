import '#styles/globals.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '#redux/store';

const Foodie = ({ Component, pageProps }: AppProps) => (
	<Provider store={store}>
		<Component {...pageProps} />
	</Provider>
);

export default Foodie;
