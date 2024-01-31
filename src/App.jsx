
import React from 'react';
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import "./styles/index.css";
import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemlistContainer.jsx';
import Footer from './components/footer.jsx';



const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Contrata nuestro servicio como editores de video" />
      <Footer/>
    </>
  );
}

export default App;


