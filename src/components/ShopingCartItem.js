import React from "react";

import { removeOne, removeAll } from "../actions";
import { connect } from "react-redux";

const ShoppingCartItem = (props) => {
  const { item, removeOne, removeAll } = props;

  return (
    <li>
      <p>
        {item.name} | € {item.price} | x {item.quantity}
      </p>
      <div>
        <button onClick={() => removeOne(item)}>Remove One</button>
        <button onClick={() => removeAll(item)}>Remove All</button>
      </div>
    </li>
  );
};

const mapStoreToProps = (store) => ({});
const mapActionsToProps = {
  removeOne,
  removeAll,
};

export default connect(mapStoreToProps, mapActionsToProps)(ShoppingCartItem);
