import { useState, createContext, useEffect } from "react";      
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const CartContext =createContext()

export const CartContextProvider =({children})=>{
const [cart,setCart] = useState([])
const [total,setTotal]=useState(0)


 const addItem =(productToAdd)=>{
    const MySwal = withReactContent(Swal)
    if(!isInCart(productToAdd.id)){
    setCart([...cart, productToAdd]) 
    new MySwal({
        title: 'Se agregaron '+productToAdd.quantity+' productos al carrito!',
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: false,
        timer:'1500',
        position: "top-end",
      })   
    }else {
        const cartUpdated= cart.map(prod=> {
           if(prod.id===productToAdd.id){
            const productUpdated ={
                ...prod ,
                quantity:productToAdd.quantity
            }
           return productUpdated

           }else {
            return prod
           }
        })
        setCart(cartUpdated)
        
    }
}


const removeItem =(id)=>{
    const cartWithoutItem= cart.filter(prod=> prod.id!==id)
    setCart(cartWithoutItem)
}

const getProductQuantity =(id)=>{
    const product = cart.find(prod=> prod.id ===id)
    return   product ? product.quantity:1

} 

const getQuantity =()=>{
    let count=0
    cart.forEach(prod=>{count+=prod.quantity})
    return count
}

const isInCart =(id) =>{
    return cart.some (prod=> prod.id === id)
}

const clearCart =()=>{
    setCart([])
}
        
        useEffect(()=>{
            if(cart.length !== 0){
                let addition=0;
                cart.map(prod=>
                    addition+=prod.quantity*prod.price
                )
                setTotal(addition)
            }
            },[cart])
    return (
        <CartContext.Provider value ={{cart , addItem , isInCart, removeItem ,getQuantity, getProductQuantity , clearCart,total}}>
            {children}
            </CartContext.Provider>
    )

}


    
