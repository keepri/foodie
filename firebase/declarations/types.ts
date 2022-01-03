import { UserRecord } from 'firebase-admin/lib/auth/user-record';
import { ACCOUNT_TYPE } from './enums';
import { ClientSchema, MenuSchema, OrderSchema, RestaurantSchema, ReviewSchema } from './schemas';

export type RequestError = {
	message: string;
	code?: string;
	errorFields?: string[];
};

// REGISTER ENDPOINT
export type RegisterReturnType = { user?: UserRecord; verificationEmail?: string } | RequestError;

// RESTAURANTS ENDPOINT
export type RestaurantsReturnType =
	| { restaurants?: RestaurantSchema[]; restaurant?: RestaurantSchema }
	| RequestError;
export type RestaurantsRequestBody = {
	uid?: string;
	data?: Partial<RestaurantSchema>;
	tokenUid?: string;
};

// ORDERS ENDPOINT
export type OrdersReturnType = { orders?: OrderSchema[]; order?: OrderSchema } | RequestError;
export type OrdersRequestBody = {
	uid?: string;
	data?: OrderSchema;
	accountType?: ACCOUNT_TYPE;
	tokenUid?: string;
};

// CLIENTS ENDPOINT
export type ClientsReturnType = { client?: ClientSchema } | RequestError;
export type ClientsRequestBody = { data?: ClientSchema; tokenUid?: string };

// REVIEWS ENDPOINT
export type ReviewsReturnType = { reviews?: ReviewSchema[] } | RequestError;
export type ReviewsRequestBody = { uid?: string; data?: ReviewSchema; tokenUid?: string };

// MENUS ENDPOINT
export type MenusReturnType = { menu?: MenuSchema } | RequestError;
export type MenusRequestBody = { uid?: string; data?: MenuSchema; tokenUid?: string };
