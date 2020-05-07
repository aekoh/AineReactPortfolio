import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import './Main.css'

//  adding my html in a function within the return
//  Creating a function called Main wrapped in a container, the function will take in and image for a background and i will then export the function for use in App.js file.
//  I set Id and Class names for style.css use.
//  This code will stack the column on mobile devices by making my image full width

function Main() {
    return (
        

      
<Container className="bgc">
<Row>
  <Col>
  <br>
  </br>
  <br>
  </br>
  <br>
  </br>
  <br>
  </br>
  <br>
  </br>
  <h1 className="font-weight-bold">AINE EKOH</h1>
  <h4 className="font-weight-bold" >Scrum master CSM | Software developer</h4>
  <br>
  </br>

  <h4>Experienced IT Scrum master and front end Web developer.</h4>
<br>
</br>
<br>
</br>
<h4 className="cnt">Let's Connect:</h4>



<section className="page-section font-weight-bold" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
            
              <hr className="divider my-4" id='brColor' />
              
            </div>
          </div>
          <div className="row" id="contactInfo">
            <div className="col-sm-4 ml-auto text-center">
              <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
    
            </div>
            <div className="col-sm-4 col-md-auto text-center" id="icons">
              <a
                className="icons"
                href="https://github.com/aekoh?tab=repositories"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="55"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  preserveAspectRatio="xMidYMin"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  ></path></svg></a>
              <a className="icons" href="https://docs.google.com/document/d/1fnVAoyfUg0ViHoUWpkcExL5AZsR3qqjDmnFGYb7QeZE/edit?usp=sharing"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="55"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  preserveAspectRatio="xMidYMin"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                  ></path>
                  <polyline points="13 2 13 9 20 9"></polyline></svg></a>
              <a className="icons" href="https://www.linkedin.com/in/aine-ekoh-9b2601134/"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="55"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  preserveAspectRatio="xMidYMin"
                  strokeLinejoin="round"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  ></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle></svg ></a>
            </div>
            <div className="col-sm-4 mr-auto text-center">
              <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
            <br>
            </br>
              <a className="d-block" id='email' href="mailto:aineekohhh@gmail.com"
                >aineekohhh@gmail.com</a>


            </div>
           
          </div>
        </div>
        <br></br>
        <br></br>
        
     
      </section>




  
  
  </Col>
<Col>
  <header className="masthead">
        <div className="container h-100">
          <div
            className="row h-100 align-items-center justify-content-center text-right"
          >
            <div className="col-lg-10 align-self-end">
             
              <hr className="divider my-4" id="mastheadBreak" />
            </div>
          </div>
        </div>
      </header>
  </Col>
</Row>
</Container>




           
    )
    }
export default Main 