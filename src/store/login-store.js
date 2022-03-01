import { createSlice } from "@reduxjs/toolkit";
const initialState = { login: false, acount: false, items: [] };

const LoginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    loginShow(state, action) {
      state.login = action.payload;
    },
    acountShow(state, action) {
      state.acount = action.payload;
    },
    addtoItemsOrder(state, action) {
      const newItem = action.payload;
      state.items.push({
        name: newItem.name,
        id: newItem.id,
        price: newItem.price,
        marketID: newItem.marketID,
        quantity: newItem.quantity,
      });
    },
  },
});

export const loginActions = LoginSlice.actions;
export default LoginSlice;
