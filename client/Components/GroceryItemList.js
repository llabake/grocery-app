import React from 'react';

import GroceryListAddItem from "./GroceryListAddItem";
import GroceryItem from "./GroceryItem";

const GroceryItemList = ({ items }) => (
  <div>
    <h1 className='title'>Grocery List</h1>
    <div>
      {
        items.map(item => (
          <GroceryItem
            item={item}
            key={`item + ${item._id}`}
          />
        ))
      }
    </div>
    <GroceryListAddItem />
  </div>
);

export default GroceryItemList;