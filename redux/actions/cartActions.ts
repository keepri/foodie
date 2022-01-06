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
} from '#declarations/interfaces/Redux';

export { cartActions };

// CART ACTIONS
const setLoadingCart = (payload: CartSetLoadingPayload) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.SET_LOADING, payload });

const addItemCart = (payload: CartAddItemPayload) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.ADD_ITEM, payload });

const removeItemCart = (payload: CartRemoveItemPayload) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.REMOVE_ITEM, payload });

const resetCart = () => (dispatch: Dispatch<CartAction>) => dispatch({ type: CartActionType.RESET });

const cartActions = () =>
	bindActionCreators(
		{ setLoadingCart, addItemCart, removeItemCart, resetCart },
		useDispatch<Dispatch<CartAction>>(),
	);
