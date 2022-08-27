import ItemDetail from "../ItemDetail/ItemDetail"; 
import { useEffect,useState,useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import {getDetail} from '../../Services/Firebase/Firestore'
import { useAsync } from "../../Hooks/useAsync";




const GetItemDetail=()=>{
    const {addItem} =useContext(CartContext)
    const {productId}=useParams()
    const {isLoading,data,error}=useAsync(()=>getDetail(productId),[productId])


    if (isLoading) {
        return(<h1>Obteniendo detalles del Producto</h1>)
    }

    if (error){
        return(<p>Hubo un Error</p>)
    }

    return(
        <div>
            <ItemDetail item={data} addItem={addItem}/>
        </div>
        

    )

}
export default GetItemDetail