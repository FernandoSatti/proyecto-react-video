
import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from './Cartwidget';


export default function MyNavbar()  {
  return (
    <header>
      <Navbar expand="lg" className="bg-danger" id="navbar-content">
        <Container className="container-nav xd">
        <Navbar.Brand className= "pixeledit ms-3 btn btn-outline button-nav" href="./index.html">PixelEdit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent" className='justify-content'>
          <Nav className="m-auto">
            <Nav.Link className="nav-links" href="./packs.html">Packs</Nav.Link>
            <Nav.Link className="nav-links" href="#">Servicios</Nav.Link>
            <NavDropdown className= "dropdown"title="Tipo de Edicion" id="basic-nav-dropdown">
              <NavDropdown.Item className="drop-link" href="#">Instagram</NavDropdown.Item>
              <NavDropdown.Item className="drop-link" href="#">Youtube</NavDropdown.Item>
              <NavDropdown.Item className="drop-link" href="#">TikTok</NavDropdown.Item>
            </NavDropdown>
          </Nav>
            
          <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline button-nav" type="submit">Buscar</button>
          </form>
        
        </Navbar.Collapse>
        <CartWidget />
        </Container>
      </Navbar>
    </header>
  );
};
