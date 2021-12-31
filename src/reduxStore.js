import { configureStore } from '@reduxjs/toolkit';
import airportsSlice  from './features/airports/airportsSlice';

const store = configureStore({
  reducer: {
    airports: airportsSlice
  }
})

export default store;