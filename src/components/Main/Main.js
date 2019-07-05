import React from "react";


import './Main.css'

//  adding my html in a function within the return
//  Creating a function called Main wrapped in a container, the function will take in and image for a background and i will then export the function for use in App.js file.
//  I set Id and Class names for style.css use.
//  This code will stack the column on mobile devices by making my image full width

function Main() {
    return (
        
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

           
    )
    }
export default Main 