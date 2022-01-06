import { NextApiRequest, NextApiResponse } from 'next';

import { COOKIE_NAMES, MESSAGES } from '#firebase/declarations/enums';
import { auth } from '#firebase/initServerApp';
import { parseTokenString } from './parseTokenString';

export { verifyToken };

const verifyToken = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const token = req.cookies?.[COOKIE_NAMES.TOKEN] as string | undefined;
		if (!token) return res.status(401).json({ message: MESSAGES.UNAUTHORIZED_NO_TOKEN });

		const checkRevoked = true;
		const { pre, tokenString } = parseTokenString(token);

		if (pre !== 'Bearer' || !tokenString) return res.status(401).json({ message: MESSAGES.UNAUTHORIZED_TOKEN });

		const { uid } = await auth.verifyIdToken(tokenString, checkRevoked);

		if (uid) req.body.tokenUid = uid;
	} catch (error) {
		throw error;
	}
};
