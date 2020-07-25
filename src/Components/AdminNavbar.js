import React, { Component } from "react";
import {
MDBNavbar,MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import {NavLink, Button} from "reactstrap";

class AdminNavbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      
      <MDBNavbar color="text-white bg-info">
      <img src="/images/short.png" alt="logo" width="130dp" height="100dp"/>

      <span >Admin HomePage</span>
        <span className="float-right">  <img src="/images/short.png" alt="logo" width="130dp" height="100dp"/></span>
      </MDBNavbar>
      <MDBNavbar color="text-white bg-danger" dark expand="md">
      
      
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          <MDBNavItem active>
              <NavLink href="/adminhome">Home</NavLink>
            </MDBNavItem>
            <MDBNavItem active className="ml-3">
              <NavLink href="/addcar">AddCourses</NavLink>
            </MDBNavItem>
            <MDBNavItem active className="ml-3">
              <NavLink href="/managecar">ManageCourses</NavLink>
            </MDBNavItem>
            <MDBNavItem active className="ml-3">
              <NavLink href="/booklist">BookingLists</NavLink>
            </MDBNavItem>
            <MDBNavItem active className="ml-3">
              <NavLink href="/userlist">UserList</NavLink>
            </MDBNavItem>
            <MDBNavItem active className="ml-3">
              <NavLink href="/commentview">CommentList</NavLink>
            </MDBNavItem>
            <Button href="/" color="danger" className="ml-5">
              LOGOUT
            </Button>
          
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

export default AdminNavbar;