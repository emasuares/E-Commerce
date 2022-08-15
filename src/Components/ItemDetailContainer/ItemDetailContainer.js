import ItemDetail from "../ItemDetail/ItemDetail"; 
import { useEffect,useState,useContext } from "react";
//import { getItem } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { getDoc,doc } from "firebase/firestore";
import { db } from "../../Services/Firebase";


const GetItemDetail=()=>{
    const {addItem} = useContext(CartContext)
    const [loading,setLoading]=useState(true)
    const [item,setItem]=useState({})
    const params =useParams()

    useEffect(()=>{
        getDoc(doc(db,'products',params.productId)).then(response=>{
            const product={id:response.id,...response.data()}
            setItem(product)
        }).catch(error => {
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
        },[])


    if (loading) {
        return(<h1>Obteniendo detalles del Producto</h1>)
    }

    return(
        <div>
            <ItemDetail item={item} addItem={addItem}/>
        </div>
        

    )

}
export default GetItemDetail