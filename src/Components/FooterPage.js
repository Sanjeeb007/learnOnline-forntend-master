import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="text-white bg-danger" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Online Learning Nepal</h5>
            <p><span class="lead display-5"><i class="fas fa-map-marker-alt"></i> <b>Pepsicola road,
                                Kathmandu</b></span></p>
                    <p>
                        &copy; Online Learning Nepal. All rights reserved.
                    </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="float-right">VISIT US : </h5><br /><br />
            <ul className="float-right">
              <span className="list-unstyled">
                <a href="https://www.facebook.com/"><img src="/images/icon-facebook.png" alt="Robot Samyam" width="20dp" height="20dp"/></a>
              </span>
              <span className="ml-3" ><a href="https://www.twitter.com/"><img src="/images/icon-twitter.png" alt="Robot Samyam" width="20dp" height="20dp"/></a></span>
              <span className="ml-3">
                <a href="https://plus.google.com/"><img src="/images/icon-googleplus.png" alt="Robot Samyam" width="20dp" height="20dp"/></a>
              </span>
              <span className="ml-3">
                <a href="https://www.pinterest.com/"><img src="/images/icon-pinterest.png" alt="Robot Samyam" width="20dp" height="20dp"/></a>
              </span>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.CarRentalNepal.com"> OnlineLearningNepal.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;