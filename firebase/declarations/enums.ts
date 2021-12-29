export enum COLLECTIONS {
	USERS = 'users',
	RESTAURANTS = 'restaurants',
	CLIENTS = 'clients',
	ORDERS = 'orders',
	REVIEWS = 'reviews',
	MENUS = 'menus',
}

export enum RESTAURANT_STATUS {
	CLOSED = 'closed',
	OPEN = 'open',
	UNAVAILABLE = 'unavailable',
}

export enum ORDER_STATUS {
	PENDING = 'pending',
	ACCEPTED = 'accepted',
	COMPLETED = 'completed',
	CANCELED = 'canceled',
}

export enum ACCOUNT_TYPE {
	CLIENT = 'client',
	RESTAURANT = 'restaurant',
	ADMIN = 'admin',
}

export enum MESSAGES {
	SUCCESS = 'Success!',
	ERROR = 'Error!',
	UNAUTHORIZED_NOT_SAME_USER = 'Not same user. Access denied!',
	UNAUTHORIZED_NO_TOKEN = 'No token. Access denied!',
	UNAUTHORIZED_TOKEN = 'Invalid token. Access denied!',
	VERIF_EMAIL_ERROR = 'Server failed to generate verification email!',
	CREATE_ACCOUNT_SUCCESS = 'Successfully created account!',
	CREATE_ACCOUNT_ERROR = 'Server Error! User not created.',
	RESTAURANTS_MANDATORY_FIELDS_ALL = 'Mandatory fields: "uid", "data"!',
	RESTAURANTS_MANDATORY_FIELDS_UID = 'Mandatory fields: "uid"!',
	RESTAURANTS_MANDATORY_FIELDS_DATA = 'Mandatory fields: "data"!',
}

export enum COOKIE_NAMES {
	TOKEN = 'foodie_token',
}
