import { rootReducer } from '#redux/reducers';
import {
	// APP
	AppSetLoadingAction,
	AppSetLangAction,
	AppSetRestaurantsAction,
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
	CartSetRestaurantUidAction,
	CartUpdateAction,
	AppSetSelectedRestaurantAction,
} from '#declarations/interfaces/Redux';

export type { ReduxState, CartAction, AuthAction, AppAction };

type ReduxState = ReturnType<typeof rootReducer>;
type AppAction =
	| AppSetLoadingAction
	| AppSetLangAction
	| AppToggleDarkModeAction
	| AppResetAction
	| AppSetOnAuthChangeSubAction
	| AppSetRestaurantsAction
	| AppSetSelectedRestaurantAction;
type CartAction =
	| CartSetLoadingAction
	| CartAddItemAction
	| CartRemoveItemAction
	| CartResetAction
	| CartUpdateItemAction
	| CartSetRestaurantUidAction
	| CartUpdateAction;
type AuthAction =
	| AuthSetLoadingAction
	| AuthResetAction
	| AuthSetIsLoggedAction
	| AuthLoginAction
	| AuthLogoutAction
	| AuthUpdateUserAction;
