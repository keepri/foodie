import { CURRENCY } from '#declarations/enums/Currency';
import { Langs } from '#declarations/enums/Langs';
import { CartActionType, AuthActionType, AppActionType } from '#declarations/enums/Redux';
import { MenuItem } from '#firebase/declarations/interfaces';
import { ClientSchema, OrderSchema, RestaurantSchema } from '#firebase/declarations/schemas';
import { Unsubscribe } from 'firebase/auth';

// --- STATE ---
export interface AppState {
	currency: CURRENCY;
	loading: boolean;
	appLang: Langs;
	restaurants?: RestaurantSchema[];
	selectedRestaurant: RestaurantSchema | null;
	unsubscribeOnAuthChange?: Unsubscribe;
}

export interface AuthState {
	loading: boolean;
	isLogged: boolean;
	token: string | undefined;
	user: ClientSchema;
}

export interface CartState extends OrderSchema {
	loading: boolean;
}

// --- PAYLOADS ---
export type AppSetLoadingPayload = boolean;
export type AppSetOnAuthChangeSubPayload = Unsubscribe;
export type AppSetLangPayload = Langs;
export type AppSetRestaurantsPayload = RestaurantSchema[];
export type AuthSetLoadingPayload = boolean;
export type AuthSetIsLoggedPayload = boolean;
export type AuthUpdateUserPayload = Partial<ClientSchema>;
export type AuthLoginPayload = { token: string; user?: ClientSchema };
export type CartSetLoadingPayload = boolean;
export type CartSetRestaurantPayload = string;
export type CartAddItemPayload = MenuItem;
export type CartRemoveItemPayload = number;
export type CartUpdateItemPayload = { index: number; update: Partial<MenuItem> };

// --- ACTIONS ---
// APP
export interface AppSetLoadingAction {
	type: AppActionType.SET_LOADING;
	payload: AppSetLoadingPayload;
}

export interface AppSetOnAuthChangeSubAction {
	type: AppActionType.SET_ON_AUTH_CHANGE_SUB;
	payload: AppSetOnAuthChangeSubPayload;
}

export interface AppSetLangAction {
	type: AppActionType.SET_LANG;
	payload: AppSetLangPayload;
}

export interface AppSetRestaurantsAction {
	type: AppActionType.SET_RESTAURANTS;
	payload: AppSetRestaurantsPayload;
}

export interface AppToggleDarkModeAction {
	type: AppActionType.TOGGLE_DARK_MODE;
}

export interface AppResetAction {
	type: AppActionType.RESET;
}

// AUTH
export interface AuthSetLoadingAction {
	type: AuthActionType.SET_LOADING;
	payload: AuthSetLoadingPayload;
}

export interface AuthSetIsLoggedAction {
	type: AuthActionType.SET_IS_LOGGED;
	payload: AuthSetIsLoggedPayload;
}

export interface AuthUpdateUserAction {
	type: AuthActionType.UPDATE_USER;
	payload: AuthUpdateUserPayload;
}

export interface AuthLoginAction {
	type: AuthActionType.LOGIN;
	payload: AuthLoginPayload;
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
	payload: CartSetLoadingPayload;
}

export interface CartSetRestaurantAction {
	type: CartActionType.SET_CART_RESTAURANT;
	payload: CartSetRestaurantPayload;
}

export interface CartAddItemAction {
	type: CartActionType.ADD_ITEM;
	payload: CartAddItemPayload;
}

export interface CartUpdateItemAction {
	type: CartActionType.UPDATE_ITEM;
	payload: CartUpdateItemPayload;
}

export interface CartRemoveItemAction {
	type: CartActionType.REMOVE_ITEM;
	payload: CartRemoveItemPayload;
}

export interface CartResetAction {
	type: CartActionType.RESET;
}
