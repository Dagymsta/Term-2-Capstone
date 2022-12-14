import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartProvider";


export default function SingleMerchItem(props){
    const [merch, setMerch] = useState({});
    const {addProduct}= useContext(CartContext)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
            .then((res) => res.json())

            .then((data) => setMerch(data))

            .catch((err)=> {
                console.error("get merch error: ", err);
            });

    },[props.match.params.id]);
    
    return (
        <div className="item">
                <h1>Product</h1>
            <div>
                <h3>
                    Item: {merch.title} Available: {merch.rating?.count}
                </h3>

                <p>{merch.description}</p>

                <p className="price">${merch.price}</p>

                <div className="img-wrapper">
                    <img src={merch.image} alt=""/>
                </div>

                <button onClick={() => addProduct(merch)}>
                Add to cart
                </button>
            </div>
        </div>
    );
}