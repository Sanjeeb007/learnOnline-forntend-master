import React, { Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBBtn } from "mdbreact";
import { Alert } from 'reactstrap';


class ShowbooklistView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: {}
        }
    }

  

    render() {
        const{deletebook} = this.props;
        console.log(this.props)
        var {books} = this.props;

        return (
            
            books.map(allbooklist => {
                
               
                return (<div className="col-lg-4 col-md-6 col-sm-9, mt-3" key={allbooklist._id}>
                    <div className="card text-center mb-2">
                    <Alert color="info">
                    <h6 color="danger">Email: </h6><h5>{allbooklist.email}</h5><br />
                    <h6>courseCode: </h6><h6>{allbooklist.courseCode}</h6><br />
                    <h6>coursePrice: </h6><h6>{allbooklist.coursePrice}</h6><br />
                  
                    <img src="images/delete.png" height="30dp" width="30dp" alt="Snow"></img>
                    
                    <MDBBtn gradient="aqua" onClick={()=>deletebook(allbooklist._id)} >Delete</MDBBtn>
                       </Alert>
                    </div>
                </div>
                )
            }
            )
        )
    }
}

export default ShowbooklistView;