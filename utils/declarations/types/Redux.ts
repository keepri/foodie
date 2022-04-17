import { rootReducer } from '#redux/reducers';
import {
	// APP
	AppSetLoadingAction,
	AppSetLangAction,
	AppSetRestaurantsAction,
	AppToggleDarkModeAction,
	AppResetAction,
	AppSetOnAuthChangeSubAction,
	AppSetSelectedRestaurantAction,

	// CART
	CartSetLoadingAction,
	CartAddItemAction,
	CartRemoveItemAction,
	CartResetAction,
	CartUpdateItemAction,
	CartSetRestaurantUidAction,
	CartUpdateAction,

	// AUTH
	AuthSetLoadingAction,
	AuthResetAction,
	AuthSetIsLoggedAction,
	AuthLogoutAction,
	AuthLoginAction,
	AuthUpdateUserAction,
	AppSetSettingsPageAction,
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
	| AppSetSelectedRestaurantAction
	| AppSetSettingsPageAction;
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
