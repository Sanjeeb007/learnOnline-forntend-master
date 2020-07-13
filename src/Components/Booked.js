import React, { Component } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import UserNavbar from './UserNavbar';
import { MDBInput } from "mdbreact";
import { toast, ToastContainer } from "react-toastify"; 

class ProductDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
          
            crouseCode: "",
            coursePrice: "",
           

            mobiles: {},
            config: {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            },

          
        };
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        Axios.get(
            "http://localhost:3006/student/course/" + this.props.match.params.id,
            this.state.config
        ).then(response => {
           
            this.setState({
                mobiles: response.data,
              
                courseCode: response.data.courseCode,
              
                coursePrice: response.data.coursePrice
            });
        
        });
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    addToCart = e => {
        e.preventDefault();
        console.log(this.state);

        Axios.post(
            "http://localhost:3006/student/booking",
            this.state,
            this.state.config
        )
            .then(response => {
                console.log(response.data);
                toast.error("Booked Courses Sucessfully")
                // localStorage.setItem("token", response.data.token);
                this.setState({
                
                    courseCode: "",
                   
                    coursePrice: ""
                });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <UserNavbar></UserNavbar>
                <div className="jumbotron mt-5 bg-info text-white">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center ">Enroll Here</h1>
                    </div>
          
              <MDBInput
                        className="black-text"
                        iconClass="black-text"
                        label="courseCode"
                        icon="lock"
                        type='text' name='courseCode' id='courseCode' value={this.state.mobiles.courseCode} onChange={this.handleChange}
                    />

                    <MDBInput
                        className="black-text"
                        iconClass="black-text"
                        label="coursePrice"
                        icon="lock"
                        type='text' name='coursePrice' id='coursePrice' value={this.state.mobiles.coursePrice} onChange={this.handleChange}
                    />


                    <tr>
                        <td>


                            <Button
                                color="warning"
                                align="center"
                                onClick={this.addToCart}
                            >
                                Enroll
                    </Button>
                    <ToastContainer />
                        </td>
                    </tr>


                </div>
            </div>
        );
    }
}

export default withRouter(ProductDetail);
