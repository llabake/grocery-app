import React from 'react';
import { shallow } from 'enzyme';
import { GroceryItem, mapDispatchToProps } from "../../Components/GroceryItem";
import groceryMock from "../mocks/groceryMock";
import { GroceryListAddItem } from "../../Components/GroceryListAddItem";

describe('<GroceryItem />', () => {
  const dispatch = jest.fn();
  const props = {
    item: groceryMock.createdGroceryWithId,
    deleteGroceryItem: jest.fn(() => new Promise(resolve => resolve())),
    updateGroceryItem: jest.fn(() => new Promise(resolve => resolve())),
  };
  test('it renders correctly', () => {
    const wrapper = shallow(<GroceryItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('it purchases a grocery item', () => {
    const wrapper = shallow(<GroceryItem {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'togglePurchased');
    const event = {
      preventDefault: jest.fn(),
      target: {
        purchased: true,
      },
    };
    wrapper.instance().togglePurchased(event);
    expect(spy).toHaveBeenCalled();
  });
  test('it delete a grocery item', () => {
    const wrapper = shallow(<GroceryItem {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'delete');
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'firstName',
      },
    };
    wrapper.instance().delete(event);
    expect(spy).toHaveBeenCalled();
  });
  test('should return required actions', () => {
    const actions = mapDispatchToProps(dispatch);
    actions.updateGroceryItem();
    actions.deleteGroceryItem();
    expect(dispatch).toHaveBeenCalledTimes(2);
  })
});