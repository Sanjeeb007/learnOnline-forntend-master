import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';


import axios from 'axios'
import Header from './Header';
import 'mdbreact/dist/css/mdb.css';
import { MDBBtn,MDBCol,MDBAnimation,MDBInput,MDBCardBody,MDBBox,MDBIcon,MDBContainer,MDBMask } from "mdbreact";



class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isLoggedIn: false,
            usertype: ''
        }
    }
    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }
    submitForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3006/student/login', this.state)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem('token', response.data.token)
                this.setState({ isLoggedIn: true , usertype: response.data.usertype})
            }).catch((err) => console.log(err.response))
        this.setState({ email: '', password: '' })
    }
    render() {

        
        if (this.state.isLoggedIn === true) {
          if(this.state.usertype === 'admin') {
           return <Redirect to='/adminhome' />
          } else {
            return <Redirect to='/userhome' />
          }
        }
        return (

            <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
                <Header></Header>

                <MDBCol   className="mt-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                  <MDBBox display="flex" justifyContent="center" >
                    <img 
                      src="/images/learnon.jpg" 
                      alt=""
                      className="img-fluid"
                    />
               </MDBBox>
                  </MDBAnimation>
                </MDBCol>
                              
                <MDBBox display="flex" justifyContent="center" >
               <MDBCol md="8" xl="10" className="ml-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    
                 
                      <MDBCardBody className="black-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Sign In:
                        </h3>
                        <hr className="hr-black" />
                       
                        <MDBInput
                          className="black-text"
                          iconClass="black-text"
                          label="Email"
                          icon="envelope"
                          type='text' name='email' id='email' value={this.state.email} onChange={this.handleChange} 
                        />
                        <MDBInput
                          className="black-text"
                          iconClass="black-text"
                          label="Your password"
                          icon="lock"
                          type='password' name='password' id='password' value={this.state.password} onChange={this.handleChange}
                        />
                        <div className="text-center mt-4 black-text">
                          <MDBBtn  gradient="purple" onClick={this.submitForm} type="submit">LOGIN</MDBBtn>
                          
                         
                        </div>
                      </MDBCardBody>
                   
                  </MDBAnimation>
                </MDBCol>
                </MDBBox>
            </MDBContainer>
            </MDBMask>
            
         
        )
    }
}

export default Login;
