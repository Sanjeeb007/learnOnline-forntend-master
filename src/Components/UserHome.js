import React, { Component } from 'react';
import Slide from './Slide';
import { Container } from 'reactstrap';
import UserNavbar from './UserNavbar';

class UserHome extends Component {
    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
      
      render() {
        return (
            <Container>
              <UserNavbar></UserNavbar>
              <span> <h1 class="display-4">Welcome</h1>
                    <p class="lead">Online education has evolved as one of the best learning methodologies in the modern world.
                     Online education is a process of digital learning where students study and learn things on the internet according 
                    to their desired time and location. All you need is a computer with an internet connection.</p>
                    <p class="lead">We have tied up with renowned vehicle rental brands so that we can provide our
                        customers with the most economic vehicle rental deals along with world class customer service.
                    </p>
                    <ul class="list__marker lead">
                        <li>Best price guarantee</li>
                        <li>No cancellation or amendment fees</li>
                        <li>No hidden extras to pay - theft and damage cover included</li>
                    </ul>
</span>
  <span><Slide></Slide></span> 

   </Container>
        );
    }
}


export default UserHome;
