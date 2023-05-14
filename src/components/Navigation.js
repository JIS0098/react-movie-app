import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const goToHome=()=>{
    navigate("/")
  }
  return (
    <div >
      <Navbar style={{backgroundColor:"#141414"}} variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img onClick={goToHome}
              width={150}
              src="https://noona-netflix.netlify.app/logo.png"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Link className="nav-item" to="/">Home</Link>
              <Link className="nav-item" to="/movies">Movies</Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
