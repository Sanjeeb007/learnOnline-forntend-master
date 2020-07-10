import React, { Component } from "react";
import Axios from "axios";
import { withRouter} from "react-router-dom";
import UserNavbar from './UserNavbar';

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            config: {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")} ` }
            }
        };
    }

    componentDidMount() {
        Axios.get("http://localhost:3006/student/me", this.state.config).then(
            response => {
                this.setState({
                    user: response.data
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

                    <table className="table col-md-6 mx-auto">
                        <tbody>
                           
                            <tr>
                                <td>
                                    <h6 className="text-light">Full Name</h6>
                                </td>
                                <td className="text-light">{this.state.user.name}</td>
                            </tr>
                           
                           
                            <tr>
                                <td>
                                    <h6 className="text-light">Email</h6>
                                </td>
                                <td className="text-light">
                                    {this.state.user.email}
                                   
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h6 className="text-light">PhoneNumber</h6>
                                </td>
                                <td className="text-light">
                                    {this.state.user.phone}
                                   
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(UserProfile);