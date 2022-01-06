import { rootReducer } from '#redux/reducers';
import {
	// APP
	AppSetLoadingAction,
	AppSetLangAction,
	AppToggleDarkModeAction,

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
} from '#declarations/interfaces/Redux';

export type { ReduxState, CartAction, AuthAction, AppAction };

type ReduxState = ReturnType<typeof rootReducer>;
type AppAction = AppSetLoadingAction | AppSetLangAction | AppToggleDarkModeAction;
type CartAction = CartSetLoadingAction | CartAddItemAction | CartRemoveItemAction | CartResetAction;
type AuthAction =
	| AuthSetLoadingAction
	| AuthResetAction
	| AuthSetIsLoggedAction
	| AuthLoginAction
	| AuthLogoutAction;
