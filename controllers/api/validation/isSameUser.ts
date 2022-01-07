import { COOKIE_NAMES, MESSAGES } from '#firebase/declarations/enums';
import { NextApiRequest, NextApiResponse } from 'next';
import { destroyCookie } from 'nookies';
import { defaultCookieOptions } from 'utils/misc';

export { isSameUser };

const isSameUser = async (req: NextApiRequest, res: NextApiResponse, tokenUid: string) => {
	const uid = req.body?.uid;

	if (uid !== tokenUid) {
		destroyCookie({ res }, COOKIE_NAMES.TOKEN, defaultCookieOptions);
		res.status(401).json({ message: MESSAGES.UNAUTHORIZED_TOKEN });
		throw new Error('Not same user!');
	}
};
