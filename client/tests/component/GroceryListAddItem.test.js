import React from 'react';
import { shallow } from 'enzyme'
import { GroceryListAddItem, mapDispatchToProps } from "../../Components/GroceryListAddItem";

describe('<GroceryListAddItem />', () => {
  const dispatch = jest.fn();
  const props = {
    addGrocery: jest.fn(() => new Promise(resolve => resolve())),
  };

  test('it renders correctly', () => {
    const wrapper = shallow(<GroceryListAddItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('handle change', () => {
    const wrapper = shallow(<GroceryListAddItem {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'handleInputChange');
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'firstName',
      },
    };
    wrapper.instance().handleInputChange(event);
    expect(spy).toHaveBeenCalled();
  });
  test('handle add item', () => {
    const wrapper = shallow(<GroceryListAddItem {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'handleAddItem');
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'firstName',
      },
    };
    wrapper.instance().handleAddItem(event);
    expect(spy).toHaveBeenCalled();
  });
  test('should return required actions', () => {
    const actions = mapDispatchToProps(dispatch);
    actions.addGrocery();
    expect(dispatch).toHaveBeenCalledTimes(1);
  })
});