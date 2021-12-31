import { response } from '../../Api/getAirports';
import { createAsyncThunk } from '@reduxjs/toolkit'

/**
 * we create an airports/fetchAirports action that is called in `airportSlice` as fetchAirports(state, action)
 * and is dispatched in `/reactUIComponents/SearchFlightView`
 * handles the promise firebase response and returns the result
 */
export const fetchAirports = createAsyncThunk('airports/fetchAirports', async () => {
  const respo = await response();
  return respo;
});
