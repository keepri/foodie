// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export type HelloData = { name: string };

export default function handler(
	_req: NextApiRequest,
	res: NextApiResponse<HelloData>
) {
	return res.status(200).json({ name: 'men' });
}
