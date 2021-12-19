import { COLLECTIONS } from '#firebase/declarations/enums';
import admin from '#firebase/initServerApp';
import { User } from 'firebase/auth';
import { NextApiRequest, NextApiResponse } from 'next';

enum METHODS {
	GET = 'GET',
	POST = 'POST',
	PATCH = 'PATCH',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

interface Body extends User {
	name: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === METHODS.POST) {
		const firestore = admin.firestore();
		const { uid, name } = req.body as Body;

		await firestore.collection(COLLECTIONS.USERS).doc(uid).set({
			name,
		});

		return res.status(200).json({ msg: 'ok' });
	}
}
