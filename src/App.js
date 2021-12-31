/* eslint-disable jsx-a11y/alt-text */
import { FlightsSearch } from './reactUIComponents/SearchFlightView';
import { CartView } from './reactUIComponents/cartView';
import shoppingCart from './icons/shoppingCart.svg'
import airplane from './icons/airplane.svg';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



const Header = () => {
  return (
    <div className='header'>
      <div className='center'>
        <Link to="/">
          <div className='center'>
            <img src={airplane}></img>  AeroVictor
          </div>
        </Link>
      </div>
      <div className='center'>
        <Link to="/cart">
          <img src={shoppingCart}></img>
        </Link>
      </div>
    </div>
  );
}


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<FlightsSearch />} />
          <Route path='cart' element={<CartView />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
