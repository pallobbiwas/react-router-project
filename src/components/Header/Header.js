import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="nav-container" expand="lg">
      <Container>
        <h2>The Shoe</h2>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 nav-iteam"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="iteam" to='/home'>Home</Link>
            <Link className="iteam" to='/Shop'>Shope</Link>
            <Link className="iteam" to='/order'>Order</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
