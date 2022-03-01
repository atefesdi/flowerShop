import React from "react";
import Order from "./Order";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/login-store";
import styles from './OrderList.module.css'


const OrderList=()=>{

    const dispatch = useDispatch();

    const orders = useSelector(state => state.login.items)
    console.log(orders)

    const cancelBtnHandler =()=>{
        dispatch(loginActions.acountShow(false))
    }
    
    const orderShow = orders.map(item => <Order name={item.name} price={item.price} key={item.id} quantity={item.quantity}/>)
    return(
        <div className={styles.conatainer}>
            <ul>
                {orderShow}
            </ul>
            <button onClick={cancelBtnHandler}>cancel</button>
        </div>
    )
}

export default OrderList;