import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalpriceTwoFixed = totalPrice.toFixed(2);

  const fadeHandler = () => {
    props.setCartFlag(false);
  };
  console.log(cartItems);

  const submitHandler= async()=>{
    await fetch('https://shop-react-f38ba-default-rtdb.firebaseio.com/orders.json' , {
        method: 'post',
        body : JSON.stringify({
            totalPrice :totalPrice,
            items: cartItems,
        })
    })
  }

  const showCartItems = cartItems.map((item) => (
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
        {showCartItems}
        <span>total price: {totalpriceTwoFixed}</span>
        <div>
          <button onClick={fadeHandler}>cancel</button>
          <button onClick={submitHandler}>submit</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
