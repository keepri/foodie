import { ORDER_STATUS, RESTAURANT_STATUS } from './enums';
import { Address, RestaurantCosts, OpenHours, OrderItem, Category } from './interfaces';

export interface ClientSchema {
	name: string;
	phone: string;
	addresses?: Address[];
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
}

export interface OrderSchema {
	items: OrderItem[];
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
