import { AuthActionType } from '#declarations/enums/Redux';
import { AuthState } from '#declarations/interfaces/Redux';
import { AuthAction } from '#declarations/types/Redux';
import { initAuthState } from 'utils/misc';

export const authReducer = (state: AuthState = initAuthState, action: AuthAction): AuthState => {
	switch (action.type) {
		// SET_LOADING
		case AuthActionType.SET_LOADING: {
			return { ...state, loading: action.payload };
		}

		// SET_IS_LOGGED
		case AuthActionType.SET_IS_LOGGED: {
			return { ...state, isLogged: action.payload };
		}

		// LOGIN
		case AuthActionType.LOGIN: {
			return { ...state, token: action.payload, isLogged: true };
		}

		// LOGOUT
		case AuthActionType.LOGOUT: {
			return initAuthState;
		}

		// RESET
		case AuthActionType.RESET: {
			return initAuthState;
		}

		default:
			return state;
	}
};
