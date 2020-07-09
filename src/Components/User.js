
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import UserView from './UserView';
import UserNavbar from './UserNavbar';


class User extends Component {

    constructor(props) {
        super(props)

        this.state = {
           
            user: [],
            config: {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")} ` }
            }
        }
    }

   

    componentDidMount() {
        axios.get('http://localhost:3001/a/showbook', this.state.config)
            .then((response) => {
                this.setState({
                    user: response.data
                })
            });
    }
    
    render() {
        return (
            <div>
            <UserNavbar></UserNavbar>
            
            <div className="row">
               
            <UserView users={this.state.user} />
            </div>
            </div>
        )
    }
}

export default User;
