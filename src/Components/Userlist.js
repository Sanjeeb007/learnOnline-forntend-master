import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Container } from 'reactstrap'
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import UserlistView from "./UserlistView";

class Userlist extends Component {

    constructor(props) {
        super(props)

        this.state = {
            commentlist: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3006/student/alluserlist')
            .then((response) => {
                this.setState({
                    commentlist: response.data
                })
            });
    }
    
    render() {
        return (
            <div>
            <AdminNavbar></AdminNavbar>
            <div className="row">
            <UserlistView comments={this.state.commentlist} />
            </div>
            </div>
        )
    }
}

export default Userlist;
