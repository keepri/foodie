import { combineReducers } from 'redux';
import { authReducer } from '#redux/reducers/authReducer';
import { cartReducer } from '#redux/reducers/cartReducer';
import { appReducer } from '#redux/reducers/appReducer';

export const rootReducer = combineReducers({
	cart: cartReducer,
	auth: authReducer,
	app: appReducer,
});
