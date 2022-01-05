/* eslint-disable react-hooks/rules-of-hooks */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from '#redux/reducers';

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));
