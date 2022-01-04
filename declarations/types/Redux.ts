import {
	CartSetLoadingAction,
	CartAddItemAction,
	CartRemoveItemAction,
	CartResetAction,
	AuthSetLoadingAction,
	AuthResetAction,
	AuthSetIsLoggedAction,
} from '#declarations/interfaces/Redux';
import { rootReducer } from '#redux/reducers';

export type ReduxState = ReturnType<typeof rootReducer>;
export type CartAction = CartSetLoadingAction | CartAddItemAction | CartRemoveItemAction | CartResetAction;
export type AuthAction = AuthSetLoadingAction | AuthResetAction | AuthSetIsLoggedAction;
