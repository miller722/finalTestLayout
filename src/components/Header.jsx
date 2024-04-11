import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid className="header wrapper--gap">
          <Navbar.Brand className="logo" href="#home">
            PIPI-POOPOO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navbar-link" href="#">
                About us
              </Nav.Link>
              <Nav.Link className="navbar-link" href="#">
                Services
              </Nav.Link>
              <Nav.Link className="navbar-link" href="#">
                Our work
              </Nav.Link>
              <Nav.Link className="navbar-link" href="#">
                Blog
              </Nav.Link>
            </Nav>
            <div className="social-media">
              <img
                className="instagram__icon"
                src="images/icon-instagram.png"
                alt="instagram"
              />
              <ButtonPrimary description="LET'S CHAT" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
