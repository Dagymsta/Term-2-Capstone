import { NavLink} from 'react-router-dom';

// import Products from "./Products"

import "../styles/navbar.scss"
import "../styles/home.scss"
import "../styles/footer.scss"

export default function Home() {

    return(
    <div className="page-container">

        <div className="main-page-content">

            <div className="clothing-ad-container">
                <div className="image-left">Image</div>

                <div className="advertisement">
                    <div className="ad-button-wrapper">
                        <NavLink className="buttons" to="/products">Products</NavLink>

                        <NavLink className="buttons" to="/contact">Contact Us</NavLink>

                        <NavLink className="buttons" to="/about">About</NavLink>

                    </div>
                </div>
            </div>
        </div>  
    </div>
    )
 }

// import {Routes, Route, useNavigate} from 'react-router-dom';

// export default function App() {
//   const navigate = useNavigate();

//   const navigateToContacts = () => {
//     // 👇️ navigate to /contacts
//     navigate('/contacts');
//   };

//   const navigateHome = () => {
//     // 👇️ navigate to /
//     navigate('/');
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={navigateHome}>Home</button>
//         <hr />
//         <button onClick={navigateToContacts}>Contacts</button>

//         <Routes>
//           <Route path="/contacts" element={<Contacts />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function Contacts() {
//   return <h2>Contacts</h2>;
// }
