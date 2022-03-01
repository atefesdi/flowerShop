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
      for( const key in newItem){
        state.items.push({
          name: newItem[key].name,
          id: newItem[key].id,
          price: newItem[key].price,
          marketID: newItem[key].marketID,
          quantity: newItem[key].quantity,
        });
      }
    },
  },
});

export const loginActions = LoginSlice.actions;
export default LoginSlice;
