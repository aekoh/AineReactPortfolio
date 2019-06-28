import React from "react";
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

import './Main.css'


// This code will stack the column on mobile devices by making my imae full width

function Main() {
    return (
        
        <header className="masthead">
        <div className="container h-100">
          <div
            className="row h-100 align-items-center justify-content-center text-right"
          >
            <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-white font-weight-bold" id="myname">
                Aine Ekoh
              </h1>
              <hr class="divider my-4" id="mastheadBreak" />
            </div>
          </div>
        </div>
      </header>

           
    )
    }
export default Main 