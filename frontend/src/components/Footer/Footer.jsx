import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-section">
          <img src="src/assets/logo2.png" className="logo" alt="logo" />
          <p>Building modern and responsive web experiences.</p>
        </div>

        {/* Middle */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: hello@mysite.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: hello@mysite.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 ManVibe. All rights reserved By Simauniha.</p>
      </div>
    </footer>
  );
}

export default Footer;