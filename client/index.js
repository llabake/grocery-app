import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";

import App from "./Components/App";
import store from "./store";
import { loadGroceryItems } from "./actions/groceryItemAction";

store.dispatch(loadGroceryItems());

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'),
);
