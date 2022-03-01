import { Navbar } from "react-bootstrap";
import "./Nav.css";
const Nav = () => {
  return (
    <Navbar sticky="top">
      <div id="name">
        <h3>VBH</h3>
      </div>

      <div id="menu">
        <h5>about</h5>
        <h5>services</h5>
        <h5>projects</h5>
        <h5>blog</h5>
        <h5>contact us</h5>
      </div>
    </Navbar>
  );
};

export default Nav;
