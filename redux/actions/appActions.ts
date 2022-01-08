/* eslint-disable react-hooks/rules-of-hooks */
import { bindActionCreators, Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import { AppActionType } from '#declarations/enums/Redux';
import { AppAction } from '#declarations/types/Redux';
import {
	AppSetLangPayload,
	AppSetLoadingPayload,
	AppSetOnAuthChangeSubPayload,
	AppSetRestaurantsPayload,
} from '#declarations/interfaces/Redux';
import { RestaurantSchema } from '#firebase/declarations/schemas';
import axios from 'axios';
import { URLS } from 'utils/misc';

export { appActions };

const setLoadingApp = (payload: AppSetLoadingPayload) => (dispatch: Dispatch<AppAction>) =>
	dispatch({ type: AppActionType.SET_LOADING, payload });

const setOnAuthChangeSubApp = (payload: AppSetOnAuthChangeSubPayload) => (dispatch: Dispatch<AppAction>) =>
	dispatch({ type: AppActionType.SET_ON_AUTH_CHANGE_SUB, payload });

const setLangApp = (payload: AppSetLangPayload) => (dispatch: Dispatch<AppAction>) =>
	dispatch({ type: AppActionType.SET_LANG, payload });

const setRestaurantsApp = (payload: AppSetRestaurantsPayload) => (dispatch: Dispatch<AppAction>) =>
	dispatch({ type: AppActionType.SET_RESTAURANTS, payload });

const toggleDarkModeApp = () => (dispatch: Dispatch<AppAction>) =>
	dispatch({ type: AppActionType.TOGGLE_DARK_MODE });

const loadRestaurants = () => async (dispatch: Dispatch<AppAction>) => {
	let payload: RestaurantSchema[] = [];

	const { status, data } = await axios.get(URLS.API_GET_RESTAURANTS);

	status === 200 && (payload = data);

	dispatch({ type: AppActionType.SET_RESTAURANTS, payload });
};

const resetStateApp = () => (dispatch: Dispatch<AppAction>) => dispatch({ type: AppActionType.RESET });

const appActions = () =>
	bindActionCreators(
		{
			setLoadingApp,
			setLangApp,
			toggleDarkModeApp,
			resetStateApp,
			setOnAuthChangeSubApp,
			setRestaurantsApp,
			loadRestaurants,
		},
		useDispatch<Dispatch<AppAction>>(),
	);
