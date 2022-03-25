import { COLLECTIONS } from '#firebase/declarations/enums';
import { MenuSchema } from '#firebase/declarations/schemas';
import { firestore } from '#firebase/initServerApp';

export { getMenuByUidServerSide };

const getMenuByUidServerSide = async (uid: string) => {
	try {
		const menuDoc = await firestore.collection(COLLECTIONS.MENUS).doc(uid).get();
		const menu = menuDoc.data() as MenuSchema;

		return { menu };
	} catch (error) {
		throw error;
	}
};
