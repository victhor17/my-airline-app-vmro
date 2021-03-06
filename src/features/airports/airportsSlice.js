import { fetchAirports } from './fetched';
import { createSlice } from '@reduxjs/toolkit';
const horarios = [
  {
    salida: '11:00 AM',
    tiempoVuelo: '3 hrs',
    llegada: '02:00 PM',
    cost: 2899
  },
  {
    salida: '09:00 AM',
    tiempoVuelo: '3 hrs',
    llegada: '12:00 PM',
    cost: 1599
  },
  {
    salida: '01:00 PM',
    tiempoVuelo: '3 hrs',
    llegada: '04:00 PM',
    cost: 2099
  },
  {
    salida: '03:00 PM',
    tiempoVuelo: '3 hrs',
    llegada: '06:00 PM',
    cost: 2299
  },
  {
    salida: '05:00 PM',
    tiempoVuelo: '3 hrs',
    llegada: '08:00 PM',
    cost: 3199
  }
]
const initialState = {
  status: 'loaded',
  data: [],
  horarios
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


export default airportsSlice.reducer;