import { useContext } from "react";

import { CartContext } from "../context/CartProvider";
import CartItems from "../components/CartItems";

export default function Cart({ children }) {
  const { cart, clearCart } = useContext(CartContext);

  function renderTotal() {
    if (cart.length > 0) {
      return cart.reduce((prev, curr) => prev + curr.price, 0);
    }

    return false;
  }

  function renderCart() {
    return cart.map((product) => {
      return <CartItems key={product.id} product={product} />;
    });
  }

  return (
    <div>
      <div className="title">
        <h1>Cart</h1>
      </div>

      <div className="product-wrapper">
        {renderCart()
        }</div>

      <div className="total-wrapper">
        <p>Your Total- ${renderTotal() || "0"}</p>

        <button>Check-Out</button>
      </div>
      
      <div className="clear-cart-wrapper">
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
}









