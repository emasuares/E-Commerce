import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import './counter.css'



const Counter =({initial,stock,onAdd}) => {
    const [count, setcount ] = useState(initial)


    const increment =() =>{
        if (count<stock && stock!==0){
            setcount(count+1)
        }
        
    }

    const decrement =() =>{
        if (count>1 && stock!==0) {
            setcount(count-1)
        }
    }

    if (stock===0){
        return(<h2>No hay Stock de este producto</h2>)
    }
    else{
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
    

    
}

export default Counter