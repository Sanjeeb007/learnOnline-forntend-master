import React, { Component } from 'react';
import Slide from './Slide';
import { Container } from 'reactstrap';
import Header from './Header';

class Home extends Component {
    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
      
      render() {
        return (
            <Container>
              <Header></Header>
   <Slide></Slide>

   </Container>
        );
    }
}


export default Home;
