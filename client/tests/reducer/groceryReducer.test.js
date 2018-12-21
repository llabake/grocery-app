import expect from 'expect';
import reducer from '../../reducers/groceryItemReducer'
import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState';

import groceryMock from "../mocks/groceryMock";

describe('Grocery Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual(initialState.groceryItems);
  });
  it('should add a grocery item', () => {
    const createGroceries = {
      type: types.ADD_GROCERY_ITEM,
      grocery: groceryMock.createdGroceryWithId,
    };
    expect(reducer([], createGroceries))
      .toEqual([groceryMock.createdGroceryWithId]);
  });
  it('should purchase a grocery item', () => {
    const updateGroceryAction = {
      type: types.UPDATE_GROCERY_ITEM,
      grocery: groceryMock.updatedGrocery,
    };
    expect(reducer([groceryMock.createdGroceryWithId], updateGroceryAction))
      .toEqual([groceryMock.updatedGrocery]);
  });
  it('should delete a grocery successfully', () => {
    const deleteGroceryAction = {
      type: types.DELETE_GROCERY_ITEM,
      grocery: groceryMock.createdGroceryWithId._id,
    };
    expect(reducer([], deleteGroceryAction))
      .toEqual([]);
  });
  it('should fetch all groceries', () => {
    const fetchGroceryAction = {
      type: types.FETCH_GROCERY_ITEMS,
      groceries: groceryMock.groceryItems,
    };
    expect(reducer([groceryMock.groceryItems], fetchGroceryAction))
      .toEqual(groceryMock.groceryItems);
  });
});
