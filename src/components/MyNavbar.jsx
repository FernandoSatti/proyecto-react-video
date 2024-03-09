import React from "react";
import { Navbar, Container, Nav,} from "react-bootstrap";
import  CartWidget  from "./CartWidget"
import { Link } from "react-router-dom";

export default function MyNavbar() {
  return (
    <header>
      <Navbar expand="lg" className="nav">
        <Container className="container-nav">
          <Link to={"/"}>
          <Navbar.Brand  className="logo-name">
            <img src="https://firebasestorage.googleapis.com/v0/b/react-proyect-video.appspot.com/o/logo.png?alt=media&token=b16eae37-4e81-4bbc-bfd4-9ecb3c5f2c71" width={"50px"} alt="" />
            PixelEdit
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <li className="nav-item">
                <Link to={"/packs"} className="nav-link" >
                  <button className="button-nav">Packs</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/servicios/"} className="nav-link" >
                  <button className="button-nav">Servicios</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/nosotros"} className="nav-link" >
                  <button className="button-nav">acerca de nosotros</button>
                </Link>
              </li>
              
              <CartWidget/>
              <li className="nav-item li-toggle">
                <label className="switch">
                  <input type="checkbox" className="checkbox" />
                  <div className="slider"></div>
                </label>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </header>
  );
}
