import React, { useEffect, useState } from "react";
import Product from "./Product";
import styles from './ProductList.module.css'

const ProductList = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const response = await fetch(
        "https://shop-react-f38ba-default-rtdb.firebaseio.com/products.json"
      );

      if (!response.ok) {
        console.log("failed");
        throw new Error("sth is wrong");
      }

      const data = await response.json();
      const tempArr = [];
      for (const key in data) {
        tempArr.push({
          id: key,
          name: data[key].name,
          image : data[key].image,
          price: data[key].price,
          marketID :data[key].marketID
        });
      }

      setProductItems(tempArr);
    };
    try {
      fetchproducts();
    } catch (err) {
      console.log(" error");
    }
  }, []);

 

  const showItem = productItems.map(item => <Product 
    name={item.name}
    key={item.id}
    price={item.price}
    image={item.image}
    marketID={item.marketID}
    id = {item.id}

    />)
  return <div className={styles.container}><ul>{showItem}</ul></div>;
};

export default ProductList;
