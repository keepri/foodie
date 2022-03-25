import { COLLECTIONS, MESSAGES } from '#firebase/declarations/enums';
import { auth, firestore } from '#firebase/initServerApp';
import { NextApiRequest, NextApiResponse } from 'next';

import { ClientRegisterFields } from '#firebase/declarations/interfaces';
import { REQUEST_METHODS } from '#declarations/enums/REST';
import { ClientSchema } from '#firebase/declarations/schemas';
import { RegisterReturnType } from '#firebase/declarations/types';
import { handleError } from '#controllers/api/handleError';
import { URLS } from '#utils/misc';

// import nodemailer from 'nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse<RegisterReturnType>) => {
	switch (req.method?.toUpperCase()) {
		case REQUEST_METHODS.POST: {
			try {
				const { email, password, name, phone } = req.body as ClientRegisterFields;
				const actionCodeSettings = { url: URLS.LOGIN };

				const user = await auth.createUser({ email, password });
				if (!user) return res.status(500).json({ message: MESSAGES.CREATE_ACCOUNT_ERROR });

				const newUserInfo: ClientSchema = { name, phone, orders: [] };
				await firestore.collection(COLLECTIONS.CLIENTS).doc(user.uid).create(newUserInfo);

				const verificationEmail = await auth.generateEmailVerificationLink(email, actionCodeSettings);
				if (!verificationEmail) return res.status(500).json({ message: MESSAGES.VERIF_EMAIL_ERROR });

				return res.status(200).json({ user, verificationEmail, message: MESSAGES.CREATE_ACCOUNT_SUCCESS });
			} catch (error) {
				handleError(error, res);
			}

			break;
		}

		default:
			return res.status(405).json({ message: `Method "${req.method}" not allowed!` });
	}
};
