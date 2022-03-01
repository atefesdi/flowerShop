import React from "react";
import ProductCart from './ProductCart.js'
import styles from "./Product.module.css";
import { useDispatch } from "react-redux";
import {cartAction} from '../../store/cart-store'

const Product = (props) => {

    const dispatch = useDispatch();
    const addtoCartHAndler = ()=>{
        dispatch(cartAction.addtoCart({
            name: props.name,
            id: props.id ,
            price: props.price,
            quantity : 1,
            marketID : props.marketID
        }))
    }
  return (
    <div className={styles.containerStyle}>
      <div className={styles.productInfoStyle}>
      <img src={props.image} />
      <span>{props.name}</span>
      <span>{props.price}</span>
      </div>
      <ProductCart addtoCartHAndler={addtoCartHAndler}/>
    </div>
  );
};
export default Product;
