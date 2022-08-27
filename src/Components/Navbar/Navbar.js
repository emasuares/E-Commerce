import './Navbar.css'
import Cartwidget from '../Cartwidget/Cartwidget'
import {Link} from 'react-router-dom'
import { useEffect, useState} from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { getCategories } from '../../Services/Firebase/Firestore'

const Navbar = () => {
    const {cart}=useContext(CartContext)
    const [categories, setCategories] = useState([])
    
   
        useEffect(()=>{
            getCategories().then(response=>{
                setCategories(response)
            }).catch(error=>{
                console.log(error)
            })
        },[])
            
    

    





    if (cart.length !==0){
    return (
            <nav className='navbar'>
                <div className='options' >
                Las Morenas
                 </div>
                 <div className='cartContainer'>
                    <div className='cartContainer'>
                        <Link className='btn' to='/'>Inicio</Link>
                            {categories.map(category=><Link key={category.id} className='btn' as={Link} to={`category/${category.description}`} >{category.description}</Link>)}
                    </div>
                    <div>
                        <Cartwidget/>
                    </div>
                </div>
            </nav>
    )
    }else {
        return (
            <nav className='navbar'>
                <div className='options' >
                Las Morenas
                 </div>
                 <div className='cartContainer'>
                    <div className='cartContainer'>
                        <Link className='btn' to='/'>Inicio</Link>
                        {categories.map(category=><Link key={category.id} className='btn' as={Link} to={`category/${category.description}`} >{category.description}</Link>)}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar