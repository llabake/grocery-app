import axios from 'axios';
import {
  ADD_GROCERY_ITEM,
  FETCH_GROCERY_ITEMS,
  UPDATE_GROCERY_ITEM,
  DELETE_GROCERY_ITEM,
} from "./actionTypes";
import hostUrl from "../helpers/utils";

const baseUrl = '/api/groceries';

const addGroceryItem = grocery => ({
  type: ADD_GROCERY_ITEM,
  grocery,
});

const loadItems = groceries => ({
  type: FETCH_GROCERY_ITEMS,
  groceries,
});

const updateItem = grocery => ({
  type: UPDATE_GROCERY_ITEM,
  grocery,
});

const deleteItem = grocery => ({
  type: DELETE_GROCERY_ITEM,
  grocery,
});

export const addGrocery = groceryData => async (dispatch) => {
  try {
    const response = await axios.post(`${hostUrl}${baseUrl}`, groceryData);
    const { data: { grocery } } = response;
    dispatch(addGroceryItem(grocery));
  } catch (e) {
    console.log(e, 'pliesss')
  }
};

export const loadGroceryItems = () => async (dispatch) => {
  try {
    const response = await axios.get(`${hostUrl}${baseUrl}`);
    const { data: { groceries } } = response;
    dispatch(loadItems(groceries))
  } catch (e) {
    console.log(e, 'okokoko')
  }
};

export const updateGroceryItem = item => async (dispatch) => {
  try {
    const response = await axios.patch(`${hostUrl}${baseUrl}/${item._id}`,
      { purchased: !item.purchased });
    const { data: { grocery } } = response;
    dispatch(updateItem(grocery))
  } catch (e) {
    console.log(e, 'okokoko')
  }
};

export const deleteGroceryItem = item => async (dispatch) => {
  try {
    const response = await axios.delete(`${hostUrl}${baseUrl}/${item}`);
    const { data: { message } } = response;
    dispatch(deleteItem(item))
  } catch (e) {
    console.log(e, 'okokoko')
  }

};