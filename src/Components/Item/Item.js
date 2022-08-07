

import Button from '../button/button'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';



 
  const Item= ({id,name,price,category,img,stock,description})=>{
   


  return (
    <Card style={{ width: '18rem',margin:'3rem', }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>${price}</Card.Text>
    <Link className='btn' to={`/detail/${id}`} >Ver Detalle</Link>
    </Card.Body>
    </Card> 
  );
}

export default Item

