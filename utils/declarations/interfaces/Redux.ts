import { CURRENCY } from '#declarations/enums/Currency';
import { Langs } from '#declarations/enums/Langs';
import { CartActionType, AuthActionType, AppActionType } from '#declarations/enums/Redux';
import { SETTINGS_ROUTES } from '#declarations/enums/SettingsRoutes';
import { MenuItem } from '#firebase/declarations/interfaces';
import { ClientSchema, OrderSchema, RestaurantSchema, UserType } from '#firebase/declarations/schemas';
import { Unsubscribe } from 'firebase/auth';

// --- STATE ---
export interface SettingsPageAppState {
	user?: UserType;
	onRoute?: SETTINGS_ROUTES;
}
export interface AppState {
	currency: CURRENCY;
	loading: boolean;
	appLang: Langs;
	restaurants?: RestaurantSchema[];
	selectedRestaurant: RestaurantSchema | null;
	settingsPage: SettingsPageAppState;
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
export type AppSetSelectedRestaurantPayload = RestaurantSchema | null;
export type AppSetRestaurantsPayload = RestaurantSchema[];
export type AppSetSettingsPagePayload = Partial<SettingsPageAppState>;
export type AuthSetLoadingPayload = boolean;
export type AuthSetIsLoggedPayload = boolean;
export type AuthUpdateUserPayload = Partial<ClientSchema>;
export type AuthLoginPayload = { token: string; user?: ClientSchema };
export type CartSetLoadingPayload = boolean;
export type CartSetRestaurantUidPayload = string;
export type CartAddItemPayload = MenuItem;
export type CartRemoveItemPayload = number;
export type CartUpdateItemPayload = { index: number; update: Partial<MenuItem> };
export type CartUpdatePayload = Partial<OrderSchema>;

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

export interface AppSetSettingsPageAction {
	type: AppActionType.SET_SETTINGS_PAGE;
	payload: AppSetSettingsPagePayload;
}

export interface AppSetSelectedRestaurantAction {
	type: AppActionType.SET_SELECTED_RESTAURANT;
	payload: AppSetSelectedRestaurantPayload;
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

export interface CartSetRestaurantUidAction {
	type: CartActionType.SET_CART_RESTAURANT;
	payload: CartSetRestaurantUidPayload;
}

export interface CartAddItemAction {
	type: CartActionType.ADD_ITEM;
	payload: CartAddItemPayload;
}

export interface CartUpdateItemAction {
	type: CartActionType.UPDATE_ITEM;
	payload: CartUpdateItemPayload;
}

export interface CartUpdateAction {
	type: CartActionType.UPDATE;
	payload: CartUpdatePayload;
}

export interface CartRemoveItemAction {
	type: CartActionType.REMOVE_ITEM;
	payload: CartRemoveItemPayload;
}

export interface CartResetAction {
	type: CartActionType.RESET;
}

export interface CartGetItemsNumberAction {
	type: CartActionType.GET_ITEMS_NUMBER;
}
