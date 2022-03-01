import { cartAction } from "./cart-store";

export const fetchData = () => {
  return (dispatch) => {
    const fetching = async () => {
      const response = await fetch(
        "https://shop-react-f38ba-default-rtdb.firebaseio.com/products.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = response.json();
      return data;
    };
    try{
        const cartData = fetching();
        // dispatch(cartAction.replaceItems({items : cartData.products}));
        // console.log(cartData)
    }catch{
        console.log('something went wrong');
    }
  };
};
