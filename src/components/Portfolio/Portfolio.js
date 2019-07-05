import React from 'react';
import './Portfolio.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';


//  adding my html in a function within the return
//  Created function called Portfolio with Bootstrap frameworks.
//  Using cards with buttons laid over to target specified links
//  exported the function for use in the App.js file

function Portfolio() {
    return (



      <CardGroup className='portfolioGroup'>
  <Card className='relivebg'>
    <Card.Body>
      <Card.Title>User Auth and Javascript App</Card.Title>
      <Card.Text>
        <Button 
     id='reliveButton'> <a id='reliveColor' className="static-link" href="https://lamaprojects.github.io/project1/" >*reLive App</a>
   </Button>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className='nodebg'>
    <Card.Body>
      <Card.Title>Node.js/Express application</Card.Title>
      <Card.Text>
   <Button 
     id='nodeButton'> <a id='nodeColor' className="static-link" href="https://friend-finder-aine.herokuapp.com/" >*Node App</a>
  </Button>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className='reactbg'>
    <Card.Body>
      <Card.Title>React Application</Card.Title>
      <Card.Text>
        <Button
    id='reactButton'> <a id='nodeColor' className="static-link" href="https://greenatx.herokuapp.com/" >*React App</a>
  </Button>
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>












      

    )
    }
export default Portfolio