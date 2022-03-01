import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/login-store";
import styles from "./Login.module.css";

const Login = (props) => {
  const [emailCahnge, setEmailChange] = useState("");
  const [passChange, setPassChange] = useState();
  const [marketData, setMarketData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [warning, setWarning] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMarketData = async () => {
      const response = await fetch(
        "https://shop-react-f38ba-default-rtdb.firebaseio.com/market.json"
      );
      if (!response.ok) {
        throw new Error("some thing is wrong");
      }

      const data = await response.json();
      const tempArr = [];
      for (const key in data) {
        tempArr.push({
          name: data[key].name,
          marketID: data[key].marketID,
          email: data[key].email,
          password: data[key].password,
        });
      }
      setMarketData(tempArr);
    };
    try {
      fetchMarketData();
    } catch (err) {
      throw new Error("some thing is wrong");
    }
  }, []);
  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await fetch(
        "https://shop-react-f38ba-default-rtdb.firebaseio.com/orders.json"
      );
      if (!response.ok) {
        throw new Error("sething is wrong");
      }

      const data = await response.json();

      const tempArr = [];
      for (const key in data) {
        tempArr.push({
          ...data[key].items,
        });
      }
    
      setOrderData(tempArr);
    };
    try {
      fetchOrderData();
    } catch (err) {
      throw new Error("some thing is wrong");
    }
  }, []);

  const emailHandler = (event) => {
    setEmailChange(event.target.value);
  };
  const passHandler = (event) => {
    setPassChange(event.target.value);
  };
  const desapearLogin = () => {
    dispatch(loginActions.loginShow(false));
  };

  const submitHandler = () => {
    const market = marketData.filter(
      (item) => item.email === emailCahnge && item.password == passChange
    );

    if (market.length === 0) {
      setWarning(true);
    } else {
      dispatch(loginActions.acountShow(true));
    }

   
    const orderofMarket = orderData.filter(
      (item) => item.marketID === market.marketID
    );

        console.log(orderofMarket)
    dispatch(loginActions.addtoItemsOrder(orderofMarket));
  };



  return (
    <div className={styles.loginContainer}>
      <label htmlFor="email">email:</label>
      <input id="email" type="email" onChange={emailHandler}></input>
      <label htmlFor="password">password</label>
      <input id="password" type="password" onChange={passHandler}></input>
      {warning && <h4>You are not registered</h4>}
      <div>
        <button onClick={submitHandler}>login</button>
        <button onClick={desapearLogin}>cancel</button>
      </div>
    </div>
  );
};
export default Login;
