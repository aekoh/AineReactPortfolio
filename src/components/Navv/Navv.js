import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import './Navv.css'

//  adding my html in a function within the return
//  Creating a function called Navv that will create a bootstrap navbar
//  exporting the function navv so i can use it in the App.js file
//  added .Collapse for navbar to be mobile responsive

function Navv() {
    return (

 
<Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="text-danger navSet">
<Container>
  <Navbar.Brand className='homeName font-weight-bold' href="#home">AE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav className='test'>
    <Nav.Link className='font-weight-bold' href="#aboutMe">About </Nav.Link>
      <Nav.Link className='font-weight-bold' href="#portfolioStyle">Portfolio </Nav.Link>
      <Nav.Link className='font-weight-bold' href="#skills">Skillset</Nav.Link>
     <Nav.Link className='font-weight-bold ' href="#contact">Contact</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
  </Container> 
</Navbar>




    )
}






export default Navv