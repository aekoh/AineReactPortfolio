import React from "react";
import './About.css';

// adding my html in a function within the return
// Creating a function called About using p tags wrapped in a container, i will then export the function for use in App.js file
// set Id and Class names for style.css use

function About() {
    return (
        <div className="page-section" id="about">
        <div className="container" id="aboutMe">
          <h2 className="aboutMeStyle font-weight-bold">About Me</h2>
          <p className="pStyle font-weight-bold">
            I am a Software Developer working In Austin, Texas. I have spent
            a couple of years in the technology field. My skillset includes but is not
            limited to React.JS, Node.Js, Vanilla JavaScript, AJAX, API's, MongoDB,
             jQuery, express, HTML, CSS, and Sequelize. I am also
            familiar with Github and Heroku. 
          </p>
          <p className=" font-weight-bold" id='p2'>
            I graduated and completed my undergrad from Texas Tech University. I enrolled
            in a proffesional post grad - Advanced technical degree program with hands on experience at the
            University of Texas-Austin Tech Boot Camp. 
          </p>
          <p className=" font-weight-bold" id='p3'>
            I am currently looking for growth opportunities in Software Development roles
            My work is yours for review below.
          </p>
        </div>
      </div>    
    )
    }
export default About