/* eslint-disable react-hooks/rules-of-hooks */
import { bindActionCreators, Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import { AppActionType } from '#declarations/enums/Redux';
import { AppAction } from '#declarations/types/Redux';
import { Langs } from '#declarations/enums/Langs';

export { appActions };

const setLoadingApp = (payload: boolean) => (dispatch: Dispatch<AppAction>) =>
	dispatch({ type: AppActionType.SET_LOADING, payload });

const setLangApp = (payload: Langs) => (dispatch: Dispatch<AppAction>) =>
	dispatch({ type: AppActionType.SET_LANG, payload });

const toggleDarkModeApp = () => (dispatch: Dispatch<AppAction>) =>
	dispatch({ type: AppActionType.TOGGLE_DARK_MODE });

const appActions = () =>
	bindActionCreators({ setLoadingApp, setLangApp, toggleDarkModeApp }, useDispatch<Dispatch<AppAction>>());
