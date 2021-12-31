import { fetchAirports } from './fetched';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'loaded',
  data: []
};


/**
 *
 * @constructs initialState => {
  status: '',
  data: []
}
 */
const airportsSlice = createSlice({
  name: 'airports',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
    .addCase(fetchAirports.fulfilled, (state, action) => {
      return {
        ...state,
        status: 'loaded',
        data: action.payload
      }
    })
  }
});

export const { fetchedAirports, filter} = airportsSlice.actions;

export default airportsSlice.reducer;