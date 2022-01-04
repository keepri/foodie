/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/rules-of-hooks */
import { bindActionCreators, Dispatch } from 'redux';
import { AuthActionType } from '#declarations/enums/Redux';
import { AuthAction } from '#declarations/types/redux';

// CART ACTIONS
const setLoadingAuth = (payload: boolean) => (dispatch: Dispatch<AuthAction>) =>
	dispatch({ type: AuthActionType.SET_LOADING, payload });

// CART ACTIONS
const setIsLoggedAuth = (payload: boolean) => (dispatch: Dispatch<AuthAction>) =>
	dispatch({ type: AuthActionType.SET_IS_LOGGED, payload });

const resetAuth = () => (dispatch: Dispatch<AuthAction>) => dispatch({ type: AuthActionType.RESET });

// useCartActions hook
export const useAuthActions = (dispatch: Dispatch) =>
	bindActionCreators({ setLoadingAuth, setIsLoggedAuth, resetAuth }, dispatch);
