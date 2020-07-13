import React, { Component } from 'react'
//import {Form, FormGroup, Label, Input, Container, FormText } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import UserNavbar from './UserNavbar'
import { MDBBtn, MDBCol, MDBAnimation, MDBInput, MDBCardBody, MDBIcon, MDBMask, MDBContainer } from "mdbreact";
import { toast } from "react-toastify";
//import { Label,Input } from "reactstrap";
export default class Addcomment extends Component {

  constructor(props) {
    super(props)

    this.state = {
      phone_number: '',
      carName: '',
      comment:'',
    
      isRegistered: false,
     
      config: {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      }
    }


  }

 

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addcar = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/users/comment', this.state, this.state.config)
      .then((response) => {
        console.log(response);
        toast.success("Comment Added")
        // setTimeout(window.location.href = "/components/addcomment", 1000);
      }).catch((err) => console.log(err))
  }


  render() {
    if (this.state.isRegistered === true) {
      return <Redirect to='/AddComment' />
    }
    return (


      <MDBMask className="d-flex justify-content-center align-items-center gradient">
        <MDBContainer >
          <UserNavbar></UserNavbar>
          <MDBCol md="8" xl="12" className="mt-4">
            <MDBAnimation type="fadeInRight" delay=".3s">
              <img
                src="/images/cars.png"
                alt=""
                className="img-fluid"
              />
            </MDBAnimation>
          </MDBCol>

          <MDBCol md="8" xl="10" className="ml-5">
            <MDBAnimation type="fadeInRight" delay=".3s">

              <MDBCardBody className="black-text">
                <h3 className="text-center">
                  <MDBIcon icon="user" /> Add Comment:
                        </h3>
                <hr className="hr-black" />

              <MDBInput
                  className="black-text"
                  iconClass="black-text"
                  label="phone_number"
                  type='text' name='phone_number' id='phone_number'
                  value={this.state.phone_number} onChange={this.handleChange}
                />
                <MDBInput
                  className="black-text"
                  iconClass="black-text"
                  label="carName"
                  type='text' name='carName' id='carName'
                  value={this.state.carName} onChange={this.handleChange}
                />
                <MDBInput
                  className="black-text"
                  iconClass="black-text"
                  label="comment"
                  type='text' name='comment' id='comment'
                  value={this.state.comment} onChange={this.handleChange}
                />


                <div className="text-center mt-4 black-text">
                  <MDBBtn gradient="purple" onClick={this.addcar} type="submit" href = "/addcomment/">ADD</MDBBtn>


                </div>

              </MDBCardBody>

            </MDBAnimation>
          </MDBCol>
        </MDBContainer>
      </MDBMask>
    )
  }
}

