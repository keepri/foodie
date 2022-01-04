import { URLS_DEV, URLS_PROD } from '#declarations/enums/URLS';
import { AuthState, CartState } from '#declarations/interfaces/Redux';
import { CookieSerializeOptions } from 'cookie';
import Cors from 'cors';
import { baseOrder } from './baseForms';

export { cors, isProduction, defaultCookieOptions };

const isProduction = process.env.NODE_ENV === 'production';

const defaultCookieOptions: CookieSerializeOptions = {
	secure: isProduction,
	httpOnly: true,
	sameSite: isProduction ? 'strict' : 'lax',
	path: '/',
	domain: isProduction ? URLS_PROD.HOME : URLS_DEV.HOME,
};

const cors = Cors({
	methods: ['GET', 'HEAD'],
});

export const initAuthState: AuthState = {
	loading: false,
	isLogged: false,
};

export const initCartState: CartState = {
	...baseOrder,
	loading: false,
};
