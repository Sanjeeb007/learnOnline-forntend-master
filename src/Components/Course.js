
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Container } from 'reactstrap'
import axios from 'axios';
import CardViews from './CardView';
import UserNavbar from './UserNavbar';


class Car extends Component {

    constructor(props) {
        super(props)

        this.state = {
            car: []
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
    
    render() {
        return (
            <div>
            <UserNavbar></UserNavbar>
            
            <div className="row">
               
            <CardViews cars={this.state.car} />
            </div>
            </div>
        )
    }
}

export default Car;
