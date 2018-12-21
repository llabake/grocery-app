import React, { Component } from 'react';
import { connect } from "react-redux";
import { addGrocery } from "../actions/groceryItemAction";


export class GroceryListAddItem extends Component {
  state = {
    item: {
      name: '',
    },
  };

  handleInputChange = (event) => {
    this.setState({
      item: { name: event.target.value },
    })
  };

  handleAddItem = (event) => {
    event.preventDefault();
    this.props.addGrocery(this.state.item)
      .then(() => this.setState(
        { item: { name: '' } },
      ))
  };

  render() {
    return (
      <div className='grocery-addItem'>
        <form onSubmit={this.handleAddItem}>
          <input
            value={this.state.item.name}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addGrocery: grocery => dispatch(addGrocery(grocery)),
});

export default connect(null, mapDispatchToProps)(GroceryListAddItem)