import { Link } from "react-router-dom";

export default function CartItems(props) {
    const { image, id, description, title }= props.product;

    return(
        <div>
            <h5>
                <Link to={`/products/${id}`}>{title}</Link>
            </h5>

            <img src={image} alt="" />
            
            <h4>{description}</h4>
        </div>
    );
}