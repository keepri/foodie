/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/rules-of-hooks */
import { bindActionCreators, Dispatch } from 'redux';

import { CartActionType } from '#declarations/enums/cart';
import { CartSetLoadingAction } from '#declarations/interfaces/cart';
// import { CartAction } from '#declarations/types/cart';

// CART ACTIONS
const setCartLoading =
	(payload: boolean) => (dispatch: Dispatch<CartSetLoadingAction>) =>
		dispatch({ type: CartActionType.SET_LOADING, payload });

// useCartActions hook
export const useCartActions = (dispatch: Dispatch) =>
	bindActionCreators({ setCartLoading }, dispatch);
