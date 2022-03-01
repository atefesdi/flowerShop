import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    replaceItems(state, action) {
      state.items = action.payload.items;
    },
    addtoCart(state, action) {
      state.totalQuantity = state.totalQuantity + 1;
      const newItem = action.payload;
      state.totalPrice = state.totalPrice + newItem.price;
      const existItem = state.items.find((item) => item.id === newItem.id);
      if (!existItem) {
        state.items.push({
          name: newItem.name,
          id: newItem.id,
          price: newItem.price,
          marketID: newItem.marketID,
          quantity: newItem.quantity,
        });
      } else {
        existItem.quantity++;
      }
      // state.totalQuantity = state.totalQuantity +  newItem.price;
    },
    removefromCart(state, action) {
      const itemRemoving = action.payload;
      const itemRemovingIndex = state.items.findIndex(
        (item) => item.id === itemRemoving
      );
      const itemRemovingFind = state.items[itemRemovingIndex];

      if (itemRemovingFind.quantity > 1) {
        itemRemovingFind.quantity--;
      } else if ((itemRemovingFind.quantity = 1)) {
        state.items = state.items.filter(
          (item) => item.id !== itemRemovingFind.id
        );
      }

      state.totalQuantity--;
      state.totalPrice = state.totalPrice - itemRemovingFind.price;
    },
    deleteFromeCart(state, action) {
      const removeItemID = action.payload;
      const itemRemovingIndex = state.items.findIndex(
        (item) => removeItemID === item.id
      );
      const itemRemoving = state.items[itemRemovingIndex];

      state.totalPrice = state.totalPrice - (itemRemoving.price * itemRemoving.quantity);
      state.items = state.items.filter((item) => item.id !== removeItemID);
      state.totalQuantity--;
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice;
