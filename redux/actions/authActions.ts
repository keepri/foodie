/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/rules-of-hooks */
import { bindActionCreators, Dispatch } from 'redux';
import { AuthActionType } from '#declarations/enums/Redux';
import { AuthAction } from '#declarations/types/Redux';
import { useDispatch } from 'react-redux';
import { authRef } from '#firebase/initClientApp';
import { signOut } from 'firebase/auth';
import axios from 'axios';

// AUTH ACTIONS
const setLoadingAuth = (payload: boolean) => (dispatch: Dispatch<AuthAction>) =>
	dispatch({ type: AuthActionType.SET_LOADING, payload });

const setIsLoggedAuth = (payload: boolean) => (dispatch: Dispatch<AuthAction>) =>
	dispatch({ type: AuthActionType.SET_IS_LOGGED, payload });

const loginUserAuth = (payload: string) => (dispatch: Dispatch<AuthAction>) =>
	dispatch({ type: AuthActionType.LOGIN, payload });

const logoutUserAuth = () => (dispatch: Dispatch<AuthAction>) => {
	axios.defaults.headers.common['Authorization'] = '';

	signOut(authRef)
		.then(_ => console.log('Successfully logged out!'))
		.catch(({ message }) => console.warn(message));

	return dispatch({ type: AuthActionType.LOGOUT });
};

const resetAuth = () => (dispatch: Dispatch<AuthAction>) => dispatch({ type: AuthActionType.RESET });

// useAuthActions hook
export const useAuthActions = () =>
	bindActionCreators(
		{ setLoadingAuth, setIsLoggedAuth, loginUserAuth, logoutUserAuth, resetAuth },
		useDispatch<Dispatch<AuthAction>>(),
	);
