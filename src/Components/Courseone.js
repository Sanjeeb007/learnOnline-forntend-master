import React, { Component } from 'react';
//import Slide from './Slide';

import {
    Container ,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Col
  } from 'reactstrap';
import Header from './Header';

class Courseone extends Component {
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
      <div class="container-fluid registercon bg-light mt-1">
      <div class="row">
      <div> 
      <Col xs={8} md={6} className ="ml-3">
      <Card>
      
        <CardImg src="/images/jkl.jpg" alt="Card image cap" />
        
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>
    </div>
                    </div>
                </div>

   </Container>
        );
    }
}


export default Courseone;
