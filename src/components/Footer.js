import { NavLink } from "react-router-dom"
export default function Footer() {

    return(
    <div className="footer">
            <NavLink className="footer-button" to="/about">About</NavLink>

            <NavLink className="footer-button" to="/contact">Contact</NavLink>

            <NavLink className="footer-button" to="/cart">Cart</NavLink>

        </div>
    )
}