import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from 'reactstrap';
import { Button } from "reactstrap";
// import Header from './Header';
class UserView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            users: {}
        }
    }

    render() {
        console.log(this.props)
        var {users} = this.props;

        return (
            
            users.map(allcars => {
                return (
                    
                <div className="col-lg-3 col-md-4 col-sm-6" key={allcars._id}>
                    
                    <div className="card text-center mb-2">
                    <Alert color="info">
                     
                      
                        <h5>{allcars.username}</h5>
                        <p>{allcars.carRegistrationNo}</p>
                        <Button color="info"><h6>Add Book</h6></Button>
                        </Alert>
                    </div>
                </div>
              
                )
            }
            )
        )
    }
}

export default UserView;