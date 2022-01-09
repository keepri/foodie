/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/rules-of-hooks */
import { bindActionCreators, Dispatch } from 'redux';
import { CartActionType } from '#declarations/enums/Redux';
import { CartAction } from '#declarations/types/Redux';
import { useDispatch } from 'react-redux';
import {
	CartAddItemPayload,
	CartRemoveItemPayload,
	CartSetLoadingPayload,
	CartSetRestaurantPayload,
	CartUpdateItemPayload,
} from '#declarations/interfaces/Redux';
import { getMenuItemStatus } from '#firebase/client-functions/get';

export { cartActions };

// CART ACTIONS
const setLoadingCart = (payload: CartSetLoadingPayload) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.SET_LOADING, payload });

const setRestaurantCart = (payload: CartSetRestaurantPayload) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.SET_CART_RESTAURANT, payload });

const addItemCart = (payload: CartAddItemPayload) => async (dispatch: Dispatch<CartAction>) => {
	const menuItemUid = payload.uid;

	const menuItemAvailable = await getMenuItemStatus(menuItemUid);

	// TODO handle menu item not available anymore
	if (!menuItemAvailable) return;

	return dispatch({ type: CartActionType.ADD_ITEM, payload });
};

const removeItemCart = (payload: CartRemoveItemPayload) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.REMOVE_ITEM, payload });

const updateCartItem = (payload: CartUpdateItemPayload) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.UPDATE_ITEM, payload });

const resetCart = () => (dispatch: Dispatch<CartAction>) => dispatch({ type: CartActionType.RESET });

const cartActions = () =>
	bindActionCreators(
		{ setLoadingCart, setRestaurantCart, addItemCart, removeItemCart, resetCart, updateCartItem },
		useDispatch<Dispatch<CartAction>>(),
	);
