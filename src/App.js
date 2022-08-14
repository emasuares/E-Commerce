
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetItemDetail from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {CartContextProvider} from './Context/CartContext'
import {UserContextProvider} from './Context/userContext'
import {CartView} from './Components/Cart/Cart'
function App() {
  

  return (
    <div className="App">
      <UserContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={ <ItemListContainer greetings='Todos Nuestros Productos'/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greetings='Productos'/>}></Route>
              <Route path='/detail/:productId' element={<GetItemDetail/>} />
              <Route path='/cart' element={<CartView/>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
