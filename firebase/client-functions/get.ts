import { getDoc, doc, DocumentReference } from 'firebase/firestore';
import { firestoreRef } from '#firebase/initClientApp';
import { COLLECTIONS, MENU_ITEM_STATUS } from '#firebase/declarations/enums';
import { MenuItem } from '#firebase/declarations/interfaces';

export { fireGetDoc, getMenuItemStatus };

const fireGetDoc = async <T>(collectionName: COLLECTIONS, docId: string): Promise<T | undefined> => {
	const docRef = doc(firestoreRef, `/${collectionName}/${docId}`) as DocumentReference<T>;

	try {
		const doc = await getDoc<T>(docRef);

		if (doc.exists()) return doc.data();

		return;
	} catch (error) {
		console.warn('firebase function failed with:', error);
		throw error;
	}
};

const getMenuItemStatus = async (menuUid: string) => {
	if (!menuUid) return;

	try {
		const doc = await fireGetDoc<MenuItem>(COLLECTIONS.MENUS, menuUid);

		if (!doc) return;

		const menuItemIsAvailable = doc.status === MENU_ITEM_STATUS.AVAILABLE;

		return menuItemIsAvailable;
	} catch (error) {
		console.warn('firestore get menu item status failed with:', error);
	}

	return;
};
