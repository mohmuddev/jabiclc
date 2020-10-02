import React from "react";
import "./Contact.css";;


const Contact = () =>{
    return (
      <div className="contact">
        <div className="overlay">
          <form action="#">
            <h2>
              Get a <span>Quate</span>
            </h2>
            <div>
              <span>
                <label htmlFor="name">First Name</label>
                <input type="text" id="name" />
              </span>
              <span className="right">
                <label htmlFor="name">Last Name</label>
                <input type="text" id="name" />
              </span>
            </div>
            <div>
              <span>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" />
              </span>
              <span className="right">
                <label htmlFor="number">Phone Number</label>
                <input type="number" id="number" />
              </span>
            </div>
              <label htmlFor="messange" className="text-area">Message</label> <br />
              <textarea name="" id="" cols="20" rows="5"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
}


export default Contact;