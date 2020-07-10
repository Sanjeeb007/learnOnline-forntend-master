import React, { Component } from 'react'
//import {Form, FormGroup, Label, Input, Container, FormText } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import AdminNavbar from './AdminNavbar'
import { MDBBtn, MDBCol, MDBAnimation, MDBInput, MDBCardBody, MDBIcon, MDBMask, MDBContainer } from "mdbreact";
import { toast, ToastContainer } from "react-toastify";
import { Label,Input } from "reactstrap";
export default class Addcar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      courseName: '',
      courseAvailability: '',
      courseCreator: '',
      courseDescription: '',
      courseCode: '',
      coursePrice: '',
      isRegistered: false,
      image: null,
      config: {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      }
    }


  }

  fileHandler = e => {
    this.setState({ image: e.target.files[0] });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addcar = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append('image', this.state.image, this.state.image.name)
    formdata.append('courseName', this.state.courseName)
    formdata.append('courseAvailability', this.state.courseAvailability)
    formdata.append('courseCreator', this.state.courseCreator)
    formdata.append('courseDescription', this.state.courseDescription)
    formdata.append('courseCode', this.state.courseCode)
    formdata.append('coursePrice', this.state.coursePrice)


    axios.post('http://localhost:3006/admin/caradd', formdata, this.state.config)
      .then((response) => {
        console.log(response);
        toast.success("Course Added")
     
      }).catch((err) => console.log(err))
  }


  render() {
    if (this.state.isRegistered === true) {
      return <Redirect to='/AdminHome' />
    }
    return (


      <MDBMask className="d-flex justify-content-center align-items-center gradient">
        <MDBContainer >
          <AdminNavbar></AdminNavbar>
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
                  <MDBIcon icon="user" /> Add car:
                        </h3>
                <hr className="hr-black" />

                <div className="col-md-12 form-group">
                <Label for="images">Image</Label>
                <Input
                  type="file"
                  name="images"
                  required
                  onChange={this.fileHandler}
                  accept="image/*"

                />
              </div>

                <MDBInput
                  className="black-text"
                  iconClass="black-text"
                  label="courseName"
                  type='text' name='courseName' id='courseName'
                  value={this.state.courseName} onChange={this.handleChange}
                />
                <MDBInput
                  className="black-text"
                  iconClass="black-text"
                  label="courseAvailability"
                  type='text' name='courseAvailability' id='courseAvailability'
                  value={this.state.courseAvailability} onChange={this.handleChange}
                />

                <MDBInput
                  className="black-text"
                  iconClass="black-text"
                  label="courseCreator"
                  type='text' name='courseCreator' id='courseCreator'
                  value={this.state.courseCreator} onChange={this.handleChange}
                />

                <MDBInput
                  className="black-text"
                  iconClass="black-text"
                  label="courseDescription"
                  Input type='text' name='courseDescription' id='courseDescription'
                  value={this.state.courseDescription} onChange={this.handleChange}
                />


                <MDBInput
                  className="black-text"
                  iconClass="black-text"
                  label="courseCode"
                  type='text' name='courseCode' id='courseCode'
                  value={this.state.courseCode} onChange={this.handleChange}
                />
                <MDBInput
                  className="black-text"
                  iconClass="black-text"
                  label="coursePrice"
                  type='text' name='coursePrice' id='coursePrice'
                  value={this.state.coursePrice} onChange={this.handleChange}
                />


                <div className="text-center mt-4 black-text">
                  <MDBBtn gradient="purple" onClick={this.addcar} type="submit" href="/addcar">ADD</MDBBtn>
                  <ToastContainer />

                </div>

              </MDBCardBody>

            </MDBAnimation>
          </MDBCol>
        </MDBContainer>
      </MDBMask>
    )
  }
}

