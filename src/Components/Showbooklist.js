import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import UserNavbar from './UserNavbar';
import ShowbooklistView from "./ShowbooklistView";
import { toast, ToastContainer } from "react-toastify"; 

class Showbooklist extends Component {

    constructor(props) {
        super(props)

        this.state = {
            booklist: [],
            config: {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")} ` }
            }
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3006/student/showbook',this.state.config)
            .then((response) => {
                this.setState({
                    booklist: response.data
                })
            });
    }

    deletebook= _id => {
        console.log("clicked");
        axios
            .delete("http://localhost:3006/student/deletebook/" + _id, this.state.config)
            .then(result => {
                console.log(result);
                toast.error("Booking data is deleted")
            });
        const filteredTask = this.state.booklist.filter(task => {
            return task._id !== _id;
        });
        this.setState({
            booklist: filteredTask
        });
    };
    
    render() {
        return (
            <div>
            <UserNavbar></UserNavbar>
            <div className="row">
            <ShowbooklistView books={this.state.booklist}deletebook={this.deletebook}  />
            <ToastContainer />
            </div>
            </div>
        )
    }
}

export default Showbooklist;
