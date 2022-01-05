import { rootReducer } from '#redux/reducers';
import {
	// APP
	AppSetLoadingAction,

	// CART
	CartSetLoadingAction,
	CartAddItemAction,
	CartRemoveItemAction,
	CartResetAction,

	// AUTH
	AuthSetLoadingAction,
	AuthResetAction,
	AuthSetIsLoggedAction,
} from '#declarations/interfaces/Redux';

export type ReduxState = ReturnType<typeof rootReducer>;
export type CartAction = CartSetLoadingAction | CartAddItemAction | CartRemoveItemAction | CartResetAction;
export type AuthAction = AuthSetLoadingAction | AuthResetAction | AuthSetIsLoggedAction;
export type AppAction = AppSetLoadingAction;
