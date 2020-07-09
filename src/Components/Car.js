
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Container } from 'reactstrap'
import axios from 'axios';
import CardView from './CardViews';
import Header from './Header';


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
            <Header></Header>
            
            <div className="row">
               
            <CardView cars={this.state.car} />
            </div>
            </div>
        )
    }
}

export default Car;
