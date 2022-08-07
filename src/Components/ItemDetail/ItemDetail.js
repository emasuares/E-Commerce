import Counter from "../counter/counter"
import { useState } from "react"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';

const ItemDetail =({item})=>{
    const [quantity , setQuantity] = useState(0)
    const handleOnAdd=(stock,quantity)=>{
        if (stock!=0){
          console.log("Items Agregados Al Carrito", quantity)
          setQuantity(quantity)
        }else{
          console.log("No hay stock de este producto")
        }
      }
    return(
        <div>
            <div>
                <img src={item.img}></img>
            </div>
            <div>
                <p>{item.category}</p>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>${item.price}</p>
            </div>
            <div>
              {quantity>0 ? <Button variant="dark" as={Link} to='/cart'>Ir Al Carrito</Button> : <Counter initial={1} stock= {item.stock} onAdd={handleOnAdd} />}
           
            </div>
        </div>


    )

}

export default ItemDetail