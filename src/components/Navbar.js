import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navbar(){
    
    return(
        <div className="navbar">
            <div className= "title-bar">
                <div className="logo-wrapper">
                    <div className="logo">
                        <FontAwesomeIcon icon="fas fa-user-astronaut" />
                        <span>SpaceMercMerch</span>
                    </div>
                </div>

                <div className="shopping-cart">
                    <NavLink className= "shopping-cart-button" to="/cart">
                        <FontAwesomeIcon icon="shopping-cart" /> 
                    </NavLink>
                </div>
            </div>

            <div className= "product-link-bar">
                <NavLink className="nav-button" to="/home">Home</NavLink>
                <NavLink className="nav-button" to="/products">Products</NavLink>
                <NavLink className="nav-button" to="/contact">Contact Us</NavLink>
                <NavLink className="nav-button" to="/about">About Us</NavLink>
            </div>
        </div>
    )
}