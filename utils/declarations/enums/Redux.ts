export { AppActionType, CartActionType, AuthActionType };

enum AppActionType {
	SET_LOADING = 'app_set_loading',
	SET_ON_AUTH_CHANGE_SUB = 'app_set_on_auth_change_sub',
	SET_LANG = 'app_set_lang',
	SET_SELECTED_RESTAURANT = 'app_set_selected_restaurant',
	SET_RESTAURANTS = 'app_set_restaurants',
	TOGGLE_DARK_MODE = 'app_toggle_dark_mode',
	RESET = 'app_reset',
}

enum CartActionType {
	SET_LOADING = 'cart_set_loading',
	SET_CART_RESTAURANT = 'cart_set_restaurant',
	ADD_ITEM = 'cart_add_item',
	REMOVE_ITEM = 'cart_remove_item',
	UPDATE_ITEM = 'cart_update_item',
	UPDATE = 'cart_update',
	RESET = 'cart_reset',
	GET_ITEMS_NUMBER = 'cart_get_items_number',
}

enum AuthActionType {
	SET_LOADING = 'auth_set_loading',
	SET_IS_LOGGED = 'auth_set_is_logged',
	UPDATE_USER = 'auth_update_user',
	RESET = 'auth_reset',
	LOGIN = 'auth_login',
	LOGOUT = 'auth_logout',
}
