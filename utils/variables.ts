import { CookieSerializeOptions } from 'cookie';

export { isProduction, defaultCookieOptions };

const isProduction = process.env.NODE_ENV === 'production';

const defaultCookieOptions: CookieSerializeOptions = {
	secure: isProduction,
	httpOnly: true,
	sameSite: isProduction ? 'strict' : 'lax',
	path: '/',
	domain: process.env.BASE_DOMAIN,
};
