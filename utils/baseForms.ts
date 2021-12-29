import { RESTAURANT_STATUS } from '#firebase/declarations/enums';
import { RestaurantSchema } from '#firebase/declarations/schemas';

export { baseRestaurant };

const baseRestaurant: RestaurantSchema = {
	status: RESTAURANT_STATUS.CLOSED,
	name: '',
	phone: '',
	addresses: [
		{
			country: '',
			county: '',
			city: '',
			street: '',
			number: 0,
			alias: '',
			extra: '',
		},
	],
	costs: {
		packaging: 0,
		delivery: 0,
		minOrder: 0,
	},
	rating: 0,
	hours: {
		mon: '',
		tue: '',
		wed: '',
		thu: '',
		fri: '',
		sat: '',
		sun: '',
	},
};
