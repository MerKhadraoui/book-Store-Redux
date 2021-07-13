import React from "react";
import reactDOM from "react-dom";
import "./sass/main.scss";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";

import products from "./data.json";

const store = createStore(
  allReducers,
  { products: products, cart: {} },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
