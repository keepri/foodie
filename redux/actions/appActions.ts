/* eslint-disable react-hooks/rules-of-hooks */
import { bindActionCreators, Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import { AppActionType } from '#declarations/enums/Redux';
import { AppAction } from '#declarations/types/Redux';
import {
	AppSetLangPayload,
	AppSetLoadingPayload,
	AppSetOnAuthChangeSubPayload,
} from '#declarations/interfaces/Redux';

export { appActions };

const setLoadingApp = (payload: AppSetLoadingPayload) => (dispatch: Dispatch<AppAction>) =>
	dispatch({ type: AppActionType.SET_LOADING, payload });

const setOnAuthChangeSubApp = (payload: AppSetOnAuthChangeSubPayload) => (dispatch: Dispatch<AppAction>) =>
	dispatch({ type: AppActionType.SET_ON_AUTH_CHANGE_SUB, payload });

const setLangApp = (payload: AppSetLangPayload) => (dispatch: Dispatch<AppAction>) =>
	dispatch({ type: AppActionType.SET_LANG, payload });

const toggleDarkModeApp = () => (dispatch: Dispatch<AppAction>) =>
	dispatch({ type: AppActionType.TOGGLE_DARK_MODE });

const resetStateApp = () => (dispatch: Dispatch<AppAction>) => dispatch({ type: AppActionType.RESET });

const appActions = () =>
	bindActionCreators(
		{ setLoadingApp, setLangApp, toggleDarkModeApp, resetStateApp, setOnAuthChangeSubApp },
		useDispatch<Dispatch<AppAction>>(),
	);
