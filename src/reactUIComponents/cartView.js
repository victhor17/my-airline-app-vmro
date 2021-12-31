import React, { useEffect, useState }  from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import './styles.css'

const allCartItemsSelector = state => state.shopingCart;

export const CartView = () => {
  const dispatch = useDispatch();

  const [cartArray, setCartArray] = useState([]);
  const [isCanShowCart, setIsCanShowCart] = useState(false)

  const cartItems = useSelector(allCartItemsSelector);
  useEffect(() => {
    setCartArray(cartItems)
    const canShow = Boolean(cartItems.length)
    setIsCanShowCart(canShow)
  }, [cartItems])



  return (
    <div className='form'>
    {isCanShowCart ?
      <h1> ya hay vuelos xd  </h1>
     : <div>
       No hay vuelos en el carrito
       </div>}
    </div>
  )
}