import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from "reactstrap";

class Header extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <MDBNavbar color="text-white bg-danger" dark expand="md">
          <img src="/images/short.png" alt="logo" width="150dp" height="90dp" />

          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active className="ml-3">
                <NavLink href="/">Home</NavLink>
              </MDBNavItem>
              <MDBNavItem active className="ml-3">
                <NavLink href="/login">SignIn</NavLink>
              </MDBNavItem>
              <MDBNavItem active className="ml-3">
                <NavLink href="/register">SignUp</NavLink>
              </MDBNavItem>


              <MDBNavItem active className="ml-3">
                <NavLink href="/viewcard">Courses</NavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">More</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="/aboutus">About US</MDBDropdownItem>
                    <MDBDropdownItem href="https://www.google.com/maps/place/Car+Rental+Nepal/@27.7140437,85.3116053,17z/data=!4m8!1m2!2m1!1scar+rental+near+Kalimati,+Kathmandu!3m4!1s0x0:0x60f5600397d64861!8m2!3d27.7155769!4d85.3119573">Google Search</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>

            
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Header;