import { NextApiRequest, NextApiResponse } from 'next';

import { REQUEST_METHODS } from '#declarations/enums/REST';

import { MenusRequestBody, MenusReturnType } from '#firebase/declarations/types';
import { COLLECTIONS, MESSAGES } from '#firebase/declarations/enums';
import { MenuSchema } from '#firebase/declarations/schemas';
import { firestore } from '#firebase/initServerApp';

import { handleError } from '#controllers/api/handleError';
import { useCors } from '#controllers/api/middleware/useCors';
import { menuRouteValidation } from '#controllers/api/validation/routes/menuRouteValidation';

export default async (req: NextApiRequest, res: NextApiResponse<MenusReturnType>) => {
	// INITIAL ROUTE VERIFICATIONS
	try {
		await useCors(req, res);
		await menuRouteValidation(req, res);
	} catch (error) {
		await handleError(error, res);
	}

	switch (req.method?.toUpperCase()) {
		// GET
		case REQUEST_METHODS.GET: {
			try {
				const { uid } = req.body as MenusRequestBody;
				const menuDoc = await firestore
					.collection(COLLECTIONS.MENUS)
					.doc(uid as string)
					.get();

				if (!menuDoc.exists) return res.status(404).json({ message: MESSAGES.NOT_FOUND });

				const menu = menuDoc.data() as MenuSchema;

				return res.status(200).json({ menu });
			} catch (error) {
				await handleError(error, res);
			}

			break;
		}

		// PATCH
		case REQUEST_METHODS.PATCH: {
			try {
				const { data, tokenUid } = req.body as MenusRequestBody;
				const menuDoc = firestore.collection(COLLECTIONS.MENUS).doc(tokenUid as string);

				if (!(await menuDoc.get()).exists) return res.status(404).json({ message: MESSAGES.NOT_FOUND });

				await menuDoc.update(data as MenuSchema);

				const menu = (await menuDoc.get()).data() as MenuSchema;

				return res.status(200).json({ menu });
			} catch (error) {
				await handleError(error, res);
			}

			break;
		}

		// PUT
		case REQUEST_METHODS.PUT: {
			try {
				const { data, tokenUid } = req.body as MenusRequestBody;
				const menuDoc = firestore.collection(COLLECTIONS.MENUS).doc(tokenUid as string);

				if (!(await menuDoc.get()).exists) return res.status(404).json({ message: MESSAGES.NOT_FOUND });

				await menuDoc.set(data as MenuSchema);

				const menu = (await menuDoc.get()).data() as MenuSchema;

				return res.status(200).json({ menu });
			} catch (error) {
				await handleError(error, res);
			}

			break;
		}

		// POST
		case REQUEST_METHODS.POST: {
			try {
				const { data, tokenUid } = req.body as MenusRequestBody;
				const menuDoc = firestore.collection(COLLECTIONS.MENUS).doc(tokenUid as string);
				await menuDoc.set(data as MenuSchema);

				return res.status(200).json({ message: MESSAGES.SUCCESS });
			} catch (error) {
				await handleError(error, res);
			}

			break;
		}

		default:
			return res.status(405).json({ message: `Method "${req.method}" not allowed!` });
	}
};
