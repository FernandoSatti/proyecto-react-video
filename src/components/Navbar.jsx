import React from "react";
import { Navbar, Container, Nav,} from "react-bootstrap";
import CartWidget from "./CartWidget";
import logo from '../../public/img/logo.png';
import { Link } from "react-router-dom";

export default function MyNavbar() {
  return (
    <header>
      <Navbar expand="lg" className="nav">
        <Container className="container-nav">
          <Navbar.Brand href="#home" className="logo-name">
            <img src={logo} width={"50px"} alt="" />
            PixelEdit
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  <button className="button-nav">Packs</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#link">
                  <button className="button-nav">Servicios</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#link">
                  <button className="button-nav">acerca de nosotros</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#link"></a>
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
      <div className="div-main">
        <h1 className="h1-header">Contrata nuestro servicio como editores de video</h1>
        <p>llevamos años de experiencia con diferentes categorías de videos</p>
        <a href="#">
          <button className="button-header">
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
              CONOCE NUESTROS SERVICIOS
            </span>
          </button>
        </a>
      </div>
      <div className="video-container">
        <video autoPlay muted loop>
          <source src="../liquid-divinum_1.webm" type="video/webm" />
        </video>
      </div>
    </header>
  );
}
