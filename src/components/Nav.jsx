import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <Navbar sticky="top">
      <div id="name">
        <Link to="/" className="link">
          <h2>VBH</h2>
        </Link>
      </div>

      <div id="menu">
        <Link to="/about" className="link">
          <p className="menu-item">about</p>
        </Link>
        <Link to="/services" className="link">
          <p className="menu-item">services</p>
        </Link>
        <Link to="/projects" className="link">
          <p className="menu-item">projects</p>
        </Link>
        <Link to="/blog" className="link">
          <p className="menu-item">blog</p>
        </Link>
        <Link to="/contact" className="link">
          <p className="menu-item" id="contact">
            contact us
          </p>
        </Link>
      </div>
    </Navbar>
  );
};

export default Nav;
