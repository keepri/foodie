import { CartSetLoadingAction } from '#declarations/interfaces/cart';
import { rootReducer } from '#redux/reducers';

export type CartAction = CartSetLoadingAction;

export type ReduxState = ReturnType<typeof rootReducer>;
