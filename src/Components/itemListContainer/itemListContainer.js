
import { useEffect, useState } from 'react'
import Itemlist from '../ItemList/itemList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../Services/Firebase';

const ItemListContainer = ({ greetings }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const params = useParams()
    const collectionRef = !params.categoryId
    ? collection(db, 'products')
    : query(collection(db, 'products'), where('category', '==', params.categoryId))
   

    useEffect(() => {
        
        
        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return ({ id: doc.id, ...doc.data() })
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [params.categoryId])






    if (loading) {
        return (<h1>Cargando Productos</h1>)
    }

    return (
        <Container >
            <h1>{greetings}</h1>
            <Row>
                <Itemlist products={products} />
            </Row>
        </Container>

    )
}

export default ItemListContainer