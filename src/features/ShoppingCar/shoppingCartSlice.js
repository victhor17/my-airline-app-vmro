
import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const removeItemFromArr = ( arr, i ) => {
  return arr.filter( (e, index) => index !== i );
};


const shoppinCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addedFlight(state, action) {
      state.push(action.payload)
    },
    deletedFlight(state, action) {
      return removeItemFromArr(state, action.payload)
    },
    deletedAllFlights(state, action) {
      return state = [];
    }
  },
});

export const {addedFlight, deletedFlight, deletedAllFlights, BoughtCompleted} = shoppinCartSlice.actions;
export default shoppinCartSlice.reducer


