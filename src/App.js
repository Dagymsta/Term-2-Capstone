import { BrowserRouter, Switch, Route } from "react-router-dom";


import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CartProvider from "./context/CartProvider"
import SingleMerchItem from "./pages/SingleMerchItem";

export default function App() {
  return (
   <div className="App">
    <BrowserRouter>
      <CartProvider>
       <Switch> 
        <>
      <Navbar/>
        <Route path="/" exact component={Home}/>
        <Route path= "/home" component={Home}/>
        <Route exact path= "/products" component={Products}/>
        <Route path="/products/:id" component={SingleMerchItem}/>
        <Route path= "/contact" component={Contact}/>
        <Route path= "/about" component={About}/>
        <Route path= "/cart" component={Cart}/>
      <Footer/>
        </>
      </Switch> 
    </CartProvider>
    </BrowserRouter>
   </div>
  );
}


