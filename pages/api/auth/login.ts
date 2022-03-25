import { COLLECTIONS, COOKIE_NAMES, MESSAGES } from '#firebase/declarations/enums';
import { auth, firestore } from '#firebase/initServerApp';
import { NextApiRequest, NextApiResponse } from 'next';

import { ClientLoginFields } from '#firebase/declarations/interfaces';
import { REQUEST_METHODS } from '#declarations/enums/REST';
import { ClientSchema } from '#firebase/declarations/schemas';
import { LoginReturnType } from '#firebase/declarations/types';
import { handleError } from '#controllers/api/handleError';
import { defaultCookieOptions } from '#utils/misc';
import { destroyCookie, setCookie } from 'nookies';

// import nodemailer from 'nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse<LoginReturnType>) => {
	switch (req.method?.toUpperCase()) {
		case REQUEST_METHODS.POST: {
			try {
				const { token } = req.body as ClientLoginFields;
				if (!token) return res.status(401).json({ message: MESSAGES.UNAUTHORIZED_NO_TOKEN });

				// const sessionCookie = await auth.createSessionCookie(token, {expiresIn: 604800000}) // 604800000 = one week in milliseconds

				const checkRevoked = true;
				const { uid } = await auth.verifyIdToken(token, checkRevoked);
				const userDoc = await firestore.collection(COLLECTIONS.CLIENTS).doc(uid).get();

				if (!userDoc.exists) {
					await auth.revokeRefreshTokens(uid);
					destroyCookie({ res }, COOKIE_NAMES.TOKEN);
					return res.status(404).json({ message: MESSAGES.NOT_FOUND });
				}

				const user = userDoc.data() as ClientSchema;
				const tokenCookie = 'Bearer ' + token;

				setCookie({ res }, COOKIE_NAMES.TOKEN, tokenCookie, defaultCookieOptions);

				return res.status(200).json({ user, message: MESSAGES.LOGIN_ACCOUNT_SUCCESS });
			} catch (error) {
				handleError(error, res);
			}

			break;
		}

		default:
			return res.status(405).json({ message: `Method "${req.method}" not allowed!` });
	}
};
