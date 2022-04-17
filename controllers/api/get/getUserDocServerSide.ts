import { COLLECTIONS } from '#firebase/declarations/enums';
import { firestore } from '#firebase/initServerApp';

export { getUserDocServerSide };

interface GetUserDocServerSideParams {
	uid: string;
}

const getUserDocServerSide = async ({ uid }: GetUserDocServerSideParams) => {
	try {
		let userDoc = await firestore.collection(COLLECTIONS.CLIENTS).doc(uid).get();

		if (!userDoc.exists) {
			userDoc = await firestore.collection(COLLECTIONS.RESTAURANTS).doc(uid).get();
		}

		if (!userDoc.exists) {
			throw { status: 404, message: 'User not found' };
		}

		return userDoc;
	} catch (error) {
		throw error;
	}
};
