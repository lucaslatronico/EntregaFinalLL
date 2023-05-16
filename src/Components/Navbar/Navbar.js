import CartWidget from "../CartWidgets/CartWidget"
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import { Button } from "react-bootstrap"


const Navbar = ()=>{
    return(
        <nav className="NavBar">
            <Link className='Link' to='/'>
                {<h2>Tienda de Ron</h2>}
            </Link>
            <div className="Categories">
                <Button variant="light"><NavLink to={`/category/Tradicional`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Tradicional </NavLink></Button>
                <Button variant="light"><NavLink to={`/category/Premium`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Premium</NavLink></Button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar