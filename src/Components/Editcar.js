import React, { Component } from "react";
import Axios from "axios";
import {withRouter } from "react-router-dom";
import { Button, Label, FormGroup, Input, Form } from "reactstrap";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import AdminNavbar from './AdminNavbar';

class Editcar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseName: '',
      courseCode: '',
      courseAvailability: '',
      coursePrice: '',
      courseCreator: '',
      courseDescription: '',
    
      image: "",
      config: {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      }
    };
  }

  componentDidMount() {
    Axios.get(
      "http://localhost:3006/student/car/" + this.props.match.params.id //,this.state.config
    ).then(response => {
      console.log(response.data.courseCode);
      this.setState({
        courseCode: response.data.courseCode,
        courseName: response.data.courseName,
        courseAvailability: response.data.courseAvailability,
        courseCreator: response.data.courseCreator,
        courseDescription: response.data.courseDescription,
        coursePrice: response.data.coursePrice,
     
        image: response.data.image
      });
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  UpdateProduct = e => {
    e.preventDefault();
    // console.log("ASDASD");
    Axios.patch(
      "http://localhost:3006/admin/updatecar/" + this.props.match.params.id,
      this.state,
      this.state.config
    )
      .then(response => {
        this.setState({
          courseName: '',
          courseCode: '',
          courseAvailability: '',
          coursePrice: '',
          courseCreator: '',
          courseDescription: '',
         
          image: ""
        });
        toast.info("Product updated !", {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 2000
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Form onSubmit={this.UpdateProduct}>
         <AdminNavbar></AdminNavbar>
         <FormGroup>
          <b>
            <Label for="courseName" className="text-dark">
            courseName
            </Label>
          </b>
          <Input
            placeholder="courseName"
            type="text"
            name="courseName"
            id="courseName"
            value={this.state.courseName}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <b>
            <Label for="courseCode" className="text-dark">
            courseCode
            </Label>
          </b>
          <Input
            placeholder="courseCode"
            type="text"
            name="courseCode"
            id="courseCode"
            value={this.state.courseCode}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <b>
            <Label for="courseAvailability" className="text-dark">
            courseAvailability
            </Label>
          </b>
          <Input
            placeholder="courseAvailability"
            type="text"
            name="courseAvailability"
            value={this.state.courseAvailability}
            onChange={this.handleChange}
          />
        </FormGroup>


        <FormGroup>
          <b>
            <Label for="coursePrice" className="text-dark">
            coursePrice
            </Label>
          </b>
          <Input
            placeholder="coursePrice"
            type="text"
            name="coursePrice"
            value={this.state.coursePrice}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <b>
            <Label for="courseCreator" className="text-dark">
            courseCreator
            </Label>
          </b>
          <Input
            type="text"
            placeholder="courseCreator"
            name="courseCreator"
            id="courseCreator"
            value={this.state.courseCreator}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <b>
            <Label for="courseDescription" className="text-dark">
            courseDescription
            </Label>
          </b>
          <Input
            placeholder="courseDescription"
            type="text"
            name="courseDescription"
            value={this.state.courseDescription}
            onChange={this.handleChange}
          />
        </FormGroup>

        {/* <FormGroup> */}
          {/* <b>
            <Label for="image" className="text-dark">
              Product Image
            </Label>
          </b>{" "} */}
          {/* <img
            src={"http://localhost:3006/uploads/cars/" + this.state.image}
            className="card-img-top img-fluid"
            style={{
              height: "50px",
              objectFit: "cover",
              width: "auto"
            }}
            alt="alt text"
          /> */}
        {/* </FormGroup> */}
        <Button color="warning" align="center">
          <ToastContainer />
          Update Product
        </Button>
      </Form>
    );
  }
}

export default withRouter(Editcar);