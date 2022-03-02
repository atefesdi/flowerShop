import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/login-store";
import Cart from "../cart/Cart";
import styles from "./Header.module.css";

const Header = (props) => {
  const [cartFlag , setCartFlag] = useState(false);

  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();
  
  const loginHandler = ()=>{
    dispatch(loginActions.loginShow(true))
  }
  const showCartHandler=()=>{
    setCartFlag(true);
  }
  
  return (
    <React.Fragment>
      <div className={styles.headerContainer}>
        <button onClick={loginHandler}>login</button>
        <h1>atefe saeedi</h1>
        <button onClick={showCartHandler}>
          <span>{totalQuantity}</span>
          <span> cart</span>
        </button >
      </div>
      {cartFlag && <Cart  setCartFlag={setCartFlag}/>}
      
    </React.Fragment>
  );
};
export default Header;
