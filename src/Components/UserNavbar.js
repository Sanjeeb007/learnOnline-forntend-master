import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBDropdownItem, MDBDropdownMenu, MDBDropdown, MDBDropdownToggle
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink, Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Header extends Component {
  notify = () => toast("LOGOUT SUCCESSFULLY !");
  notify1 = () => toast("Show car!");
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>

        <MDBNavbar color="text-white bg-info" >
          <img src="/images/short.png" alt="logo" width="130dp" height="100dp" />

          <span >Online Learning Nepal</span>
          <span className="float-right">  <img src="/images/lll.png" alt="logo" width="130dp" height="100dp" /></span>
        </MDBNavbar>
        <MDBNavbar color="text-white bg-danger" dark expand="md">


          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <NavLink href="/userhome">HomePage</NavLink>
              </MDBNavItem>
              <MDBNavItem active>
                <NavLink href="/viewcard" className="ml-3" onClick={this.notify1}>Cources</NavLink>
              </MDBNavItem>
              <MDBNavItem active>
                <NavLink href="/userprofile" className="ml-3">Profile</NavLink>
              </MDBNavItem>
              <MDBNavItem active>
                <NavLink href="/viewbook" className="ml-3">Lecturers</NavLink>
              </MDBNavItem>

              <MDBNavItem active>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Comment</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="/viewcomment">Show Comment</MDBDropdownItem>
                    <MDBDropdownItem href="/addcomment">Add Comment</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              <Button href="/" color=" text-white bg-danger" className="ml-5" onClick={this.notify}>
                LOGOUT
              </Button>
              <ToastContainer />

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