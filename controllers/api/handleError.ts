import { FirebaseError } from 'firebase-admin';
import { NextApiResponse } from 'next';

export const handleError = async (error: unknown, res: NextApiResponse) => {
	const { code, message } = error as FirebaseError;
	let statusCode = 500;

	if (+code === 5) statusCode = 404;

	return res.status(statusCode).json({ code, message });
};
