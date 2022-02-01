import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./views/About";
import Cart from "./views/Cart";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import Header from "./views/Header";

import Product from "./views/Product";
import ProductDetails from "./views/ProductDetails";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
