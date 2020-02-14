import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="logo192.png"
                height="30"
                width="41"
                alt="nCov Updates"
              />
            </NavbarBrand>
            <Collapse isOpen={true} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/details">
                    <span className="fa fa-info fa-lg"></span> Details
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/news">
                    <span className="fa fa-list fa-lg"></span> News
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    <span className="fa fa-heart fa-lg"></span>About
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
       
      </React.Fragment>
    );
  }
}

export default Header;
