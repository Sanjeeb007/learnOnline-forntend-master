import React, { Component } from 'react';
import Slide from './Slide';
import { Container } from 'reactstrap';
import AdminNavbar from './AdminNavbar';

class AdminHome extends Component {
    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
      
      render() {
        return (
            <Container>
              <AdminNavbar></AdminNavbar>
              <div>
   <span><Slide></Slide></span>
  
   </div>

   </Container>
        );
    }
}


export default AdminHome;
