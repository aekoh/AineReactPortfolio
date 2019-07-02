import React from "react";
import './About.css';


function About() {
    return (
        <div className="page-section" id="about">
        <div class="container" id="aboutMe">
          <h2 class="text-white font-weight-bold">About Me</h2>
          <p class="pStyle font-weight-bold">
            I am a Software Developer working In Austin, Texas. I have spent
            a couple of years in the technology field. My skillset includes but is not
            limited to React.JS, Node.Js JavaScript and Sequelize. I am also
            familiar with Github and Heroku. 
          </p>
          <p className="text-white font-weight-bold" id='p2'>
            In December 2018, I graduated from Texas Tech University then 
            immediately enrolled into the UT Austin Tech Boot Camp. My knowledge
            of Fullstack Development has grown since my enrollment in this bootcamp.
            I have gained knowledge that i believe will make me an asset to your company 
            through this program as well as my prior education from Texas Tech 
            University.
          </p>
          <p className="text-white font-weight-bold" id='p3'>
            I am currently looking for growth opportunities in Front-End or
            Full-Stack roles. I would love for you to review my work below.
          </p>
        </div>
      </div>    
    )
    }
export default About