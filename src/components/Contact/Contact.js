import React from 'react';
import './Contact.css';


//  adding my html in a function within the return
//  Creating a function called Contact using a tags and paths wrapped in a container, i will then export the function for use in App.js file.
//  I set Id and Class names for style.css use.


function Contact() {
    return(
        <section className="page-section font-weight-bold" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0 font-weight-bold">Contact Me</h2>
              <hr className="divider my-4" id='brColor' />
              <p className=" mb-5">Please use the information below</p>
            </div>
          </div>
          <div className="row" id="contactInfo">
            <div className="col-sm-4 ml-auto text-center">
              <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
              <div>Austin, Tx</div>
            </div>
            <div className="col-sm-4 col-md-auto text-center" id="icons">
              <a
                className="icons"
                href="https://github.com/aekoh?tab=repositories"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
              <a className="icons" href="https://docs.google.com/document/d/1jLrCj3f2Y83WrRLqRGJlQ2Fs05gFOlVBjK60l_iYAro/edit?usp=sharing"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
                  width="24"
                  height="24"
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
            
              <a className="d-block" id='email' href="mailto:aineekohhh@gmail.com"
                >aineekohhh@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
  )

}

export default Contact