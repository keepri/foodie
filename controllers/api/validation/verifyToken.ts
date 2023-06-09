import { NextApiRequest } from 'next';

import { COOKIE_NAMES, MESSAGES } from '#firebase/declarations/enums';
import { auth } from '#firebase/initServerApp';
import { parseToken } from 'react-code-snippets';

export { verifyToken };

const verifyToken = async (req: NextApiRequest) => {
	try {
		const token = req.cookies?.[COOKIE_NAMES.TOKEN] as string | undefined;

		if (!token) {
			// res.status(401).json({ message: MESSAGES.UNAUTHORIZED_NO_TOKEN });
			throw Error(MESSAGES.UNAUTHORIZED_NO_TOKEN);
		}

		const checkRevoked = true;
		const { pre, tokenString } = parseToken(token);

		if (pre !== 'Bearer' || !tokenString) {
			// res.status(401).json({ message: MESSAGES.UNAUTHORIZED_TOKEN });
			throw Error(MESSAGES.UNAUTHORIZED_TOKEN);
		}

		const { uid } = await auth.verifyIdToken(tokenString, checkRevoked);

		if (uid) req.body.tokenUid = uid;
	} catch (error) {
		throw error;
	}
};
