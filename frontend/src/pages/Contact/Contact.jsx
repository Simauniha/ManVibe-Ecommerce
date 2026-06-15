import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsBrowserEdge } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Contact.css";
// import Navbar2 from "../../components/Navbar/Navbar2";

const Contact = () => {
  return (
    <>
    {/* <Navbar2/> */}
    <div className="contact-wrapper d-flex justify-content-center align-items-center">
      <div className="contact-card row">

        {/* LEFT */}
        <div className="col-md-6 p-4">
          <h2 className="title">Contact Us</h2>
          <hr />
          <p className="subtitle">
            We'd love to hear from you. Send us a message.
          </p>

          <form>
            <input type="text" placeholder="Name" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <textarea placeholder="Message" rows="4" className="input"></textarea>

            <button className="send-btn">Send Message</button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
          <h5 className="info-title">Get in touch</h5>
          <p className="info-text">
            Fill the form and our team will get back to you within 24 hours.
          </p>

          <p className="contact-info">Email: manvibe@gmail.com</p>
          <p className="contact-info">Phone: +91 98765 43210</p>

          <div className="socials">
            <button className="btn icon-btn"><FaFacebook/></button>
            <button className="btn icon-btn"><FaInstagram/></button>
            <button className="btn icon-btn"><BsBrowserEdge/></button>
            <button className="btn icon-btn"><FaLinkedin/></button>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Contact;