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

export { cartActions };

// CART ACTIONS
const setLoadingCart = (payload: CartSetLoadingPayload) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.SET_LOADING, payload });

const setRestaurantCart = (payload: CartSetRestaurantPayload) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.SET_CART_RESTAURANT, payload });

const addItemCart = (payload: CartAddItemPayload) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.ADD_ITEM, payload });

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
