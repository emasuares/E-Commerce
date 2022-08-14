import './Navbar.css'
import Button from '../button/button'
import Cartwidget from '../Cartwidget/Cartwidget'
import {Link} from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const Navbar = () => {
    const {cart}=useContext(CartContext)
    if (cart.length !==0){
    return (
            <nav className='navbar'>
                <div className='options' >
                Las Morenas
                 </div>
                 <div className='cartContainer'>
                    <div className='cartContainer'>
                        <Link className='btn' to='/'>Inicio</Link>
                        <NavDropdown title="Productos" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to={'category/Camisas'} href="#action3">Camisas</NavDropdown.Item>
                       <NavDropdown.Item as={Link} to={'category/Sweaters'} href="#action4">Sweaters</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'category/Pantalones'} href="#action5">Pantalones</NavDropdown.Item>
                        </NavDropdown>
                        <Button>Contacto</Button>
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
                        <NavDropdown title="Productos" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to={'category/Camisas'} href="#action3">Camisas</NavDropdown.Item>
                       <NavDropdown.Item as={Link} to={'category/Sweaters'} href="#action4">Sweaters</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'category/Pantalones'} href="#action5">Pantalones</NavDropdown.Item>
                        </NavDropdown>
                        <Button>Contacto</Button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar