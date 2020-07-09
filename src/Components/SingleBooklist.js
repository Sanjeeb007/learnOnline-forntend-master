import React, { Component } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { MDBBtn } from "mdbreact";
import UserNavbar from './UserNavbar';

class SingleBooklist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            book: {},
            config: {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")} ` }
            }
        };
    }

    componentDidMount() {
        Axios.get("http://localhost:3000/a/showbook", this.state.config).then(
            response => {
                this.setState({
                    book: response.data
                });
            }
        );
    }

    handleLogout = e => {
        e.preventDefault();
        localStorage.removeItem("token");
        this.props.history.push("/");
    };

    
    render() {
        return (
            <div className="container">
                <UserNavbar></UserNavbar>
                <div className="jumbotron mt-3 bg-primary text-black">
                    <div className="col-sm-8 mx-auto">
                        <h5 className="text-center">User Booked lists</h5>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>
                                    <h6 className="text-light">Username</h6>
                                </td>
                                <td className="text-light">{this.state.book.username}</td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="text-light">carRegistrationNo</h6>
                                </td>
                                <td className="text-light">
                                    {this.state.book.carRegistrationNo}
                                    {/* <Link to="/profile"> </Link> */}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="text-light">pickUpLocation</h6>
                                </td>
                                <td className="text-light">
                                    {this.state.book.pickUpLocation}
                                    {/* <Link to="/profile"> </Link> */}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="text-light">pickUpDate</h6>
                                </td>
                                <td className="text-light">
                                    {this.state.book.pickUpDate}
                                    {/* <Link to="/profile"> </Link> */}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h6 className="text-light">dropOffLocation</h6>
                                </td>
                                <td className="text-light">
                                    {this.state.book.dropOffLocation}
                                    {/* <Link to="/profile"> </Link> */}
                                </td>


                            </tr>
                            <tr>
                                <td>
                                    <h6 className="text-light">

                                        <div className="text-center mt-4 black-text ml-3">
                                            <MDBBtn gradient="purple" >Edit Profile</MDBBtn>


                                        </div>
                                    </h6>
                                </td>
                                <td>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(SingleBooklist);