import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsBrowserEdge } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section d-flex flex-column align-items-center text-center gap-2">
          <img src="src/assets/logo2.png" className="logo" alt="logo" />
          <h2><strong>ManVibe</strong></h2>
          <p>Style. Tech. Essentials for everyday life.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <hr />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/top-product">Top Product</Link></li>
            <li><Link to="/new-collection">New Collection</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <hr />
          <p>Email: manvibe@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
          <p>Mon–Sat: 9AM – 6PM</p>
        </div>

        <div className="footer-section section2">
          <h3>Social Links</h3>
          <hr />
          <div className="footer-icon d-flex">
            <button className="btn icon-btn"><FaFacebook size={22} /></button>
            <button className="btn icon-btn"><FaInstagram size={22} /></button>
            <button className="btn icon-btn"><BsBrowserEdge size={22} /></button>
            <button className="btn icon-btn"><FaLinkedin size={22} /></button>
          </div>

          <p>Contact Us</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 ManVibe. Crafted with passion.</p>
      </div>
    </footer>
  );
}

export default Footer;