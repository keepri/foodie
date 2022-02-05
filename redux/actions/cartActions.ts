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
	CartSetRestaurantUidPayload,
	CartUpdateItemPayload,
	CartUpdatePayload,
} from '#declarations/interfaces/Redux';

export { cartActions };

// CART ACTIONS
const setLoadingCart = (payload: CartSetLoadingPayload) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.SET_LOADING, payload });

const setRestaurantUidCart = (payload: CartSetRestaurantUidPayload) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.SET_CART_RESTAURANT, payload });

const addItemCart =
	(payload: CartAddItemPayload, quantity: number) => async (dispatch: Dispatch<CartAction>) => {
		payload.quantity = quantity;

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
		{
			setLoadingCart,
			setRestaurantUidCart,
			addItemCart,
			removeItemCart,
			resetCart,
			updateItemCart,
			updateCart,
		},
		useDispatch<Dispatch<CartAction>>(),
	);
