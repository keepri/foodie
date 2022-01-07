import { NextApiRequest, NextApiResponse } from 'next';
import { COOKIE_NAMES, MESSAGES } from '#firebase/declarations/enums';
import { auth } from '#firebase/initServerApp';
import { REQUEST_METHODS } from '#declarations/enums/REST';
import { LogoutReturnType } from '#firebase/declarations/types';
import { handleError } from '#controllers/api/handleError';
import { verifyToken } from '#controllers/api/validation/verifyToken';
import { destroyCookie } from 'nookies';
import { defaultCookieOptions } from 'utils/misc';

// import nodemailer from 'nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse<LogoutReturnType>) => {
	try {
		await verifyToken(req, res);
	} catch (error) {
		handleError(error, res);
	}

	switch (req.method?.toUpperCase()) {
		case REQUEST_METHODS.POST: {
			try {
				const { tokenUid } = req.body;

				await auth.revokeRefreshTokens(tokenUid);

				destroyCookie({ res }, COOKIE_NAMES.TOKEN, defaultCookieOptions);

				return res.status(200).json({ message: MESSAGES.LOGOUT_SUCCESS });
			} catch (error) {
				handleError(error, res);
			}

			break;
		}

		default:
			return res.status(405).json({ message: `Method "${req.method}" not allowed!` });
	}
};
