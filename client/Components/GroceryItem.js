import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  deleteGroceryItem,
  updateGroceryItem,
} from "../actions/groceryItemAction";

export class GroceryItem extends Component {
  delete = (event) => {
    event.preventDefault();
    this.props.deleteGroceryItem(this.props.item._id);
  };

  togglePurchased = (event) => {
    event.preventDefault();
    this.props.updateGroceryItem(this.props.item);
  };

  render() {
    return (
      <div className="container">
        <div className="item">
          <h4 className={this.props.item.purchased ? 'strikethrough' : ''}>
            {this.props.item.name}
          </h4>
        </div>
        <form className="status" onSubmit={this.togglePurchased}>
          <button type="submit" id="buy" className={this.props.item.purchased ? 'buy' : 'button-primary bought'}>
            {this.props.item.purchased ? 'Unbuy' : 'Buy'}
          </button>
        </form>
        <form id="del" onSubmit={this.delete}>
          <button className="delete-btn" type="submit">&times;</button>
        </form>
      </div>
    );
  }
}
export const mapDispatchToProps = dispatch => ({
  deleteGroceryItem: item => dispatch(deleteGroceryItem(item)),
  updateGroceryItem: item => dispatch(updateGroceryItem(item)),
});

export default connect(null, mapDispatchToProps)(GroceryItem);
