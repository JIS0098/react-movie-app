import React,{useState,useEffect} from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";
const Navigation = () => {
  const [query,setQuery]= useState("");
 const {keyword}=useSelector(state=>state.movie)
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const goToHome=()=>{
    navigate("/")
  }

 const searchEnter = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
     navigate(`/movies?q=${keyword}`)
  }
};

useEffect(()=>{
  dispatch(movieAction.getQuery(query))
},[query])

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
            <Form onKeyDown={searchEnter} className="d-flex" >
              <Form.Control onChange={(e)=>setQuery(e.target.value)}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                
              />
              <Button variant="outline-danger"><Link to={`/movies?q=${keyword}`}>Search</Link></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
