
export default function Navbar(){

    return(
        <div className="navbar">
            <div className= "title-bar">
                <div className="logo">Logo</div>

                <div className="shopping-cart">Cart</div>
            </div>

            <div className= "product-link-bar">
                <button className="home">Home</button>
                <button className="products">Products</button>
                <button className="contact">Contact Us</button>
                <button className="about">About Us</button>
            </div>
        </div>
    )
}