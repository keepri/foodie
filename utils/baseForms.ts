import { ORDER_STATUS, RESTAURANT_STATUS } from '#firebase/declarations/enums';
import {
	Address,
	Category,
	CategoryItem,
	OpenHours,
	OrderItems,
	RestaurantCosts,
} from '#firebase/declarations/interfaces';
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
	baseOrderItem,
	baseCategory,
	baseCategoryItem,
};

// BASE SCHEMA COMPONENTS
const baseCategoryItem: CategoryItem = {
	name: '',
	description: '',
	price: 0,
	photo: '',
};

const baseCategory: Category = {
	name: '',
	items: [baseCategoryItem],
};

const baseOrderItem: OrderItems = {
	name: '',
	description: '',
	quantity: 0,
	price: 0,
	info: '',
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
	status: RESTAURANT_STATUS.CLOSED,
	name: '',
	phone: '',
	addresses: [baseAddress],
	costs: baseCosts,
	rating: 0,
	hours: baseHours,
};

const baseOrder: OrderSchema = {
	items: [baseOrderItem],
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
	addresses: [baseAddress],
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
	categories: [baseCategory],
};
