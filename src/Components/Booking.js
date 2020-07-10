import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import BookingView from './BookingView';
import AdminNavbar from './AdminNavbar';
import { toast, ToastContainer } from "react-toastify"; 

class Booking extends Component {

    constructor(props) {
        super(props)

        this.state = {
            car: [],
            config: {
                headers: { Authorization: `${localStorage.getItem("token")}` }
            }
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/a/allbooklist')
            .then((response) => {
                this.setState({
                    car: response.data
                })
            });
    }

    deleteBook = _id => {
        console.log("clicked");
        axios
            .delete("http://localhost:3000/users/deletebook/" + _id, this.state.config)
            .then(result => {
                console.log(result);
                toast.error("Booked data is deleted")
            });
        const filteredTask = this.state.car.filter(task => {
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
               
            <BookingView cars={this.state.car} deleteBook={this.deleteBook}  />
            <ToastContainer />
            </div>
            </div>
        )
    }
}

export default Booking;
