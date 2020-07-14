import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from 'reactstrap';
import { MDBBtn } from "mdbreact";


class CommentViewAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: {}
            
        }
    }


    render() {
        const{deleteComment} = this.props;
        console.log(this.props)
        var {comments} = this.props;

        return (
            
            comments.map(allcomments => {
                
               
                return (<div className="col-lg-3 col-md-4 col-sm-6, mt-3" key={allcomments._id}>
                    <div className="card text-center mb-2">
                    <Alert color="info">
                    <h6 color="danger">Email: </h6><h5>{allcomments.email}</h5><br />
                    <h6>Course Name: </h6><h6>{allcomments.courseName}</h6><br />
                    <h6>Feedbacks: </h6><p>{allcomments.feedback}</p><br />
                    <img src="images/delete.png" height="30dp" width="30dp" alt="Snow"></img>


                        <MDBBtn gradient="aqua" onClick={()=>deleteComment(allcomments._id)} href="/commentview" >Delete</MDBBtn>
                    
                       </Alert>
                    </div>
                </div>
                )
            }
            )
        )
    }
}

export default CommentViewAdmin;