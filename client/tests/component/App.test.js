import React from 'react';
import { shallow } from 'enzyme';
import { App } from "../../Components/App";
import groceryMock from "../mocks/groceryMock";
import GroceryItemList from "../../Components/GroceryItemList";
import { GroceryListAddItem } from "../../Components/GroceryListAddItem";

describe('<App /> component', () => {
  test('it renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders grocery item list correctly ', () => {
    const props = {
      items: groceryMock.createdGroceryWithId,
    };
    const tree = shallow(<App {...props}/>);
    expect(tree.find(GroceryItemList).length).toBe(1);
  });
});