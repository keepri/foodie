import { getDoc, doc, DocumentReference } from 'firebase/firestore';
import { firestoreRef } from '#firebase/initClientApp';
import { COLLECTIONS, MENU_ITEM_STATUS } from '#firebase/declarations/enums';
import { MenuItem } from '#firebase/declarations/interfaces';
import { MenuSchema } from '#firebase/declarations/schemas';

export { firebaseGetDocClientSide, getMenuItemStatus };

const firebaseGetDocClientSide = async <T>(
	collectionName: COLLECTIONS,
	docId: string,
): Promise<T | undefined> => {
	const docRef = doc(firestoreRef, `${collectionName}/${docId}`) as DocumentReference<T>;

	try {
		const doc = await getDoc<T>(docRef);
		if (!doc.exists()) return;

		return doc.data();
	} catch (error) {
		console.warn('firebase function failed with:', error);
		throw error;
	}
};

// TODO WORK IN PROGRESS
const getMenuItemStatus = async (restaurantUid: string, menuItemUid: string) => {
	if (!menuItemUid || !restaurantUid) return;

	try {
		const menu = await firebaseGetDocClientSide<MenuSchema>(COLLECTIONS.MENUS, `${restaurantUid}`);
		if (!menu) return false;

		const menuItem = menu.categories.reduce((item, category) => {
			const found = category.items.find(item => item.uid === menuItemUid);

			if (found) item = found;

			return item;
		}, {} as MenuItem);

		const menuItemIsAvailable = menuItem.status === MENU_ITEM_STATUS.AVAILABLE;

		return menuItemIsAvailable;
	} catch (error) {
		console.warn('firestore get menu item status failed with:', error);
		return false;
	}
};
