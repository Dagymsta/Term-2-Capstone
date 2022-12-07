import { NavLink} from 'react-router-dom';


export default function Navbar(){

    return(
        <div className="navbar">
            <div className= "title-bar">
                <div className="logo">Logo</div>

                <div className="shopping-cart">Cart</div>
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