import React from "react";
import styles from './ProductCart.module.css'

const ProductCart = (props)=>{
    const submitForm = (event)=>{
        event.preventDefault();
        props.addtoCartHAndler();
    }
    return(
        <form className={styles.formStyles} onSubmit={submitForm}> 
            <div>
            <span id="amount">amount:</span>
            <input
            label="amount"
            defaultValue="1"
            ></input>
            </div>
            <button>add</button>
        </form>
    )
}
export default ProductCart;