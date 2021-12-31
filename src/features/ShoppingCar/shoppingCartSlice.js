
import { createSlice } from '@reduxjs/toolkit';

const initialState = []


const shoppinCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addedFlight(state, action) {
        state.push(action.payload)
    }
  },
});

export const {addedFlight} = shoppinCartSlice.actions;
export default shoppinCartSlice.reducer


