import { getUserDocServerSide } from '#controllers/api/get/getUserDocServerSide';
import { COOKIE_NAMES } from '#firebase/declarations/enums';
import { auth } from '#firebase/initServerApp';
import { IncomingMessage } from 'http';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
// eslint-disable-next-line @next/next/no-server-import-in-page
import { parseCookies } from 'nookies';

export { validateUserServerSide };

interface ValidateUserServerSideParams {
	req: IncomingMessage & {
		cookies: NextApiRequestCookies;
	};
}

const validateUserServerSide = async ({ req }: ValidateUserServerSideParams) => {
	try {
		const { [COOKIE_NAMES.TOKEN]: token } = parseCookies({ req });

		if (!token) {
			throw {
				status: 401,
				message: 'No token provided',
			};
		}

		const [BEARER, JWT] = token.split(' ');

		if (BEARER !== 'Bearer' || !JWT) {
			throw {
				status: 401,
				message: 'Invalid token',
			};
		}

		const { user_id } = await auth.verifyIdToken(JWT);

		const userDoc = await getUserDocServerSide({ uid: user_id });

		return userDoc;
	} catch (error) {
		throw error;
	}
};
