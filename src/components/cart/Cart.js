import React, { useState } from "react";
import CartItem from "./CartItem";
import SuccesSentData from "./SuccesSentData";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../store/cart-store";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalpriceTwoFixed = totalPrice.toFixed(2);

  const [submitData, setSubmitData] = useState();

  const dispatch = useDispatch();

  const fadeHandler = () => {
    props.setCartFlag(false);
  };
  console.log(cartItems);

  const submitHandler = async () => {
    if(cartItems.length !== 0){
      const response = await fetch(
        "https://shop-react-f38ba-default-rtdb.firebaseio.com/orders.json",
        {
          method: "post",
          body: JSON.stringify({
            totalPrice: totalPrice,
            items: cartItems,
          }),
        }
      );
      if (!response.ok) {
        setSubmitData(false);
      }else{
        setSubmitData(true);
        dispatch(cartAction.resetCart());
      }
    }

  };
  console.log(submitData);

  const showCartItems =  cartItems.map((item) => (
    <CartItem
      name={item.name}
      id={item.id}
      key={item.key}
      price={item.price}
      quantity={item.quantity}
    />
  ));

  
  return (
    <React.Fragment>
      <div className={styles.backgroundStyle} onClick={fadeHandler}></div>
      <div className={styles.cartStyle}>
        <h1>your Cart</h1>
        {submitData !== true && showCartItems}
       {submitData !== true && <span>total price: {totalpriceTwoFixed}</span>}
       {submitData === true && <SuccesSentData />}
       {submitData === false && <h4 style={{color : 'red'}}>data not sent</h4>}
        <div>
          <button onClick={fadeHandler}>cancel</button>
          {submitData !== true && <button onClick={submitHandler}>submit</button>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
