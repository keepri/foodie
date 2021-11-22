import { CartActionType } from '#declarations/enums/cart';
import { CartState } from '#declarations/interfaces/cart';
import { CartAction } from '#declarations/types/cart';

export const initCartState: CartState = {
	loading: false,
};

export const cartReducer = (
	state: CartState = initCartState,
	{ type, payload }: CartAction
): CartState => {
	switch (type) {
		case CartActionType.SET_LOADING:
			return { ...state, loading: payload };
		default:
			return state;
	}
};
