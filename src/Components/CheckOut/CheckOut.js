import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext,  useState } from 'react'; 
import { CartContext } from '../../Context/CartContext';
import {addDoc, getDocs, collection, Timestamp, documentId ,query,where,writeBatch} from 'firebase/firestore'
import {db} from '../../Services/Firebase/index'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';

    
export const CheckOut =()=>{
    const {cart,total,clearCart}=useContext(CartContext)
    const [buyerData,setBuyerData]=useState({nombre:"",mail:"",tel:0})
    const [outOfStock, setOutOfStock]=useState(false)
    const [showOutOfStock,setShowOutOfStock]=useState([])
    const MySwal = withReactContent(Swal)
    const navigate=useNavigate()
    
    

      // cuando el susuario hace submit en el formulario ,tomo todos los datos y los agrego a los datos de contenido del carrito , importe total de la compra y fecha de la compra
      // Verifico en Firestore que el producto realmente tenga stock para que se pueda generar la orden , si el producto esta fuera de stock la orden no se genera .
      // si se genero la orden correctamente actualizo el stock de los productos de Firestore
      const HandleSubmit = async (e)=>{
        e.preventDefault()
        const orderData={buyerData,cart,total,date: Timestamp.fromDate(new Date())}
        const batch =writeBatch(db)
        const ProdInCartId = cart.map(prod=>prod.id)
        const orderProductsFromFirestore= await getDocs(query(collection(db,'products'),where(documentId(),'in', ProdInCartId)))
        const {docs} = orderProductsFromFirestore
        const withoutStock=[]
        docs.forEach(doc => {
          const docData = doc.data()
          const stockInDb = docData.stock
          const prodAddedInCartId=cart.find(prod=> prod.id===doc.id)
          const quantityProdInCart=prodAddedInCartId?.quantity
          if ( stockInDb>=quantityProdInCart){
            batch.update(doc.ref, {stock:stockInDb-quantityProdInCart})
          }else{
            setOutOfStock(true)
            setShowOutOfStock(withoutStock)
            withoutStock.push({id:doc.id, ...docData})
          }
          })
          //si no hay ningun producto fuera de stock genero la orden y la guardo en Firestore , enviando una alerta de que se genero correctamente
          if (withoutStock.length === 0 ){
              addDoc(collection(db,'ordenes'),orderData).then(response=>{
              const idOrder=response.id
              batch.commit()
              new MySwal({
                title: 'Se genero tu orden!',
                text: "Id de tu orden= "+idOrder,
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
              }).then((result) => {
                    navigate('/') 
              })
              clearCart()    
              })
          }  
      }

      // si el producto esta fuera de stock envio un mensaje diciendo cual es 
      if (outOfStock===true){
        const show=showOutOfStock.map(prod=>prod.name)
        console.log(show)
        new MySwal({
          title:"Orden no Generada",
          text:"Producto/s "+show+" Fuera de Stock",
          position:'center',
          icon:'error',
          showConfirmButton:'false',
       })
      }

      // monitoreo los cambios en los datos del comprador
      const handleChange=(e)=> { 
       const { target } = e;
      const { name, value } = target; 
       const newValues = {
        ...buyerData,
        [name]: value,
      }; 
       setBuyerData(newValues);
    }
    
   

    return (
      <div className='checkout'>
      <Form onSubmit={HandleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label htmlFor="nombre">Nombre</Form.Label>
        <Form.Control
          id="nombre"
          name="nombre"
          type="text"
          value={buyerData.nombre}
          onChange={handleChange}
        />
        <Form.Label htmlFor="mail">Email</Form.Label>
        <Form.Control
          id="mail"
          name="mail"
          type="email"
          value={buyerData.mail}
          onChange={handleChange}
        />
        <Form.Label htmlFor="tel">Telefono</Form.Label>
        <Form.Control
          id="tel"
          name="tel"
          type="tel"
          value={buyerData.tel}
          onChange={handleChange}
        />
        </Form.Group>
        <Button type="submit">Finalizar Orden</Button>
      </Form>
      </div>
    );
  } 
