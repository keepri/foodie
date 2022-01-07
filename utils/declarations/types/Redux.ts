import { rootReducer } from '#redux/reducers';
import {
	// APP
	AppSetLoadingAction,
	AppSetLangAction,
	AppToggleDarkModeAction,
	AppResetAction,

	// CART
	CartSetLoadingAction,
	CartAddItemAction,
	CartRemoveItemAction,
	CartResetAction,

	// AUTH
	AuthSetLoadingAction,
	AuthResetAction,
	AuthSetIsLoggedAction,
	AuthLogoutAction,
	AuthLoginAction,
	AuthUpdateUserAction,
	CartUpdateItemAction,
	AppSetOnAuthChangeSubAction,
	CartSetRestaurantAction,
} from '#declarations/interfaces/Redux';

export type { ReduxState, CartAction, AuthAction, AppAction };

type ReduxState = ReturnType<typeof rootReducer>;
type AppAction =
	| AppSetLoadingAction
	| AppSetLangAction
	| AppToggleDarkModeAction
	| AppResetAction
	| AppSetOnAuthChangeSubAction;
type CartAction =
	| CartSetLoadingAction
	| CartAddItemAction
	| CartRemoveItemAction
	| CartResetAction
	| CartUpdateItemAction
	| CartSetRestaurantAction;
type AuthAction =
	| AuthSetLoadingAction
	| AuthResetAction
	| AuthSetIsLoggedAction
	| AuthLoginAction
	| AuthLogoutAction
	| AuthUpdateUserAction;
