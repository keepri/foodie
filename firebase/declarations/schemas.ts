import { ORDER_STATUS, RESTAURANT_STATUS } from './enums';
import { Address, RestaurantCosts, OpenHours, MenuItem, Category } from './interfaces';

export interface ClientSchema {
	name: string;
	phone: string;
	addresses?: Address[];
	orders: string[];
}

export interface RestaurantSchema {
	uid: string;
	status: RESTAURANT_STATUS;
	name: string;
	phone: string;
	addresses: Address[];
	costs: RestaurantCosts;
	rating: number;
	hours: OpenHours;
	photo: string;
	logo: string;
	description: string;
	orders: string[];
}

export interface OrderSchema {
	status: ORDER_STATUS;
	items: MenuItem[];
	total: number;
	client: string;
	restaurant: string;
	date: number;
	info?: string;
}

export interface ReviewSchema {
	client: string;
	restaurant: string;
	rating?: number;
	review?: string;
	date: number;
}

export interface MenuSchema {
	restaurant: string;
	categories: Category[];
}
