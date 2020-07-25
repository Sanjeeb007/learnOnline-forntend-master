import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert,Button } from 'reactstrap';
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class ManageCarView extends Component {
    notify = () => toast("You Can Book Cars At Just Clicked On Button !");
    constructor(props) {
        super(props)
        this.state = {
            cars: {}
        }
    }

    render() {
        const { deleteCar } = this.props;
        console.log(this.props)
        var { cars } = this.props;

        return (

            cars.map(allcars => {
                return (<div className="col-lg-4 col-md-6 col-sm-9, mt-3" key={allcars._id}>
                    <div className="card text-center mb-2">
                        <Alert color="info">

                            <img src={"http://localhost:3006/uploads/cars/" + allcars.image} alt={allcars.carName} onClick={this.notify} width="100%" height="200px" />
                            <h6>courseName :   {allcars.courseName}</h6><br />
                            <h6>courseCode :  {allcars.courseCode}</h6><br />
                            <h6>courseAvailability :{allcars.courseAvailability}</h6><br />
                            <h6>coursePrice :  {allcars.coursePrice}</h6><br />
                            <h6>courseCreator : {allcars.courseCreator}</h6><br />
                            <h6>courseDescription :  {allcars.courseDescription}</h6>
                           
                                <Link
                                    to={"/editcar/" + allcars._id}
                                    style={{ textDecoration: "none" }}>
                                         <Button gradient="peach" >
                                    Edit
                                    </Button>
                    </Link>
                            
                            <MDBBtn gradient="aqua" onClick={() => deleteCar(allcars._id)} href="/managecar">Delete</MDBBtn>
                            <ToastContainer />
                        </Alert>
                    </div>
                </div>

                )
            }
            )
        )
    }
}

export default ManageCarView;