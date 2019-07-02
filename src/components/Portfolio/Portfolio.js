import React from 'react';
import './Portfolio.css';
import Card from 'react-bootstrap/Card';
//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';
//import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

//  adding my html in a function within the return
//  Created function called Portfolio with Bootstrap frameworks.
//  Using cards with buttons laid over to target specified links
//  exported the function for use in the App.js file

function Portfolio() {
    return (

        <CardDeck id='cardDeck'>
  <Card id='reliveCard'>
    <Card.Body>
     <Button id='reliveButton'> <Card.Title><a id='reliveColor' className="static-link" href="https://lamaprojects.github.io/project1/" >*reLive App</a></Card.Title></Button>
      <Card.Text>
      This app uses JavaScript to allow users to search an artist's
       setlist from setlist.fm API and generate a created playlist 
       in Spotify through use of Spotify API.
      </Card.Text>
    </Card.Body>
    <Card.Footer id='reliveFooter'>
    
    </Card.Footer>
  </Card>
  <Card id='nodeCard'>
    <Card.Body>
     <Button id='nodeButton'> <Card.Title><a id='nodeColor' className="static-link" href="https://friend-finder-aine.herokuapp.com/" >*Node App</a></Card.Title></Button>
      <Card.Text>
      Uses Node Js and Express to build a Friend finder application.
      </Card.Text>
    </Card.Body>
    <Card.Footer id='nodeFooter'>
     
    </Card.Footer>
  </Card>
  <Card id='reactCard'>
    <Card.Body>
    <Button id='reactButton'> <Card.Title><a id='nodeColor' className="static-link" href="https://friend-finder-aine.herokuapp.com/" >*React App</a></Card.Title></Button>
      <Card.Text>
       Mapping Tool
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
   


    )
    }
export default Portfolio