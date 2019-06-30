import React from 'react';
import './Contact.css';




function Contact() {
    return(
        <section class="page-section font-weight-bold" id="contact">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0">Contact Me</h2>
              <hr class="divider my-4" id='brColor' />
              <p class=" mb-5">Please use the information below</p>
            </div>
          </div>
          <div class="row" id="contactInfo">
            <div class="col-sm-4 ml-auto text-center">
              <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
              <div>+1 (512) 207-0484</div>
            </div>
            <div class="col-sm-4 col-md-auto text-center" id="icons">
              <a
                class="icons"
                href="https://github.com/aekoh?tab=repositories"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  preserveAspectRatio="xMidYMin"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  ></path></svg></a>
              <a class="icons" href=""
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  preserveAspectRatio="xMidYMin"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                  ></path>
                  <polyline points="13 2 13 9 20 9"></polyline></svg></a>
              <a class="icons" href="https://www.linkedin.com/in/aine-ekoh-9b2601134/"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  preserveAspectRatio="xMidYMin"
                  stroke-linejoin="round"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  ></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle></svg ></a>
            </div>
            <div class="col-sm-4 mr-auto text-center">
              <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
            
              <a class="d-block" id='email' href="mailto:aineekohhh@gmail.com"
                >aineekohhh@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
  )

}

export default Contact