import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router";
import productlist from "./components/Productlist";
import ProductInfo from "./components/ProductInfo";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import ShopingCart from "./components/ShopingCart";
const App = () => {
  <Router>
    <Menu />
    <h1>Read Me online Store </h1>
    <Switch>
      <Route path={process.evn.PUBLIC_URL + "/"} exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/product" exact component={productlist} />
      <Route
        path="/product/:id"
        component={({ Match }) => <ProductInfo id={match.params.id} />}
      />
      <Route path="/cart" exact component={ShopingCart} />
    </Switch>
  </Router>;
};
export default App;
