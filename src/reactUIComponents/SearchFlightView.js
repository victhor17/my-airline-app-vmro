import React, { useEffect, useState }  from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {fetchAirports} from '../features/airports/fetched';
import flighttakeoff from '../icons/flighttakeoff.svg';
import flight_land_black from '../icons/flight_land_black.svg';
import shoppingCart from '../icons/shoppingCart.svg'
import './styles.css'

const selectAirPorts = state => state.airports.data;
const filterBy = (array, word) => {
  return array.filter(city => {
    return city.name.toLowerCase().includes(word.toLowerCase()) || city.city_name.toLowerCase().includes(word.toLowerCase())
  })
}

export const FlightsSearch = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch()

  const [originText, setOriginText] = useState('');
  const [destinationText, setDestinationText] = useState('')
  const [passengersNumber, setPassengersNumber] = useState(1)
  const [originSelected, setOriginSelected] = useState({})
  const [originFiltered, setOriginFiltered] = useState([])
  const [destinationSelected, setDestinationSelected] = useState({})
  const [destiationFiltered, setDestinationFiltered] = useState([])

  useEffect(() => {
    async function getData() {
      let data = await dispatch(fetchAirports())
      return data;
    }
    getData();
  },[dispatch])


  const airPports = useSelector(selectAirPorts, shallowEqual);
  console.log(airPports);
  

  const handleOriginInput = event => {
    setOriginText(event.target.value);
    setOriginFiltered(filterBy(airPports, event.target.value));
    console.log(originFiltered);
  }
  const handleDestinationInput = event => {
    setDestinationFiltered(filterBy(airPports, event.target.value))
    setDestinationText(event.target.value);
  }
  const handlePassengersInput = event => {
    setPassengersNumber(event.target.value);
  }
  const handleSelectOriginChange = event => {
    console.log(originFiltered[event.target.value]);
    setOriginText(originFiltered[event.target.value].name)
    setOriginSelected(originFiltered[event.target.value])
    console.log(originSelected.name);
  }
  const handleSelectDestinationChange = event => {

    console.log(event.target.value);
    setDestinationSelected(destiationFiltered[event.target.value]);
  }
  return (
    <div className='container'>
      <div className='header'>
        <div className='center'>
          Hola
        </div>
        <div className='center'>
          <img src={shoppingCart}></img>
        </div>
      </div>
      <div className='form'>
        <div className='input-container'>
          <span className='icon'>
            <img src={flighttakeoff}></img>
          </span>
          <TextInput inputType="select" value={originText} label="Origen" placeHolder="New York JFK" onInputChange={handleOriginInput}/>
          {originText.length ?
            <select onChange={handleSelectOriginChange} value={originSelected.name}>
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
            <select onChange={handleSelectDestinationChange} value={destinationSelected}>

            </select>
            :
            ''
          }
        </div>

        <div className='input-container'>
          <span className='icon'>
            <img src={flight_land_black}></img>
          </span>
          <TextInput onInputChange={handlePassengersInput} value={passengersNumber} label="Pasajeros" placeHolder="" inputType="number"/>
        </div>
      </div>
    </div>
  )
}

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



