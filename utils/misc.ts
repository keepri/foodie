import { CURRENCY } from '#declarations/enums/Currency';
import { Langs } from '#declarations/enums/Langs';
import { SETTINGS_ROUTES } from '#declarations/enums/SettingsRoutes';
import { AppState, AuthState, CartState, SettingsPageAppState } from '#declarations/interfaces/Redux';
import { CookieSerializeOptions } from 'cookie';
import Cors from 'cors';
import { baseClient, baseOrder } from './baseForms';

export {
	cors,
	isProduction,
	defaultCookieOptions,
	firebaseConfig,
	siteName,
	baseUrl,
	reEmail,
	rePhone,
	URLS,
	settingsPagePossibleRoutes,
	defaultLanguage,
	defaultAvatar,
	defaultRestaurantPhoto,
	defaultRestaurantLogo,
	defaultItemPhoto,
	foodieLogo,
	ratingStarFilled,
	ratingStarEmpty,
	closeX,
};

const isProduction = process.env.NODE_ENV === 'production';
const baseUrl = isProduction
	? typeof location !== 'undefined'
		? location.hostname
		: undefined
	: 'http://localhost:3000';
{
	/* TODO change default restaurant photo */
}
const defaultAvatar = require('#images/default-logo-png.png');
const defaultRestaurantPhoto = require('#images/default-restaurant-jpg.jpg');
const defaultItemPhoto = require('#images/default-food-item-jpg.jpg');
const defaultRestaurantLogo = require('#images/default-logo-png.png');
const foodieLogo = require('#images/f-png.png');
const ratingStarFilled = require('#images/star-filled-png.png');
const ratingStarEmpty = require('#images/star-empty-png.png');
const closeX = require('#images/close-png.png');
const defaultLanguage = Langs.en;

// URLS
const URLS = {
	// WEBSITE
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	CART: '/cart',
	RESTAURANT: '/restaurant',
	ORDERS: '/orders',
	SETTINGS_ACCOUNT: '/settings',

	// API
	API_REGISTER: '/api/auth/register',
	API_LOGIN: '/api/auth/login',
	API_LOGOUT: '/api/auth/logout',
	API_GET_USER: '/api/clients',
	API_PLACE_ORDER: '/api/orders',
	API_GET_ORDERS: '/api/orders',
	API_GET_RESTAURANTS: '/api/restaurants',
	API_GET_MENU: '/api/menus',
};

// MISC
// TODO update to correct domain
const domain = isProduction ? (typeof location !== 'undefined' ? location.host : undefined) : 'localhost';
const siteName = 'Foodie';
const reEmail =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const rePhone =
	/^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/gim;
const settingsPagePossibleRoutes: SETTINGS_ROUTES[] = [SETTINGS_ROUTES.ACCOUNT];

// FIREBASE
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

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
export const settingsPageInitState: SettingsPageAppState = {};
export const initAppState: AppState = {
	currency: CURRENCY.RON,
	loading: false,
	appLang: Langs.en,
	selectedRestaurant: null,
	settingsPage: settingsPageInitState,
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
