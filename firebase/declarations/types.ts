import { UserRecord } from 'firebase-admin/lib/auth/user-record';
import { ClientSchema, MenuSchema, OrderSchema, RestaurantSchema, ReviewSchema } from './schemas';
// import { ACCOUNT_TYPE } from './enums';

export type RequestError = {
	message: string;
	code?: string;
	errorFields?: string[];
};

// LOGIN ENDPOINT
export type LoginSuccess = { user: ClientSchema; message: string };
export type LoginReturnType = LoginSuccess | RequestError;

// REGISTER ENDPOINT
export type RegisterSuccess = { user: UserRecord; verificationEmail: string; message: string };
export type RegisterReturnType = RegisterSuccess | RequestError;

// LOGOUT ENDPOINT
export type LogoutSuccess = { message: string };
export type LogoutReturnType = LogoutSuccess | RequestError;

// RESTAURANTS ENDPOINT
export type RestaurantSuccess = { restaurant: RestaurantSchema };
export type RestaurantsSuccess = Partial<{ restaurants: RestaurantSchema[]; restaurant: RestaurantSchema }>;
export type RestaurantReturnType = RestaurantSuccess | RequestError;
export type RestaurantsReturnType = RestaurantsSuccess | RequestError;
export type RestaurantsRequestBody = {
	uid?: string;
	data?: Partial<RestaurantSchema>;
	tokenUid?: string;
};

// ORDERS ENDPOINT
export type OrdersSuccess = { orders?: OrderSchema[]; order?: OrderSchema; orderUid?: string };
export type OrdersReturnType = OrdersSuccess | RequestError;
export type OrdersRequestBody = {
	uid?: string;
	data?: OrderSchema;
	tokenUid?: string;
	// accountType?: ACCOUNT_TYPE;
};

// CLIENTS ENDPOINT
export type ClientsSuccess = { client: ClientSchema };
export type ClientsReturnType = ClientsSuccess | RequestError;
export type ClientsRequestBody = { data?: ClientSchema; tokenUid?: string };

// REVIEWS ENDPOINT
export type ReviewsSuccess = { reviews: ReviewSchema[] };
export type ReviewsReturnType = ReviewsSuccess | RequestError;
export type ReviewsRequestBody = { uid?: string; data?: ReviewSchema; tokenUid?: string };

// MENUS ENDPOINT
export type MenusSuccess = { menu: MenuSchema };
export type MenusReturnType = MenusSuccess | RequestError;
export type MenusRequestBody = { uid?: string; data?: MenuSchema; tokenUid?: string };
