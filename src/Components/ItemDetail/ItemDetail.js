import Counter from "../counter/counter"
import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import {CartContext} from "../../Context/CartContext";

const ItemDetail =({item})=>{
    const {addItem,getProductQuantity} = useContext(CartContext)
    const [quantity , setQuantity] = useState(0)
    const quantityAdded =getProductQuantity(item.id)
    const handleOnAdd=(stock,quantity)=>{
        if (stock!==0){
          setQuantity(quantity)
          addItem({...item,quantity})
        }else{
          console.log("No hay stock de este producto")
        }
      }
    return(
        <div>
            <div>
                <img alt="imagen de producto" src={item.img}></img>
            </div>
            <div>
                <p>{item.category}</p>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>${item.price}</p>
            </div>
            <div>
              {quantity>0 ? <Button variant="outline-dark" as={Link} to='/cart'>Ir Al Carrito</Button> : <Counter initial={quantityAdded} stock= {item.stock} onAdd={handleOnAdd} />}
           
            </div>
        </div>


    )

}

export default ItemDetail