/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/rules-of-hooks */
import { bindActionCreators, Dispatch } from 'redux';
import { AuthActionType } from '#declarations/enums/Redux';
import { AuthAction } from '#declarations/types/Redux';
import { useDispatch } from 'react-redux';
import { authRef } from '#firebase/initClientApp';
import { signOut } from 'firebase/auth';
import axios from 'axios';
import {
	AuthLoginPayload,
	AuthSetIsLoggedPayload,
	AuthSetLoadingPayload,
	AuthUpdateUserPayload,
} from '#declarations/interfaces/Redux';
import { URLS } from '#utils/misc';

export { authActions };

// AUTH ACTIONS
const setLoadingAuth = (payload: AuthSetLoadingPayload) => (dispatch: Dispatch<AuthAction>) =>
	dispatch({ type: AuthActionType.SET_LOADING, payload });

const setIsLoggedAuth = (payload: AuthSetIsLoggedPayload) => (dispatch: Dispatch<AuthAction>) =>
	dispatch({ type: AuthActionType.SET_IS_LOGGED, payload });

const updateUserAuth = (payload: AuthUpdateUserPayload) => (dispatch: Dispatch<AuthAction>) =>
	dispatch({ type: AuthActionType.UPDATE_USER, payload });

const loginUserAuth = (payload: AuthLoginPayload) => (dispatch: Dispatch<AuthAction>) =>
	dispatch({ type: AuthActionType.LOGIN, payload });

const logoutUserAuth = () => (dispatch: Dispatch<AuthAction>) => {
	axios
		.post(URLS.API_LOGOUT, {}, { withCredentials: true })
		.then(res => console.log(res.data.message))
		.catch(err => console.warn('Logout endpoint failed with:', err));

	signOut(authRef)
		.then(_ => console.log('Successfully logged out!'))
		.catch(({ message }) => console.warn(message));

	return dispatch({ type: AuthActionType.LOGOUT });
};

const resetAuth = () => (dispatch: Dispatch<AuthAction>) => dispatch({ type: AuthActionType.RESET });

const authActions = () =>
	bindActionCreators(
		{ setLoadingAuth, setIsLoggedAuth, loginUserAuth, logoutUserAuth, resetAuth, updateUserAuth },
		useDispatch<Dispatch<AuthAction>>(),
	);
