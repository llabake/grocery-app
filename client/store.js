import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers/index';

const middleware = [thunk];
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') middleware.push(logger);

const enhancers = applyMiddleware(...middleware);
const configureStore = createStore(rootReducer, enhancers);
export default configureStore;