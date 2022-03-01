import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "./components/layout/Header";
import OrderList from "./components/product/OrderList";
import Login from "./components/market/Login";
import ProductList from "./components/product/ProductList";
import "./App.css";

function App() {
  const loginFlag = useSelector((state) => state.login.login);
  const acount = useSelector((state) => state.login.acount);
  console.log(acount);
  return (
    <React.Fragment>
      <Header />
      {loginFlag && !acount &&<Login />}
      {!loginFlag && !acount && (
        <div className="App-header">
          <ProductList />
        </div>
      )}
      {acount && <OrderList />}
    </React.Fragment>
  );
}

export default App;
