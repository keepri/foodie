export { AppActionType, CartActionType, AuthActionType };

enum AppActionType {
	SET_LOADING,
	SET_LANG,
	TOGGLE_DARK_MODE,
}

enum CartActionType {
	SET_LOADING,
	ADD_ITEM,
	REMOVE_ITEM,
	RESET,
}

enum AuthActionType {
	SET_LOADING,
	SET_IS_LOGGED,
	RESET,
	LOGIN,
	LOGOUT,
}
