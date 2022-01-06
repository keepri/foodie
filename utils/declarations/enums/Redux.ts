export { AppActionType, CartActionType, AuthActionType };

enum AppActionType {
	SET_LOADING,
	SET_LANG,
	TOGGLE_DARK_MODE,
	RESET,
}

enum CartActionType {
	SET_LOADING,
	ADD_ITEM,
	REMOVE_ITEM,
	UPDATE_ITEM,
	RESET,
}

enum AuthActionType {
	SET_LOADING,
	SET_IS_LOGGED,
	UPDATE_USER,
	RESET,
	LOGIN,
	LOGOUT,
}
