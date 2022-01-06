import { Langs } from '#declarations/enums/Langs';
import { CartActionType, AuthActionType, AppActionType } from '#declarations/enums/Redux';
import { OrderItem } from '#firebase/declarations/interfaces';
import { OrderSchema } from '#firebase/declarations/schemas';

// --- STATE ---
export interface AppState {
	loading: boolean;
	appLang: Langs;
}

export interface AuthState {
	loading: boolean;
	isLogged: boolean;
	token: string | undefined;
}

export interface CartState extends OrderSchema {
	loading: boolean;
}

// --- ACTIONS ---
// APP
export interface AppSetLoadingAction {
	type: AppActionType.SET_LOADING;
	payload: boolean;
}

export interface AppSetLangAction {
	type: AppActionType.SET_LANG;
	payload: Langs;
}

export interface AppToggleDarkModeAction {
	type: AppActionType.TOGGLE_DARK_MODE;
}

// AUTH
export interface AuthSetLoadingAction {
	type: AuthActionType.SET_LOADING;
	payload: boolean;
}

export interface AuthSetIsLoggedAction {
	type: AuthActionType.SET_IS_LOGGED;
	payload: boolean;
}

export interface AuthLoginAction {
	type: AuthActionType.LOGIN;
	payload: string;
}

export interface AuthLogoutAction {
	type: AuthActionType.LOGOUT;
}

export interface AuthResetAction {
	type: AuthActionType.RESET;
}

// CART
export interface CartSetLoadingAction {
	type: CartActionType.SET_LOADING;
	payload: boolean;
}

export interface CartAddItemAction {
	type: CartActionType.ADD_ITEM;
	payload: OrderItem;
}

export interface CartRemoveItemAction {
	type: CartActionType.REMOVE_ITEM;
	payload: number;
}

export interface CartResetAction {
	type: CartActionType.RESET;
}
