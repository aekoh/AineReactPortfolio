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


      <div id="portfolioStyle">
      <h3 className="mb-4  text-center font-weight-bold portfolioStyle">
      Projects
    </h3>
      <CardGroup id='cardDeck' className='portfolioGroup text-center'>
  <Card className='relivebg'>
    <Card.Body>
      <Card.Title>JavaScript App - ReLive</Card.Title>

      <Card.Text>
      
        <Button 
     id='reliveButton'> <a id='reliveColor' className="static-link font-weight-bold" href ="https://relive-project1.herokuapp.com/" >*reLive App</a>
   </Button>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className='nodebg'>
    <Card.Body>
      <Card.Title >React.js App </Card.Title>
      <Card.Text>
   <Button 
     id='nodeButton'> <a id='nodeColor' className="static-link font-weight-bold" href="https://react-game-2.herokuapp.com/" >React App</a>
  </Button>
      </Card.Text>
    </Card.Body>
  </Card>

 
</CardGroup>


</div>









      

    )
    }
export default Portfolio