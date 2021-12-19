export interface AddOptions {
	returnDoc?: boolean;
}

export interface CategoryItem {
	name: string;
	description: string;
	price: number;
	photo?: string;
}

export interface Category {
	name: string;
	items: CategoryItem[];
}

export interface OpenHours {
	mon: string;
	tue: string;
	wed: string;
	thu: string;
	fri: string;
	sat: string;
	sun: string;
}

export interface RestaurantCosts {
	packaging: number;
	delivery: number;
	minOrder: number;
}

export interface Address {
	country: string;
	county: string;
	city: string;
	street: string;
	number: number;
	phone: string;
	alias?: string;
	extra?: string;
}

export interface OrderItems {
	name: string;
	description: string;
	quantity: number;
	price: number;
	info?: string;
}
