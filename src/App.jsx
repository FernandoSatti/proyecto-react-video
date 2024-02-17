import React from "react";
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemlistContainer.jsx";
import Footer from "./components/footer.jsx";
import Item from "./components/Item.jsx";
import Cart from "./components/Cart.jsx";
import ItemDetailsContainer from "./components/ItemDetailsContainer.jsx";
import Checkout from "./components/Checkout.jsx";
import NotFound from "./components/NotFound.jsx";
import Categories from "./components/categories.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/category/:cid" element={<ItemListContainer />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/servicios/" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
