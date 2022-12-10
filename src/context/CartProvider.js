import { useState, createContext } from "react";


export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart]=useState([]);


    //Kray was here lol.
  function addProduct(product) {
    let exists = false;
    let cartCopy = [...cart]

    cart.forEach((item, idx) => {
      if (item[0] === product){
        exists = true;
        cartCopy[idx][1].quantity = cartCopy[idx][1].quantity + 1;
      }
    })
    if (exists) {setCart(cartCopy)} else {setCart((c) => [...c, [product , {quantity:1}]]);}
  }
    // function addProduct(product) {
    //     // js array find, search???const productFound = cart.find(item => item.id === product.id)
    //     // see if you already have the product in your cart
    //       // if yes, update qty
    //       // if no, add a qty property with a value of 1
    //     // setCart state
    //       //
       
    //     setCart((c) => [...c, product]);
    // }

    function removeProduct(product){
        setCart((c) => product.filter(item => item.id !== product.id))
    }

    function clearCart() {
        if (window.confirm("Are you sure you want to remove your cart items?")) {
            setCart([]);
        }
    }

    const cartState = {
        cart,
        addProduct,
        clearCart,
        removeProduct
    };

    return (
        <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
    );
}