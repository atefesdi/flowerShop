import { produceWithPatches } from "immer";
import React from "react";

const Order = (props) => {
  return <div>
      <h4>{props.name}</h4>
      <h4>{props.price}</h4>
      <h4>{props.quantity}</h4>
  </div>;
};
export default Order;
