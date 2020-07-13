import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Container } from 'reactstrap'
import axios from 'axios';
import UserNavbar from './UserNavbar';
import CommentView from "./CommentView";

class Comment extends Component {

    constructor(props) {
        super(props)

        this.state = {
            commentlist: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3006/student/showcomment')
            .then((response) => {
                this.setState({
                    commentlist: response.data
                })
            });
    }
    
    render() {
        return (
            <div>
            <UserNavbar></UserNavbar>
            <div className="row">
            <CommentView comments={this.state.commentlist} />
            </div>
            </div>
        )
    }
}

export default Comment;
