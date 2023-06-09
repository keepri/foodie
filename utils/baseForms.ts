import { MENU_ITEM_STATUS, ORDER_STATUS, RESTAURANT_STATUS } from '#firebase/declarations/enums';
import { Address, Category, OpenHours, MenuItem, RestaurantCosts } from '#firebase/declarations/interfaces';
import {
	RestaurantSchema,
	OrderSchema,
	ClientSchema,
	ReviewSchema,
	MenuSchema,
} from '#firebase/declarations/schemas';

export {
	// BASE SCHEMAS
	baseRestaurant,
	baseOrder,
	baseClient,
	baseReview,
	baseMenu,
	// BASE SCHEMA COMPONENTS
	baseAddress,
	baseCosts,
	baseHours,
	baseMenuItem,
	baseCategory,
};

const baseMenuItem: MenuItem = {
	uid: '',
	status: MENU_ITEM_STATUS.AVAILABLE,
	name: '',
	description: '',
	quantity: 1,
	price: 0,
	info: '',
	photo: '',
};

const baseCategory: Category = {
	name: '',
	items: [],
};

const baseAddress: Address = {
	country: '',
	county: '',
	city: '',
	street: '',
	number: 0,
	alias: '',
	extra: '',
};

const baseCosts: RestaurantCosts = {
	packaging: 0,
	delivery: 0,
	minOrder: 0,
	noDeliveryAfterMinOrder: false,
};

const baseHours: OpenHours = {
	mon: '',
	tue: '',
	wed: '',
	thu: '',
	fri: '',
	sat: '',
	sun: '',
};

// BASE SCHEMAS
const baseRestaurant: RestaurantSchema = {
	uid: '',
	photo: '',
	logo: '',
	description: '',
	status: RESTAURANT_STATUS.CLOSED,
	name: '',
	phone: '',
	addresses: [],
	costs: baseCosts,
	rating: 0,
	hours: baseHours,
	orders: [],
};

const baseOrder: OrderSchema = {
	uid: '',
	items: [],
	total: 0,
	client: '',
	restaurant: '',
	status: ORDER_STATUS.PENDING,
	date: 0,
	info: '',
};

const baseClient: ClientSchema = {
	name: '',
	phone: '',
	addresses: [],
	orders: [],
};

const baseReview: ReviewSchema = {
	client: '',
	restaurant: '',
	rating: 0,
	review: '',
	date: 0,
};

const baseMenu: MenuSchema = {
	restaurant: '',
	categories: [],
};
