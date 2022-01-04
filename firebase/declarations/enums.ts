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

export enum COOKIE_NAMES {
	TOKEN = 'foodie_token',
}

export enum MESSAGES {
	// GENERIC
	SUCCESS = 'Success!',
	ERROR = 'Error!',
	NOT_FOUND = 'Not found!',

	// ACCOUNTS
	VERIF_EMAIL_ERROR = 'Account created! Server failed to generate verification email!',
	CREATE_ACCOUNT_SUCCESS = 'Successfully created account!',
	CREATE_ACCOUNT_ERROR = 'Server Error! User not created.',

	// SECURITY
	UNAUTHORIZED_NOT_SAME_USER = 'Not same user. Access denied!',
	UNAUTHORIZED_NO_TOKEN = 'No token. Access denied!',
	UNAUTHORIZED_TOKEN = 'Invalid token. Access denied!',

	// RESTAURANTS
	RESTAURANTS_MANDATORY_FIELDS_ALL = 'Mandatory fields: "uid", "data"!',
	RESTAURANTS_MANDATORY_FIELDS_UID = 'Mandatory fields: "uid"!',
	RESTAURANTS_MANDATORY_FIELDS_DATA = 'Mandatory fields: "data"!',

	// ORDERS
	ORDERS_MANDATORY_FIELDS_ALL = 'Mandatory fields: "uid", "accountType", "data"!',
	ORDERS_MANDATORY_FIELDS_UID_ACCOUNT_TYPE = 'Mandatory fields: "uid", "accountType"!',
	ORDERS_MANDATORY_FIELDS_UID_DATA = 'Mandatory fields: "uid", "data"!',
	ORDERS_MANDATORY_FIELDS_DATA = 'Mandatory fields: "data"!',

	// CLIENTS
	CLIENTS_MANDATORY_FIELDS_DATA = 'Mandatory fields: "data"!',

	// REVIEWS
	REVIEWS_MDANDATORY_FIELDS_UID = 'Mandatory fields: "uid"!',
	REVIEWS_MDANDATORY_FIELDS_DATA = 'Mandatory fields: "data"!',

	// MENUS
	MENUS_MDANDATORY_FIELDS_UID = 'Mandatory fields: "uid"!',
	MENUS_MDANDATORY_FIELDS_DATA = 'Mandatory fields: "data"!',
}
