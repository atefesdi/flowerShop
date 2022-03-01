import React from "react";
import styles from "./Order.module.css";

const Order = (props) => {
  return<div className={styles.container}>
    <h4>{props.name}</h4>
    <h4>{props.price}</h4>
    <h4>{props.quantity}</h4>
  </div>;
};
export default Order;
