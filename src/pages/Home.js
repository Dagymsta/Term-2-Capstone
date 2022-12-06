import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


import "../styles/navbar.scss"
import "../styles/home.scss"
import "../styles/footer.scss"

export default function Home() {
    

    return(
    <div className="page-container">
        < Navbar/>

        <div className="main-page-content">

            <div className="clothing-ad-container">
                <div className="image-left">Image</div>

                <div className="advertisement">
                    <div className="ad-button-wrapper">
                        <button className="products">Products</button>

                        <button className="contact">Contact Us</button>

                        <button className="about">About</button>
                    </div>
                </div>
            </div>
        </div>
        
        < Footer/>
    </div>
    )
}