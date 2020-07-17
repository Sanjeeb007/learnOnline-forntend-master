
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import ManageCarView from "./ManageCarView";
import { toast, ToastContainer } from "react-toastify"; 


class ManageCar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            car: [],
            config: {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
              }
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3006/student/showcar')
            .then((response) => {
                this.setState({
                    car: response.data
                })
            });
    }

    deleteCar = _id => {
        console.log("clicked");
        axios
            .delete("http://localhost:3000/admin/deleteUser/" + _id, this.state.config)
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

                    <ManageCarView cars={this.state.car} deleteCar={this.deleteCar} />
                    <ToastContainer/>
                </div>
            </div>
        )
    }
}

export default ManageCar;
