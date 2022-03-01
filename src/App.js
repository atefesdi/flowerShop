import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/cart-action";
import Header from "./components/layout/Header";
import OrderList from "./components/product/OrderList";
import Login from "./components/market/Login";
import "./App.css";
import ProductList from "./components/product/ProductList";

function App() {
  const loginFlag = useSelector(state => state.login.login);
  const acount = useSelector(state => state.login.acount);
  console.log(acount)

  return (
    <React.Fragment>
      <Header />
      {loginFlag && <Login  />}
      { !loginFlag && <div className="App-header">
      <ProductList/>
      </div>}
      {acount && <OrderList />}
    </React.Fragment>
  );
}

export default App;
