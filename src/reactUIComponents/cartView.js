import React, { useEffect, useState }  from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import './styles.css';
import {FlightInfo, CoreButton, TextInput} from './SearchFlightView';
import {deletedFlight, deletedAllFlights} from '../features/ShoppingCar/shoppingCartSlice'

const allCartItemsSelector = state => state.shopingCart;

export const CartView = () => {
  const dispatch = useDispatch();

  const [cartArray, setCartArray] = useState([]);
  const [isCanShowCart, setIsCanShowCart] = useState(false);
  const [isBoughtAll, setIsBoughtAll] = useState(false);
  const [showRequestClientInfo, setShowRequestClientInfo] = useState(false);
  const [nameText, setNameText] = useState('');
  const [lastNameText, setLastNameText] = useState('');

  const cartItems = useSelector(allCartItemsSelector, shallowEqual);
  useEffect(() => {
    setCartArray(cartItems)
    const canShow = Boolean(cartItems.length)
    setIsCanShowCart(canShow)
  }, [cartItems])

  const handleBuyAll = () => {
    dispatch(deletedAllFlights());
    setIsBoughtAll(true)
  }

  const handleDeleteAll = () => {
    dispatch(deletedAllFlights());
  }
  const handleDelteFlight = index => {
    dispatch(deletedFlight(index));
  }

  const handleChangeName = event => {
    setNameText(event.target.value)
  }

  const handleChangeLastName = event => {
    setLastNameText(event.target.value)
  }

  return (
    <div className='form'>
    {isCanShowCart ?
      <div className='form'>
        <h1> Mis vuelos por reservar</h1>
        {cartArray.map((flight, index) => {
          return <FlightInfo key={index} handleclick={() => {handleDelteFlight(index)}} buttonText="Borrar" origin={flight.origin} destination={flight.destination} dateInfo={flight.dateInfo} persons={flight.persons} showPassengers/>
        })}
        <div className='form flight-item'>
          <CoreButton handleclick={() => setShowRequestClientInfo(true)} text="Reservar todos"/>
          <CoreButton handleclick={handleDeleteAll} text="Borrar todos"/>
        </div>
       {showRequestClientInfo ?
       <div className='form'>
         <TextInput value={nameText} onInputChange={handleChangeName} label="Nombre" placeHolder="Tony"/>
         <TextInput value={lastNameText} onInputChange={handleChangeLastName} label="Apellido" placeHolder="Stark"/>
         <CoreButton handleclick={handleBuyAll} text="Terminar compra"/>
       </div> : ''}
      </div>
     : <div>
       {isBoughtAll ?
        <div className='form succes'>
          <h1> Compra completada</h1>
        </div> :
        <h1> No hay vuelos en el carrito</h1>}
       </div>}
    </div>
  )
}