
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetItemDetail from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {CartContextProvider} from './Context/CartContext'
import {CartView} from './Components/Cart/Cart'
import {CheckOut} from './Components/CheckOut/CheckOut'
function App() {
  

  return (
    <div className="App">
        <CartContextProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={ <ItemListContainer greetings='Todos Nuestros Productos'/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greetings='Productos'/>}></Route>
              <Route path='/detail/:productId' element={<GetItemDetail/>} />
              <Route path='/cart' element={<CartView/>} />
              <Route path='/checkout' element={<CheckOut/>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
