import { Link } from "react-router-dom";


export default function MerchItem(props) {
    const { image, id, description, title }= props.product;

    function Truncate() {
        function renderTruncatedChild() {
          if (description.length <= 30) {
            return description;
          }
    
          return (
            description.slice(0, 30) +
            `${description.ellipses ? description.ellipses.repeat(10) : "..."}`
          );
        }
        return renderTruncatedChild();
      }

    return(
        <div className="item">
            <h5>
                <Link to={`/products/${id}`}>{title}</Link>
            </h5>

            <img src={image} alt="" />

            <h3>{Truncate()}</h3>
            
            <button onClick={() => props.addProduct(props.product)}>
                Add to cart
            </button>
        </div>
    );
}