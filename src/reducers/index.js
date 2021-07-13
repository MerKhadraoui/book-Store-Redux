import allProductsJson from "../data.json";
const allReducers = (state = {}, action) => {
  const { cart, products } = state;
  const { product } = action;
  const { id, name, price } = product || {};
  let quantity, newCart;

  switch (action.type) {
    case "ADD_PRODUCT":
      quantity = cart[id] ? cart[id].quantity : 0;

      return {
        ...state,
        products: {
          ...products,
          [id]: {
            ...product,
          },
        },
        cart: {
          ...cart,
          [id]: {
            id,
            name,
            price,
            quantity: quantity + 1,
          },
        },
      };
    case "CHECKOUT":
      console.log(
        "Thank you for spending all your money with us, see you soon 😉"
      );
      return {
        products: allProductsJson,
        cart: {},
      };
    case "REMOVE_ONE":
      quantity = product.quantity;
      newCart = { ...cart };
      delete newCart[id];
      return {
        ...state,
        cart:
          quantity > 1
            ? { ...cart, [id]: { ...product, quantity: quantity - 1 } }
            : newCart,
        products: {
          ...products,
          [id]: {
            ...product,
          },
        },
      };
    case "REMOVE_ALL":
      quantity = product.quantity;
      newCart = { ...cart };
      delete newCart[id];
      return {
        ...state,
        products: {
          ...products,
          [id]: {
            ...product,
          },
        },
        cart: newCart,
      };
    // case"EMPTY_CART":
    // return ;
    default:
      return state;
  }
};

export default allReducers;
