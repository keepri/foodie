import { combineReducers } from 'redux';
import { authReducer } from '#redux/reducers/authReducer';
import { cartReducer } from '#redux/reducers/cartReducer';

export const rootReducer = combineReducers({
	cart: cartReducer,
	auth: authReducer,
});
