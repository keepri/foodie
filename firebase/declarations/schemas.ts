import { ACCOUNT_TYPE, ORDER_STATUS, RESTAURANT_STATUS } from './enums';
import { Address, RestaurantCosts, OpenHours, OrderItems, Category } from './interfaces';

export interface ClientSchema {
	name: string;
	phone: string;
	addresses?: Address[];
}

export interface RestaurantSchema {
	status: RESTAURANT_STATUS;
	name: string;
	phone: string;
	addresses: Address[];
	costs: RestaurantCosts;
	rating: number;
	menu: string;
	hours: OpenHours;
}

export interface OrderSchema {
	items: OrderItems[];
	total: number;
	client: string;
	restaurant: string;
	status: ORDER_STATUS;
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
