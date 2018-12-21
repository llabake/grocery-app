import React, { Component } from 'react';
import { connect } from "react-redux";

import GroceryItemList from "./GroceryItemList";
import '../styles.css';


export class App extends Component {
  render() {
    return (
      <div>
        <GroceryItemList items={this.props.items} />
      </div>
    )
  }
}

export default connect(state => ({ items: state.groceryItemReducer }))(App);