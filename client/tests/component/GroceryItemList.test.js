import React from 'react';
import { shallow } from 'enzyme';

import GroceryItemList from "../../Components/GroceryItemList";
import groceryMock from "../mocks/groceryMock";
import GroceryListAddItem from "../../Components/GroceryListAddItem";

describe('<GroceryItemList />', () => {
  const wrapper = shallow(<GroceryItemList items={groceryMock.groceryItems} />);
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders grocery list add item correctly ', () => {
    const tree = shallow(<GroceryItemList items={[groceryMock.createdGroceryWithId]} />);
    expect(tree.find(GroceryListAddItem).length).toBe(1);
  });
});