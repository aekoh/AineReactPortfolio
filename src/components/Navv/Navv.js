import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './Navv.css'


function Navv() {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" id="" variant="dark" className="navColor">
  <Navbar.Brand href="#home">Aine Ekoh</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="#aboutMe">About </Nav.Link>
      <Nav.Link href="#cardDeck">Portfolio </Nav.Link>
      <Nav.Link href="#skills">Skillset</Nav.Link>
     <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    )
}






export default Navv