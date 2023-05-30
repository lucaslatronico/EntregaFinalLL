import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetalContainer';
import Cart from './Components/Cart/Cart';

import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path= '/' element={<ItemListContainer/>}/>
          <Route path= '/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path= '/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path= '/cart' element={<Cart/>} />
          <Route path= '*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
