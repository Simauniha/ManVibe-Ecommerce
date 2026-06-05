import "./Navbar.css";
import logo from "../../assets/logo2.png"; // adjust path if needed

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="ManVibe Logo" />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Shop</li>
        <li>Categories</li>
        <li>Contact</li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
}

export default Navbar;