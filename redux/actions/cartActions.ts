/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/rules-of-hooks */
import { bindActionCreators, Dispatch } from 'redux';
import { CartActionType } from '#declarations/enums/Redux';
import { OrderItem } from '#firebase/declarations/interfaces';
import { CartAction } from '#declarations/types/Redux';
import { useDispatch } from 'react-redux';

// CART ACTIONS
const setLoadingCart = (payload: boolean) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.SET_LOADING, payload });

const addItemCart = (payload: OrderItem) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.ADD_ITEM, payload });

const removeItemCart = (payload: number) => (dispatch: Dispatch<CartAction>) =>
	dispatch({ type: CartActionType.REMOVE_ITEM, payload });

const resetCart = () => (dispatch: Dispatch<CartAction>) => dispatch({ type: CartActionType.RESET });

// useCartActions hook
export const useCartActions = () =>
	bindActionCreators(
		{ setLoadingCart, addItemCart, removeItemCart, resetCart },
		useDispatch<Dispatch<CartAction>>(),
	);
