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
          A dynamic technology professional who is motivated to better the lives of customers throughout 
          the use of technology innovation. I am a Technical Scrum master/ Software developer with a proven 
          history of working in the tech and healthcare industry. Strong CSM management and technical skills 
          with the ability to solve impediments in cross-functional teams. 
          </p>
          <p className=" font-weight-bold" id='p2'>
            I graduated from Texas Tech university with a Bachelors in Science. 
            After graduation, I enrolled in the University of Texas-Austin Tech Boot Camp where i gained
            professional technical skills. I am now a candidtate for George Washington University's 
            Masters in Science in Engineering management.

          </p>
          <p className=" font-weight-bold" id='p3'>
            I am currently looking for growth opportunities in Scrum master/Program management roles.
          </p>
        </div>
      </div>    
    )
    }
export default About