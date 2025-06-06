import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../Components/ContactForm.jsx";
import NavBar from "../Components/NavBar.jsx";



function Contact() {
    return (
        <>
        <div>
              <NavBar></NavBar>
        </div>
      <div>
        <ContactForm></ContactForm>
      </div>
        </>
    )
};

export default Contact;