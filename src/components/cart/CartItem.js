import React from "react";
import { cartAction } from "../../store/cart-store";
import "font-awesome/css/font-awesome.min.css";
import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const minusHandler = () => {
    dispatch(cartAction.removefromCart(props.id));
  };
  const addItemHandler = () => {
    dispatch(
      cartAction.addtoCart({
        id: props.id,
        name: props.name,
        price: props.price,
      })
    );
  };
  const deleteHandler = () => {
    dispatch(cartAction.deleteFromeCart(props.id));
  };
  return (
    <div className={styles.orderStyle}>
      <span>{props.name}</span>
      <span>{props.price}</span>
      <span>{props.quantity}</span>
      <div>
        <i className="fa fa-solid fa-minus" onClick={minusHandler}></i>
        <i className="fa fa-solid fa-plus" onClick={addItemHandler}></i>
        <i className="fa fa-solid fa-trash" onClick={deleteHandler}></i>
      </div>
    </div>
  );
};
export default CartItem;
