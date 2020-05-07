import React from 'react';
import './Contact.css';


//  adding my html in a function within the return
//  Creating a function called Contact using a tags and paths wrapped in a container, i will then export the function for use in App.js file.
//  I set Id and Class names for style.css use.


function Contact() {
    return(
        <section className="page-section font-weight-bold" id="contact">
        
        <p className='copyRight font-weight-bold text-center'>© 2019 Aine Ekoh</p>
     
      </section>
  )

}

export default Contact