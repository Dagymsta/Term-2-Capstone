import { useContext, useEffect, useState } from "react";

import MerchItem from "../components/MerchItem";
import { CartContext } from "../context/CartProvider";


export default function Products() {
    const [merch, setMerch] = useState({});
    const { clearCart, addProduct } = useContext(CartContext); 
    
    function renderMerch () {
        return merch.map((product) => {
            return (
                 <MerchItem key={product.id} product={product} addProduct={addProduct} />
            );
        });
    }

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())

        .then((data) => {
            setMerch(data);
        })
        .catch((err) => {
            console.error("Get Merch Error: ", err);
        });
    }, []);

    return(
        <div>
            <div className="title">
                <h1>Products</h1>
            </div>
            <div>{merch.length > 0 ? renderMerch() : "...loading"}</div>
            <div>
                <button onClick={clearCart}> Clear Cart</button>
            </div>
        </div>
    );
}