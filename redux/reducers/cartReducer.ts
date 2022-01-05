import { CartActionType } from '#declarations/enums/Redux';
import { CartState } from '#declarations/interfaces/Redux';
import { CartAction } from '#declarations/types/Redux';
import { initCartState } from 'utils/variables';

export const cartReducer = (state: CartState = initCartState, action: CartAction): CartState => {
	switch (action.type) {
		// SET_LOADING
		case CartActionType.SET_LOADING: {
			return { ...state, loading: action.payload };
		}

		// ADD_ITEM
		case CartActionType.ADD_ITEM: {
			const items = state.items,
				item = action.payload,
				total = state.total + item.price;
			items.push(item);

			return { ...state, items, total };
		}

		// REMOVE_ITEM
		case CartActionType.REMOVE_ITEM: {
			const items = state.items.filter((_, index) => index !== action.payload),
				item = state.items[action.payload],
				total = state.total - item.price;

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
