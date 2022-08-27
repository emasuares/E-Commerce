import Itemlist from '../ItemList/itemList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { GetProducts } from '../../Services/Firebase/Firestore';
import { useParams } from 'react-router-dom';
import { useAsync } from '../../Hooks/useAsync';

const ItemListContainer = ({ greetings }) => {
    const {categoryId}=useParams()
    const {isLoading,data,error}=useAsync(()=>GetProducts(categoryId),[categoryId])

    if (isLoading) {
        return (<h1>Cargando Productos</h1>)
    }
    if(error){
        return(<p>Hubo un error</p>)
    }

    return (
        <Container >
            <h1>{greetings}</h1>
            <Row>
                <Itemlist products={data} />
            </Row>
        </Container>

    )
}

export default ItemListContainer