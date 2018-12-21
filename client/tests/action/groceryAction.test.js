import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import groceryMock from "../mocks/groceryMock";
import {
  ADD_GROCERY_ITEM,
  DELETE_GROCERY_ITEM,
  FETCH_GROCERY_ITEMS,
  UPDATE_GROCERY_ITEM,
} from "../../actions/actionTypes";
import {
  addGrocery,
  deleteGroceryItem,
  loadGroceryItems,
  updateGroceryItem,
} from "../../actions/groceryItemAction";

const mockStore = configureStore([thunk]);

describe('Grocery Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch ADD_GROCERY_ITEM', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          message: 'Successfully added a grocery',
          grocery: groceryMock.createdGroceryWithId,
        },
      });
    });
    const store = mockStore();
    const expectedActions = [
      {
        type: ADD_GROCERY_ITEM,
        grocery: groceryMock.createdGroceryWithId,
      },
    ];
    store.dispatch(addGrocery())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('should dispatch FETCH_GROCERY_ITEMS', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'Groceries retrieved successfully',
          groceries: groceryMock.createdGroceryWithId,
        },

      });
    });
    const store = mockStore();
    const expectedActions = [
      {
        type: FETCH_GROCERY_ITEMS,
        groceries: groceryMock.createdGroceryWithId,
      },
    ];
    store.dispatch(loadGroceryItems()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('should dispatch UPDATE_GROCERY_ITEM', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: `Grocery successfully ${groceryMock.updatedGrocery.purchased ? 'bought' : 'unbought'}`,
          grocery: groceryMock.updatedGrocery,
        },
      });
    });
    const store = mockStore();
    const expectedActions = [
      {
        type: UPDATE_GROCERY_ITEM,
        grocery: groceryMock.updatedGrocery,
      },
    ];
    store.dispatch(updateGroceryItem(groceryMock.updatedGrocery))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('should dispatch DELETE_GROCERY_ITEM', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'Grocery deleted successfully',
        },
      });
    });
    const store = mockStore();
    const expectedActions = [
      {
        type: DELETE_GROCERY_ITEM,
        grocery: groceryMock.updatedGrocery,

      },
    ];
    store.dispatch(deleteGroceryItem(groceryMock.updatedGrocery))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});