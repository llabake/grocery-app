import { combineReducers } from 'redux';
import groceryItemReducer from './groceryItemReducer';

const rootReducer = combineReducers({
  groceryItemReducer,
});

export default rootReducer;