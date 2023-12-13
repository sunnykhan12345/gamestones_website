import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar, NavLink } from "react-bootstrap";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { BsSearchHeart } from "react-icons/bs";

const Header = () => {
   const[nav,setNav] = useState(false)

   const changescrollValue = () =>{
      const navVal =document?.documentElement?.scrollTop;
      navVal > 100 ?setNav(true) : setNav(false);
   };
   window.addEventListener("scroll",changescrollValue )

  return (
    <section id="header" >
      <Navbar expand="lg" >
        <Container>
          <NavLink to="logo" className="me-2 logo">
            <Link to="/">
            <img src={logo} alt="logo" className="img-fluid" />
            </Link>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" id="toggler" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="selection">
                <select>
                  <option value="location">
                    --Please choose a Location--
                  </option>
                  <option value="location">Lahore</option>
                  <option value="location">Islamabad</option>
                  <option value="location">Multan</option>
                  <option value="location">Peshawar</option>
                  <option value="location">Kohat</option>
                </select>
              </div>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="find stones and more..."
                className="me-2 serch"
                aria-label="Search"
              />
              <Link to="login" className="me-2">
                <Button className="order-now login">Login</Button>
              </Link>
              <Link to="signin" className="me-3">
                <Button className="order-now login">Sign up</Button>
              </Link>
              <Link to="post">
                <Button className="order-now  btn-danger" >+</Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;