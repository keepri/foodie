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
	CartUpdatePayload,
} from '#declarations/interfaces/Redux';
import { MENU_ITEM_STATUS } from '#firebase/declarations/enums';
// import { getMenuItemStatus } from '#firebase/client-functions/get';

export { cartActions };

// CART ACTIONS
const setLoadingCart = (payload: CartSetLoadingPayload) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.SET_LOADING, payload });

const setRestaurantCart = (payload: CartSetRestaurantPayload) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.SET_CART_RESTAURANT, payload });

const addItemCart = (payload: CartAddItemPayload) => async (dispatch: Dispatch<CartAction>) => {
	// const menuItemUid = payload.uid;
	const menuItemStatus = payload.status;

	// const menuItemAvailable = await getMenuItemStatus(menuItemUid);
	const menuItemAvailable = menuItemStatus === MENU_ITEM_STATUS.AVAILABLE;

	// TODO handle menu item not available anymore
	if (!menuItemAvailable) return;

	return dispatch({ type: CartActionType.ADD_ITEM, payload });
};

const removeItemCart = (payload: CartRemoveItemPayload) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.REMOVE_ITEM, payload });

const updateItemCart = (payload: CartUpdateItemPayload) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.UPDATE_ITEM, payload });

const updateCart = (payload: CartUpdatePayload) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.UPDATE, payload });

const resetCart = () => (dispatch: Dispatch<CartAction>) => dispatch({ type: CartActionType.RESET });

const cartActions = () =>
	bindActionCreators(
		{ setLoadingCart, setRestaurantCart, addItemCart, removeItemCart, resetCart, updateItemCart, updateCart },
		useDispatch<Dispatch<CartAction>>(),
	);
