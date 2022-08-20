import Table from 'react-bootstrap/Table';
import { useContext } from 'react';
import { CartContext} from '../../Context/CartContext';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export const CartView =()=>{
    const {cart , removeItem, clearCart,total} = useContext(CartContext)
    if(cart.length !== 0){ 
        return(
            <div>
                <h1>Carrito de Compras</h1>
                <Table>
                    <tbody>
                    {cart.map(prod=>
                        <tr key={prod.id} >
                            <td>Producto: {prod.name}</td>
                            <td>Cantidad: {prod.quantity}</td>
                            <td>${prod.price}</td>
                            <td>Subtotal: ${prod.price*prod.quantity}</td>
                            <td><Button onClick={()=>removeItem(prod.id)} variant="danger">Eliminar</Button></td>
                        </tr>)}
                    </tbody>
                </Table>
                <div>TOTAL :${total}  </div>
                <Button onClick={()=>clearCart()}>Vaciar Carrito</Button>
                <Button as={Link} to={'/checkout'}>Terminar Compra</Button>
            </div>
        )
         }else {
            return (
                <div>
                <h1>Tu Carrito esta Vacio...</h1>
                <p>Puedes ver nuestros productos haciendo click aqui</p>
                <Button as={Link} to={'/'}>Productos</Button>
                </div>
            )
         } 
}

