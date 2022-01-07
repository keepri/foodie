import { CartActionType } from '#declarations/enums/Redux';
import { CartState } from '#declarations/interfaces/Redux';
import { CartAction } from '#declarations/types/Redux';

import { initCartState } from 'utils/misc';

export const cartReducer = (state: CartState = initCartState, action: CartAction): CartState => {
	switch (action.type) {
		// SET_LOADING
		case CartActionType.SET_LOADING: {
			return { ...state, loading: action.payload };
		}

		// ADD_ITEM
		case CartActionType.ADD_ITEM: {
			const item = action.payload,
				items = [...state.items, item],
				total = state.total + item.price;

			return { ...state, items, total };
		}

		// UPDATE_ITEM
		case CartActionType.UPDATE_ITEM: {
			const { update, index } = action.payload;
			const items = state.items;
			items[index] = { ...items[index], ...update };

			return { ...state, items };
		}

		// REMOVE_ITEM
		case CartActionType.REMOVE_ITEM: {
			const item = state.items[action.payload];
			const items = state.items.filter((_, index) => index !== action.payload);
			const total = state.total - item.price;

			return { ...state, items, total };
		}

		// RESET
		case CartActionType.RESET: {
			return initCartState;
		}

		default:
			return state;
	}
};
