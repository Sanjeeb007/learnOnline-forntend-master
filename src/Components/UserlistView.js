import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from 'reactstrap';


class UserlistView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: {}
        }
    }

    render() {
        console.log(this.props)
        var {comments} = this.props;

        return (
            
            comments.map(allcomments => {
                
               
                return (<div className="col-lg-4 col-md-6 col-sm-9, mt-3" key={allcomments._id}>
                    <div className="card text-center mb-2">
                    <Alert color="info">

                  
            
                
                       <h6>UserName: {allcomments.name}</h6>
                        <h6>Email: {allcomments.email}</h6>
                        <h6>Phone Number: {allcomments.phone}</h6>
                       
                        
                        </Alert>
                    </div>
                </div>
                )
            }
            )
        )
    }
}

export default UserlistView;