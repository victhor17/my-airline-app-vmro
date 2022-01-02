/* eslint-disable jsx-a11y/alt-text */

import './styles.css'
import React, { useEffect, useState }  from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {fetchAirports} from '../features/airports/fetched';
import flighttakeoff from '../icons/flighttakeoff.svg';
import flight_land_black from '../icons/flight_land_black.svg';
import person from '../icons/person.svg'
import {addedFlight} from '../features/ShoppingCar/shoppingCartSlice'

const selectAirPorts = state => state.airports.data;
const selecFakeFlights = state => state.airports.horarios;
const filterBy = (array, word) => {
  return array.filter(city => {
    return city.name.toLowerCase().includes(word.toLowerCase()) || city.city_name.toLowerCase().includes(word.toLowerCase())
  })
}

export const FlightsSearch = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch()

  const [originText, setOriginText] = useState('');
  const [destinationText, setDestinationText] = useState('');
  const [passengersNumber, setPassengersNumber] = useState(1);
  const [originSelected, setOriginSelected] = useState({});
  const [originFiltered, setOriginFiltered] = useState([]);
  const [destinationSelected, setDestinationSelected] = useState({});
  const [destiationFiltered, setDestinationFiltered] = useState([]);
  const [flightsArray, setFlightsArray] = useState([]);
  const [isCanContinue, setIsCanContinue] = useState(false)

  useEffect(() => {
    async function getData() {
      let data = await dispatch(fetchAirports())
      return data;
    }
    getData();
  },[dispatch])


  const airPports = useSelector(selectAirPorts, shallowEqual);
  const fakeFlights = useSelector(selecFakeFlights, shallowEqual);

  useEffect(()=> {
    setFlightsArray(fakeFlights)
  }, [fakeFlights, flightsArray]);


  const handleOriginInput = event => {
    setOriginText(event.target.value);
    setOriginFiltered(filterBy(airPports, event.target.value));
  }
  const handleDestinationInput = event => {
    setDestinationFiltered(filterBy(airPports, event.target.value))
    setDestinationText(event.target.value);
  }
  const handlePassengersInput = event => {
    setPassengersNumber(Number(event.target.value));
  }
  const handleSelectOriginChange = event => {
    setOriginText(originFiltered[event.target.value].name)
    setOriginSelected(originFiltered[event.target.value])
    setIsCanContinue(Boolean(originFiltered[event.target.value].name && destinationSelected.name));
  }
  const handleSelectDestinationChange = event => {
    setDestinationSelected(destiationFiltered[event.target.value]);
    setDestinationText(destiationFiltered[event.target.value].name);
    setIsCanContinue(Boolean(originSelected.name && destiationFiltered[event.target.value].name));
  }

  const handleclickFligthAdd = (origin, destination, dateInfo, persons) => {
    dispatch(addedFlight({origin, destination, dateInfo, persons}))
  }

  return (
    <div className='container'>
      <div className='form'>
        <div className='input-container'>
          <span className='icon'>
            <img src={flighttakeoff}></img>
          </span>
          <TextInput inputType="select" value={originText} label="Origen" placeHolder="New York JFK" onInputChange={handleOriginInput}/>
          {originText.length ?
            <select onChange={handleSelectOriginChange}>
              {originFiltered.map((city, index) =>
                <option key={index} value={index}>{city.name} | {city.city_name}</option>
              )}
            </select>
            :
            ''
          }
        </div>

        <div className='input-container'>
          <span className='icon'>
            <img src={flight_land_black}></img>
          </span>
          <TextInput value={destinationText} onInputChange={handleDestinationInput} label="Destino" placeHolder="CDMX MEX"/>
          {destinationText.length ?
            <select onChange={handleSelectDestinationChange}>
              {destiationFiltered.map((city, index) =>
                <option key={index} value={index}>{city.name} | {city.city_name}</option>
              )}
            </select>
            :
            ''
          }
        </div>

        <div className='input-container'>
          <span className='icon'>
            <img src={person}></img>
          </span>
          <TextInput onInputChange={handlePassengersInput} value={passengersNumber} label="Pasajeros" placeHolder="" inputType="number"/>
        </div>
      </div>

        <div className='flightsList'>
          {isCanContinue ?
            flightsArray.map((flight, index) => {
              return <FlightInfo handleclick={handleclickFligthAdd} key={index} origin={originSelected} destination={destinationSelected} dateInfo={flight} persons={passengersNumber}/>
            })
          : ''}
        </div>

    </div>
  )
}

export const CoreButton =({text, handleclick}) => {
  return (
    <div>
      <button
        className="button-default"
        onClick={handleclick}
      >
        {text}
      </button>
    </div>
  );
};

export const TextInput = props => {

  return (
  <div className="input-div">
    <label >{props.label}</label>
      <input
        className='inputText'
        type={props.inputType || 'text'}
        placeholder={props.placeHolder}
        defaultValue={props.value}
        value={props.value}
        onChange={props.onInputChange}
      />
  </div>

  )
}

export const FlightInfo = ({handleclick, origin = {}, destination = {}, dateInfo = {}, persons = 1, showPassengers = false, buttonText="Agregar", showButton = true}) => {

  return (
    <div className='flight-item'>
      <div className='item'>
        <div>{dateInfo.salida}</div>
        {origin.iata_code}
      </div>
        <div className='arrow'>

        </div>
      <div className='item'>
        <div>{dateInfo.llegada}</div>
        {destination.iata_code}
      </div>
      <div className='item'>
        <div>${dateInfo.cost}</div>
      </div>
      {showPassengers ?
      <div className='item'>
        Pasajeros: {persons}
      </div> : ''}
      {showButton ?
      <CoreButton handleclick={() => handleclick(origin, destination, dateInfo, persons)} text={buttonText}/>
      : ''}
    </div>
  )
}



