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
        Axios.get("http://localhost:3000/users/me", this.state.config).then(
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
                            <div className="ml-3">

                                <img src={"http://localhost:3000/uploads/users/" + this.state.user.image} alt={this.state.user.image} width="100%" height="200px" />
                            </div>
                            <tr>
                                <td>
                                    <h6 className="text-light">First Name</h6>
                                </td>
                                <td className="text-light">{this.state.user.first_name}</td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="text-light">Last Name</h6>
                                </td>
                                <td className="text-light">
                                    {this.state.user.last_name}
                                    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="text-light">Username</h6>
                                </td>
                                <td className="text-light">
                                    {this.state.user.username}
                                  
                                </td>
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