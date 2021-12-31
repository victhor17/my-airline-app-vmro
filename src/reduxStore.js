import { configureStore } from '@reduxjs/toolkit';
import airportsSlice  from './features/airports/airportsSlice';
import shoppinCartSlice from './features/ShoppingCar/shoppingCartSlice';

const store = configureStore({
  reducer: {
    airports: airportsSlice,
    shopingCart: shoppinCartSlice
  }
})

export default store;