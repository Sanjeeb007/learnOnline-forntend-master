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

                         <h6>Username :</h6>   <h6 style={{ fontSize: '22px' }}>{allcars.username}</h6><br />
                         <h6>carRegistrationNo :</h6>   <h6>{allcars.carRegistrationNo}</h6><br />
                         <h6>pickUpLocation :</h6>   <p>{allcars.pickUpLocation}</p><br />
                         <h6>pickUpData :</h6>   <p>{allcars.pickUpDate}</p><br />
                         <h6>dropOffLocation :</h6>   <p>{allcars.dropOffLocation}</p><br />
                         <h6>dropOffData :</h6>   <p>{allcars.dropOffDate}</p><br />
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