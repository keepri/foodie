import '#styles/globals.scss';
import type { AppProps } from 'next/app';

const Foodie = ({ Component, pageProps }: AppProps) => (
	<Component {...pageProps} />
);

export default Foodie;
