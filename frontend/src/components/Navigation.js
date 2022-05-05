import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { logout } from "../redux/Actions/userActions";
function Navigation() {
  // const dispatch = useDispatch();
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <h1>logo </h1>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Register
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/login">
            <button onClick={() => dispatch(logout())}>log out</button>
          </Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;