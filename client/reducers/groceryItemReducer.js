import initialState from './initialState';
import * as types from '../actions/actionTypes';

const groceryItemReducer = (state = initialState.groceryItems, action) => {
  switch (action.type) {
    case types.ADD_GROCERY_ITEM:
      return [...state, action.grocery];
    case types.DELETE_GROCERY_ITEM:
      return [
        ...state.filter(groceryItem => groceryItem._id !== action.grocery),
      ];
    case types.FETCH_GROCERY_ITEMS:
      return [...action.groceries];
    case types.UPDATE_GROCERY_ITEM:
      return state.map(groceryItem => (groceryItem._id === action.grocery._id
        ? action.grocery : groceryItem));
    default:
      return state;
  }
};

export default groceryItemReducer;
