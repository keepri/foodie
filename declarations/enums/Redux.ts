export { CartActionType, AuthActionType };

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
}
