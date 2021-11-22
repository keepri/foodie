import { CartActionType } from '#declarations/enums/cart';

export interface CartState {
	loading: boolean;
}

export interface CartSetLoadingAction {
	type: CartActionType.SET_LOADING;
	payload: boolean;
}
