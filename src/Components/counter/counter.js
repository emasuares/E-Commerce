import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import './counter.css'


const Counter =({initial,stock,onAdd}) => {
    const [count, setcount ] = useState(1)

    const increment =() =>{
        if (count<stock && stock!=0){
            setcount(count+1)
        }
        
    }

    const decrement =() =>{
        if (count>initial && stock!=0) {
            setcount(count-1)
        }
        
    }

    return (
        <div>
            <div className='counterDiv'>
            <Button variant="dark" size='sm' onClick={decrement}>-</Button>
            <h1>{count}</h1>
            <Button variant="dark" size='sm' onClick ={increment}>+</Button>
            </div>
            <Button variant='dark' onClick={()=>onAdd(stock,count)}>Agregar al Carrito</Button>
        </div>
    )
}

export default Counter