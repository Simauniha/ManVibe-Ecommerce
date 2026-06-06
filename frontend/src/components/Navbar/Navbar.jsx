import "./Navbar.css";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/logo2.png";

function Navbar() {
  return (
    // <nav className="navbar">
    //   <div className="logo">
    //     <img src={logo} alt="ManVibe Logo" />
    //   </div>

    //   <ul className="nav-links">
    //     <li>Home</li>
    //     <li>Shop</li>
    //     <li>Categories</li>
    //     <li>Contact</li>
    //   </ul>

    //   <button className="login-btn">Login</button>
    // </nav>

    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="/">
            <img src={logo} alt="ManVibe Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >

            <span className="navbar-toggler-icon" />
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/shop">
                  Shop
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/top-products">
                  Top Products
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/new-collection">
                  New Collection
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  color="white"
                >
                  ENG
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Hindi
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex search" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn" type="submit">
                Search
              </button>
            </form> */}

            <div className="d-flex align-items-center gap-3">
              <button className="btn icon"><FaSearch /></button>
              <button className="btn icon"><FaCartPlus /></button>
              <button className="btn login-btn">Login</button>
            </div>

          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;