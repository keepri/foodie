import { LS } from '#declarations/enums/LocalStorage';
import { CartActionType } from '#declarations/enums/Redux';
import { CartState } from '#declarations/interfaces/Redux';
import { CartAction } from '#declarations/types/Redux';

import { initCartState, isClientSide } from 'utils/misc';

const localSavedCart = isClientSide && localStorage.getItem(LS.CART);

export const cartReducer = (
	state: CartState = localSavedCart ? JSON.parse(localSavedCart) : initCartState,
	action: CartAction,
): CartState => {
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
			const existItem = stateItems.find(item => item.uid === itemToAdd.uid);

			const items = existItem
				? stateItems.map(item => (item.name === itemToAdd.name ? { ...item, quantity: item.quantity + 1 } : item))
				: [...stateItems, itemToAdd];

			const total = state.total + itemToAdd.price;

			const cartState = { ...state, items, total };

			localStorage.setItem(LS.CART, JSON.stringify(cartState));

			return cartState;
		}

		// UPDATE_ITEM
		case CartActionType.UPDATE_ITEM: {
			const { update, index } = action.payload;
			// get the cart items from state
			const items = state.items;

			if (update.quantity !== undefined) {
				// get quantity of item
				const itemQuantity = items[index].quantity;

				// set new cart total
				state.total =
					'quantity' in update && update.quantity
						? update.quantity < itemQuantity
							? state.total - items[index].price
							: state.total + items[index].price
						: state.total;
			}

			// update the item
			items[index] = { ...items[index], ...update };

			const cartState = { ...state, items };

			localStorage.setItem(LS.CART, JSON.stringify(cartState));

			return cartState;
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
			const cartState = { ...state, items, total };

			items.length ? localStorage.setItem(LS.CART, JSON.stringify(cartState)) : localStorage.removeItem(LS.CART);

			return cartState;
		}

		// RESET
		case CartActionType.RESET: {
			localStorage.removeItem(LS.CART);

			return initCartState;
		}

		default:
			return state;
	}
};
