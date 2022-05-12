import React from "react";
import { Link } from "react-router-dom";

import { Nav, NavbarBrand, Navbar, NavItem, Container } from "reactstrap";

const Header = () => {
  return (
    <Navbar color="dark" dark>
      <Container className="d-flex justify-content-between">
        <NavbarBrand href="/">My Team</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">
              Add User
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
