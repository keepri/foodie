import { COLLECTIONS } from '#firebase/declarations/enums';
import { RestaurantSchema } from '#firebase/declarations/schemas';
import { firestore } from '#firebase/initServerApp';

export { getRestaurantByUidServerSide };

const getRestaurantByUidServerSide = async (uid: string) => {
	try {
		const restaurantDoc = await firestore.collection(COLLECTIONS.RESTAURANTS).doc(uid).get();
		const restaurant = restaurantDoc.data() as RestaurantSchema;

		return { restaurant };
	} catch (error) {
		throw error;
	}
};
