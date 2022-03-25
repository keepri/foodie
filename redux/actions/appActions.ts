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
	AppSetSelectedRestaurantPayload,
} from '#declarations/interfaces/Redux';
import { RestaurantSchema } from '#firebase/declarations/schemas';
import axios, { AxiosResponse } from 'axios';
import { URLS } from '#utils/misc';
import { RestaurantsSuccess } from '#firebase/declarations/types';

export { appActions };

const setLoadingApp = (payload: AppSetLoadingPayload) => (dispatch: Dispatch<AppAction>) =>
	dispatch({ type: AppActionType.SET_LOADING, payload });

const setOnAuthChangeSubApp = (payload: AppSetOnAuthChangeSubPayload) => (dispatch: Dispatch<AppAction>) =>
	dispatch({ type: AppActionType.SET_ON_AUTH_CHANGE_SUB, payload });

const setLangApp = (payload: AppSetLangPayload) => (dispatch: Dispatch<AppAction>) =>
	dispatch({ type: AppActionType.SET_LANG, payload });

const setSelectedRestaurantApp =
	(payload: AppSetSelectedRestaurantPayload) => (dispatch: Dispatch<AppAction>) =>
		dispatch({ type: AppActionType.SET_SELECTED_RESTAURANT, payload });

const setRestaurantsApp = (payload: AppSetRestaurantsPayload) => (dispatch: Dispatch<AppAction>) =>
	dispatch({ type: AppActionType.SET_RESTAURANTS, payload });

const toggleDarkModeApp = () => (dispatch: Dispatch<AppAction>) =>
	dispatch({ type: AppActionType.TOGGLE_DARK_MODE });

const loadRestaurants = () => async (dispatch: Dispatch<AppAction>) => {
	try {
		let payload: RestaurantSchema[] = [];

		const { data }: AxiosResponse<RestaurantsSuccess> = await axios.get(URLS.API_GET_RESTAURANTS);

		if (!data?.restaurants) {
			dispatch({ type: AppActionType.SET_RESTAURANTS, payload: [] });
			return;
		}

		payload = data.restaurants;
		dispatch({ type: AppActionType.SET_RESTAURANTS, payload });
	} catch ({ message }) {
		console.error('loadRestaurants:', message);
		dispatch({ type: AppActionType.SET_RESTAURANTS, payload: [] });
	}
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
			setSelectedRestaurantApp,
			setRestaurantsApp,
			loadRestaurants,
		},
		useDispatch<Dispatch<AppAction>>(),
	);
