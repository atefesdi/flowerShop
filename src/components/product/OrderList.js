import React from "react";
import Order from "./Order";
import { useSelector } from "react-redux";


const OrderList=()=>{

    const orders = useSelector(state => state.login.items)
    console.log(orders)
    
    const orderShow = orders.map(item => <Order name={item.name} price={item.price} key={item.id} quantity={item.quantity}/>)
    return(
        <div>
            <ul>
                {orderShow}
            </ul>
        </div>
    )
}

export default OrderList;