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

		// SET_CART_RESTAURANT
		case CartActionType.SET_CART_RESTAURANT: {
			return { ...state, restaurant: action.payload };
		}

		// ADD_ITEM
		case CartActionType.ADD_ITEM: {
			const itemToAdd = action.payload;
			const stateItems = state.items;
			const existItem = stateItems.find(item => item.name === itemToAdd.name);

			const items = existItem
				? stateItems.map(item => (item.name === itemToAdd.name ? { ...item, quantity: item.quantity + 1 } : item))
				: [...stateItems, itemToAdd];

			const total = state.total + itemToAdd.price;

			return { ...state, items, total };
		}

		// UPDATE_ITEM
		case CartActionType.UPDATE_ITEM: {
			const { update, index } = action.payload;
			// get the cart items from state
			const items = state.items;
			// get quantity of item
			const itemQuantity = items[index].quantity;
			// set new cart total
			const total =
				'quantity' in update && update.quantity
					? update.quantity < itemQuantity
						? state.total - items[index].price
						: state.total + items[index].price
					: state.total;

			// update the item
			items[index] = { ...items[index], ...update };

			return { ...state, items, total };
		}

		// UPDATE
		case CartActionType.UPDATE: {
			return { ...state, ...action.payload };
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
