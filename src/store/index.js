import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cart-store';
import LoginSlice from './login-store';

const store = configureStore({reducer  : {cart : cartSlice.reducer , login : LoginSlice.reducer}});

export default store;