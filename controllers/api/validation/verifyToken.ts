import { COOKIE_NAMES, MESSAGES } from '#firebase/declarations/enums';
import { auth } from '#firebase/initServerApp';
import { NextApiRequest, NextApiResponse } from 'next';

// interface VerifyTokenResult {
// 	uid: string;
// }

export { verifyToken };

const verifyToken = async (req: NextApiRequest, res: NextApiResponse) => {
	const token = req.cookies?.[COOKIE_NAMES.TOKEN];
	if (!token) return res.status(401).json({ message: MESSAGES.UNAUTHORIZED_NO_TOKEN });

	// const result: VerifyTokenResult = { uid: '' };

	try {
		const checkRevoked = true;
		const tokenSplit = token.split(' ');

		if (tokenSplit?.[0] !== 'Foodie' || !tokenSplit?.[1])
			return res.status(401).json({ message: MESSAGES.UNAUTHORIZED_TOKEN });

		const { uid } = await auth.verifyIdToken(tokenSplit?.[1], checkRevoked);

		if (uid) req.body.tokenUid = uid;
	} catch (error) {
		throw error;
	}

	// return result;
};
