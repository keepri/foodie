import { COLLECTIONS } from '#firebase/declarations/enums';
import { auth, firestore } from '#firebase/initServerApp';
import { NextApiRequest, NextApiResponse } from 'next';

import { ClientRegisterFields } from '#firebase/declarations/interfaces';
import { REQUEST_METHODS } from '#declarations/enums/REST';
import { ClientSchema } from '#firebase/declarations/schemas';
import { RegisterReturnType } from '#firebase/declarations/types';
// import nodemailer from 'nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse<RegisterReturnType>) => {
	switch (req.method?.toLowerCase()) {
		case REQUEST_METHODS.POST: {
			try {
				const { email, password, name, phone } = req.body as ClientRegisterFields;

				var actionCodeSettings = {
					url:
						process.env.NODE_ENV === 'development'
							? 'http://localhost:3000/sign-in'
							: 'http://localhost:3000/sign-in',
				};

				const user = await auth.createUser({ email, password });

				if (!user) return res.status(500).json({ message: 'Server Error! User not created.' });

				const newUserInfo: ClientSchema = { name, phone };

				await firestore.collection(COLLECTIONS.USERS).doc(user.uid).set(newUserInfo);

				const verificationEmail = await auth.generateEmailVerificationLink(email, actionCodeSettings);

				if (!verificationEmail)
					return res.status(500).json({ message: 'Server failed to generate verification email!' });

				return res.status(200).json({ user, verificationEmail, message: 'Successfully created account!' });
			} catch ({ code, message }) {
				return res.status(500).json({ code: code as string, message: message as string });
			}
		}
		default:
			return res.status(405).json({ message: `Method "${req.method}" not allowed!` });
	}
};
