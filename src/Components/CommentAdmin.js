import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import CommentViewAdmin from "./CommentViewAdmin";
import { toast, ToastContainer } from "react-toastify"; 

class CommentAdmin extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
            commentlist: [],
            config: {
                headers: { Authorization: `${localStorage.getItem("token")}` }
            }
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

    deleteComment = _id => {
        console.log("clicked");
        axios
            .delete("http://localhost:3000/student/commentdata/" + _id, this.state.config)
            .then(result => {
                console.log(result);
                toast.error("Comment is deleted")
            });
        const filteredTask = this.state.commentlist.filter(task => {
            return task._id !== _id;
        });
        this.setState({
            recipes: filteredTask
        });
    };
    
    render() {
        return (
            <div>
            <AdminNavbar></AdminNavbar>
            <div className="row">
            <CommentViewAdmin comments={this.state.commentlist} deleteComment={this.deleteComment} />
            <ToastContainer />
            </div>
            </div>
        )
    }
}

export default CommentAdmin;
