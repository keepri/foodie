import { CartActionType } from '#declarations/enums/Redux';
import { OrderItem } from '#firebase/declarations/interfaces';
import { OrderSchema } from '#firebase/declarations/schemas';
import { AuthActionType } from '#declarations/enums/Redux';

// AUTH
export interface AuthState {
	loading: boolean;
	isLogged: boolean;
}

export interface AuthSetLoadingAction {
	type: AuthActionType.SET_LOADING;
	payload: boolean;
}

export interface AuthSetIsLoggedAction {
	type: AuthActionType.SET_IS_LOGGED;
	payload: boolean;
}

export interface AuthResetAction {
	type: AuthActionType.RESET;
}

// CART
export interface CartState extends OrderSchema {
	loading: boolean;
}

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
