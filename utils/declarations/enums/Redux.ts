export { AppActionType, CartActionType, AuthActionType };

enum AppActionType {
	SET_LOADING = 'app_set_loading',
	SET_LANG = 'app_set_lang',
	TOGGLE_DARK_MODE = 'app_toggle_dark_mode',
	RESET = 'app_reset',
}

enum CartActionType {
	SET_LOADING = 'cart_set_loading',
	ADD_ITEM = 'cart_add_item',
	REMOVE_ITEM = 'cart_remove_item',
	UPDATE_ITEM = 'cart_update_item',
	RESET = 'cart_reset',
}

enum AuthActionType {
	SET_LOADING = 'auth_set_loading',
	SET_IS_LOGGED = 'auth_set_is_logged',
	UPDATE_USER = 'auth_update_user',
	RESET = 'auth_reset',
	LOGIN = 'auth_login',
	LOGOUT = 'auth_logout',
}
