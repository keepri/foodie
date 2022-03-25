import { NextApiRequest, NextApiResponse } from 'next';

import { REQUEST_METHODS } from '#declarations/enums/REST';

import { ClientsRequestBody, ClientsReturnType } from '#firebase/declarations/types';
import { COLLECTIONS, MESSAGES } from '#firebase/declarations/enums';
import { ClientSchema } from '#firebase/declarations/schemas';
import { firestore } from '#firebase/initServerApp';

import { handleError } from '#controllers/api/handleError';
import { useCors } from '#controllers/api/middleware/useCors';
import { clientRouteValidation } from '#controllers/api/validation/routes/clientRouteValidation';

export default async (req: NextApiRequest, res: NextApiResponse<ClientsReturnType>) => {
	// INITIAL ROUTE VERIFICATIONS
	try {
		await useCors(req, res);
		await clientRouteValidation(req);
	} catch (error) {
		handleError(error, res);
	}

	switch (req.method?.toUpperCase()) {
		// GET
		case REQUEST_METHODS.POST: {
			try {
				const { tokenUid } = req.body as ClientsRequestBody;
				const clientDoc = await firestore
					.collection(COLLECTIONS.CLIENTS)
					.doc(tokenUid as string)
					.get();

				if (!clientDoc.exists) return res.status(404).json({ message: MESSAGES.NOT_FOUND });

				const client = clientDoc.data() as ClientSchema;

				return res.status(200).json({ client });
			} catch (error) {
				handleError(error, res);
			}

			break;
		}

		// PATCH
		case REQUEST_METHODS.PATCH: {
			try {
				const { data, tokenUid } = req.body as ClientsRequestBody;
				const clientDoc = firestore.collection(COLLECTIONS.CLIENTS).doc(tokenUid as string);

				if (!(await clientDoc.get()).exists) return res.status(404).json({ message: MESSAGES.NOT_FOUND });

				await clientDoc.update(data as Partial<ClientSchema>);
				const client = (await clientDoc.get()).data() as ClientSchema;

				return res.status(200).json({ client });
			} catch (error) {
				handleError(error, res);
			}

			break;
		}

		// PUT
		case REQUEST_METHODS.PUT: {
			try {
				const { data, tokenUid } = req.body as ClientsRequestBody;
				const clientDoc = firestore.collection(COLLECTIONS.CLIENTS).doc(tokenUid as string);

				if (!(await clientDoc.get()).exists) return res.status(404).json({ message: MESSAGES.NOT_FOUND });

				await clientDoc.set(data as Partial<ClientSchema>);
				const client = (await clientDoc.get()).data() as ClientSchema;

				return res.status(200).json({ client });
			} catch (error) {
				handleError(error, res);
			}

			break;
		}

		default:
			return res.status(405).json({ message: `Method "${req.method}" not allowed!` });
	}
};
