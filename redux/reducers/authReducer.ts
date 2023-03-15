import { AuthActionType } from '#declarations/enums/Redux';
import { AuthState } from '#declarations/interfaces/Redux';
import { AuthAction } from '#declarations/types/Redux';
import { initAuthState } from '#utils/misc';

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

        // UPDATE_USER
        case AuthActionType.UPDATE_USER: {
            return { ...state, user: { ...state.user, ...action.payload } };
        }

        // LOGIN
        case AuthActionType.LOGIN: {
            const { token, user } = action.payload;

            return { ...state, token, user: user ?? state.user, isLogged: true };
        }

        // LOGOUT
        case AuthActionType.LOGOUT: {
            return initAuthState;
        }

        // RESET
        case AuthActionType.RESET: {
            return initAuthState;
        }

        default: {
            return state;
        }
    }
};
