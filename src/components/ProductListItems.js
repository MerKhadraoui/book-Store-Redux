import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../actions";
import { Link } from "react-router-dom";

const ProductListItem = (props) => {
  const { item, addProduct } = props;

  return (
    <li>
      <span>
        <Link to={`/product/${item.id}`} key={item.id}>
          <h4>{item.name}</h4> €{item.price}
        </Link>
      </span>
      <img src={product.img} alt={product.name} />
      <div>
        <button onClick={() => addProduct(item)}>Add to cart</button>
      </div>
    </li>
  );
};

const mapStoreToProps = (store) => {};
const mapActionsToProps = {
  addProduct,
};
export default connect(mapStoreToProps, mapActionsToProps)(ProductListItem);
