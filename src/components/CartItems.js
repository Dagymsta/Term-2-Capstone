import { Link } from "react-router-dom";



export default function CartItems(props) {
    const { image, id, description, title, price }= props.product;

    return(
        <div className="product-container">
            <h1>
                <Link to={`/products/${id}`}>{title}</Link>
            </h1>

            <img src={image} alt="" />
            
            <h3>{description}</h3>

            <h2>${price}</h2>

            
        </div>
    );
}