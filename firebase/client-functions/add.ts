import { collection, addDoc, getDoc } from 'firebase/firestore';
import { db } from '#firebase/initClientApp';

import type { CollectionReference } from 'firebase/firestore';
import { COLLECTIONS } from '#firebase/declarations/enums';
import { AddOptions } from '#firebase/declarations/interfaces';

export const fireAddToCollection = async <T>(collectionName: COLLECTIONS, item: T, options?: AddOptions) => {
	const collectionRef = collection(db, collectionName) as CollectionReference<T>;

	try {
		const added = await addDoc<T>(collectionRef, item);

		if (added && options?.returnDoc) return (await getDoc(added)).data();

		return;
	} catch (error) {
		console.warn('firebase function failed with:', error);
		throw error;
	}
};
