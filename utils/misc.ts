import { Langs } from '#declarations/enums/Langs';
import { AppState, AuthState, CartState } from '#declarations/interfaces/Redux';
import { CookieSerializeOptions } from 'cookie';
import Cors from 'cors';
import { baseClient, baseOrder } from './baseForms';

export { cors, isProduction, defaultCookieOptions, siteName, baseUrl, reEmail, URLS, isClientSide };

const isProduction = process.env.NODE_ENV === 'production';
const baseUrl = isProduction ? 'http://localhost:3000' : 'http://localhost:3000';
const isClientSide = typeof window !== 'undefined';

// URLS
const URLS = {
	// WEBSITE
	HOME: baseUrl,
	LOGIN: `${baseUrl}/login`,
	REGISTER: `${baseUrl}/register`,

	// API
	API_REGISTER: '/api/auth/register',
	API_LOGIN: '/api/auth/login',
	API_LOGOUT: '/api/auth/logout',
	API_GET_USER: `/api/clients`,
	API_PLACE_ORDER: `/api/orders`,
};

// MISC
// TODO update to correct domain
const domain = isProduction ? 'localhost' : 'localhost';
const siteName = 'Foodie';
const reEmail =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// COOKIES
const defaultCookieOptions: CookieSerializeOptions = {
	// TODO update to "isProduction"
	secure: false,
	httpOnly: true,
	sameSite: isProduction ? 'strict' : 'lax',
	path: '/',
	domain,
};

// CORS
const cors = Cors({
	methods: ['GET', 'HEAD'],
});

// REDUX INIT STATES
export const initAppState: AppState = {
	loading: false,
	appLang: Langs.en,
};

export const initAuthState: AuthState = {
	loading: false,
	isLogged: false,
	token: undefined,
	user: baseClient,
};

export const initCartState: CartState = {
	...baseOrder,
	loading: false,
};
