import { Navbar } from "react-bootstrap";
import "./Nav.css";
const Nav = () => {
  return (
    <Navbar sticky="top">
      <div id="name">
        <h2>VBH</h2>
      </div>

      <div id="menu">
        <p className="menu-item">about</p>
        <p className="menu-item">services</p>
        <p className="menu-item">projects</p>
        <p className="menu-item">blog</p>
        <p className="menu-item" id="contact">
          contact us
        </p>
      </div>
    </Navbar>
  );
};

export default Nav;
