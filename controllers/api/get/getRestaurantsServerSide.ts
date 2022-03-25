import { COLLECTIONS } from '#firebase/declarations/enums';
import { RestaurantSchema } from '#firebase/declarations/schemas';
import { firestore } from '#firebase/initServerApp';

export { getRestaurantsServerSide };

const getRestaurantsServerSide = async () => {
	try {
		const restaurantsCol = await firestore.collection(COLLECTIONS.RESTAURANTS).get();
		const restaurants = restaurantsCol.docs.map(doc => doc.data() as RestaurantSchema);

		return { restaurants };
	} catch (error) {
		throw error;
	}
};
