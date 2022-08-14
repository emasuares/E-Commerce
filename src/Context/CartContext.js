import { useState, createContext } from "react";      

export const CartContext =createContext()

export const CartContextProvider =({children})=>{
const [cart,setCart] = useState([])



 const addItem =(productToAdd)=>{
    if(!isInCart(productToAdd.id)){
  setCart([...cart, productToAdd])
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

    return (
        <CartContext.Provider value ={{cart , addItem , isInCart, removeItem ,getQuantity, getProductQuantity , clearCart}}>
            {children}
            </CartContext.Provider>
    )

}


    
