import { NavLink } from "react-router-dom";

import "../styles/navbar.scss";
import "../styles/home.scss";
import "../styles/footer.scss";
import "../styles/products.scss";
import "../styles/contact.scss";
import "../styles/cartitems.scss";
import "../styles/cart.scss";
import "../styles/singlemerchitem.scss";
import "../styles/about.scss";

export default function Home() {
  return (
    <div className="page-container">
      <div className="main-page-content">
        <div className="clothing-ad-container">
          <div className="image-left">
            <div className="advertisement">
              <div className="ad-button-wrapper">
                <NavLink className="buttons" to="/products">
                  Products
                </NavLink>
                <NavLink className="buttons" to="/contact">
                  Contact Us
                </NavLink>
                <NavLink className="buttons" to="/about">
                  About
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
