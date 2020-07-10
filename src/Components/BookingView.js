import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from 'reactstrap';
import { MDBBtn } from "mdbreact";
class BookingView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cars: {}
        }
    }

    render() {
        const { deleteBook } = this.props;
        console.log(this.props)
        var { cars } = this.props;

        return (

            cars.map(allcars => {

                return (<div className="col-lg-4 col-md-6 col-sm-9, mt-3" key={allcars._id}>
                    <div className="card text-center mb-2">
                        <Alert color="info">

                         <h6 color="danger">Email: </h6><h5>{allcars.email}</h5><br />
                    <h6>courseCode: </h6><h6>{allcars.courseCode}</h6><br />
                    <h6>coursePrice: </h6><h6>{allcars.coursePrice}</h6><br />
                         <span><MDBBtn gradient="aqua" onClick={() => deleteBook(allcars._id)} href="booklist"><h6>Delete</h6></MDBBtn></span>
                        </Alert>
                    </div>
                </div>

                )
            }
            )
        )
    }
}

export default BookingView;