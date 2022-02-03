import { AppActionType } from '#declarations/enums/Redux';
import { AppState } from '#declarations/interfaces/Redux';
import { AppAction } from '#declarations/types/Redux';
import { initAppState } from 'utils/misc';

export const appReducer = (state: AppState = initAppState, action: AppAction): AppState => {
	switch (action.type) {
		// SET_LOADING
		case AppActionType.SET_LOADING: {
			return { ...state, loading: action.payload };
		}

		// SET_ON_AUTH_CHANGE_SUB
		case AppActionType.SET_ON_AUTH_CHANGE_SUB: {
			return { ...state, unsubscribeOnAuthChange: action.payload };
		}

		// SET_LANG
		case AppActionType.SET_LANG: {
			return { ...state, appLang: action.payload };
		}

		// SET_RESTAURANTS
		case AppActionType.SET_RESTAURANTS: {
			return { ...state, restaurants: action.payload };
		}

		// SET_SELECTED_RESTAURANT
		case AppActionType.SET_SELECTED_RESTAURANT: {
			return { ...state, selectedRestaurant: action.payload };
		}

		// RESET
		case AppActionType.RESET: {
			return initAppState;
		}

		default:
			return state;
	}
};
