import React from 'react';
import './Portfolio.css';
import Card from 'react-bootstrap/Card';
//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';
//import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

//import CardGroup from 'react-bootstrap/CardGroup';

function Portfolio() {
    return (

        <CardDeck>
  <Card id='reliveCard'>
    <Card.Body>
     <Button id='reliveButton'> <Card.Title><a id='reliveColor' class="static-link" href="https://lamaprojects.github.io/project1/" >*reLive App</a></Card.Title></Button>
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
     <Button id='nodeButton'> <Card.Title><a id='nodeColor' class="static-link" href="https://friend-finder-aine.herokuapp.com/" >*Node App</a></Card.Title></Button>
      <Card.Text>
      A Language Interpretation and Recognition Interface command line.
       A command line node app that takes in parameters and gives back 
       data to users.
      </Card.Text>
    </Card.Body>
    <Card.Footer id='nodeFooter'>
     
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
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