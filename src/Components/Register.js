import React, { Component } from 'react'
//import {Form, FormGroup, Label, Input, Container, FormText } from 'reactstrap'
import {Redirect } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import { MDBBtn,MDBCol,MDBAnimation,MDBInput,MDBBox,MDBCardBody,MDBIcon,MDBMask,MDBContainer } from "mdbreact";


export default class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
         
            email: '',
            phone: '',
            password: '',
            isRegistered: false
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault();
        console.log(this.state);

        axios.post('http://localhost:3006/student/signup', this.state)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('token', response.data.token)
                this.setState({
                    name: '',
                   
                    email: '',
                    phone: '',
                    password: '',
                    isRegistered: true
                });

            }).catch((err) => console.log(err))
    }


    render() {
        if (this.state.isRegistered === true) {
            return <Redirect to='/dashboard' />
        }
        return (
           
               
<MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer > 
                <Header></Header>
                <MDBCol md="8" xl="12" className="mt-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                  <MDBBox display="flex" justifyContent="center" >
                    <img
                      src="/images/online.jpg" 
                      alt=""
                      className="img-fluid"
                    />
                    </MDBBox>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="8" xl="10" className="ml-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                 
                      <MDBCardBody className="black-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Register:
                        </h3>
                        <hr className="hr-black" />
                       
                        <MDBInput
                          className="black-text"
                          iconClass="black-text"
                          label="Name"
                          type='text' name='name' id='name'
                            value={this.state.name} onChange={this.handleChange}
                            />
                     

                         <MDBInput
                          className="black-text"
                          iconClass="black-text"
                          label="Email"
                          Input type='email' name='email' id='email'
                            value={this.state.email} onChange={this.handleChange}
                        />

                         <MDBInput
                          className="black-text"
                          iconClass="black-text"
                          label="Phone Number"
                         type='number' name='phone' id='phone'
                            value={this.state.phone} onChange={this.handleChange} 
                        />

                         <MDBInput
                          className="black-text"
                          iconClass="black-text"
                          label="Password"
                          type='password' name='password' id='password'
                          value={this.state.password} onChange={this.handleChange}
                        />
                     
                          
                        <div className="text-center mt-4 black-text">
                          <MDBBtn  gradient="purple" onClick={this.register} type="submit">Sign Up</MDBBtn>
                          
                         
                        </div>
                       
                      </MDBCardBody>
                   
                  </MDBAnimation>
                </MDBCol>
            </MDBContainer>
            </MDBMask>
        )
    }
}
