import { useContext, useEffect, useState } from "react";

import MerchItem from "../components/MerchItem";
import { CartContext } from "../context/CartProvider";

import "../styles/merchitem.scss"


export default function Products() {
    const [merch, setMerch] = useState({});
    const [category, setCategory] = useState("");
    const { clearCart, addProduct } = useContext(CartContext); 
    
    function renderMerch () {
        return merch.map((product) => {

            return (
                 <MerchItem key={product.id} product={product} addProduct={addProduct} />
            );
        });
    }

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products${category}`)
        .then((res) => res.json())

        .then((data) => {
            Object.keys(data).forEach(key => data[key].qty = 0)
            setMerch(data);
        })
        .catch((err) => {
            console.error("Get Merch Error: ", err);
        });

    }, [category]);

    return(
        <div className="page-container">
            <div className="title">
                <h1>Products</h1> 
            </div>

            <div className= "filter-buttons">
                <button onClick={() => setCategory("/category/jewelery")}>
                    Jewelery
                </button>

                <button onClick={() => setCategory("/category/electronics")}>
                    Electronics
                </button>

                <button onClick={() => setCategory("/category/men's clothing")}>
                    Men's clothing
                </button>

                <button onClick={() => setCategory("/category/women's clothing")}>
                    Women's clothing
                </button>
            </div>

            <div>{merch.length > 0 ? renderMerch() : "...loading"}</div>

            <div className="button-wrapper">
                <button onClick={clearCart}>Clear Cart</button>
            </div>
      </div>
    );
}