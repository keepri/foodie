import { cors } from 'utils/misc';
import { runMiddleware } from '#controllers/api/runMiddleware';
import { NextApiRequest, NextApiResponse } from 'next';

export { useCors };

const useCors = async (req: NextApiRequest, res: NextApiResponse) => {
	await runMiddleware(req, res, cors);
};
