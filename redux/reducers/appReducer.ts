import { AppActionType } from '#declarations/enums/Redux';
import { AppState } from '#declarations/interfaces/Redux';
import { AppAction } from '#declarations/types/Redux';
import { initAppState } from 'utils/variables';

export const appReducer = (state: AppState = initAppState, action: AppAction): AppState => {
	switch (action.type) {
		// SET_LOADING
		case AppActionType.SET_LOADING: {
			return { ...state, loading: action.payload };
		}

		default:
			return state;
	}
};
