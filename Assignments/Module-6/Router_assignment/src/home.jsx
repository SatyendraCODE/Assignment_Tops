import { MDBContainer } from "mdb-react-ui-kit";
import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class home extends Component {
  render() {
    return (
      <MDBContainer
        breakpoint="sm"
        className="text-center d-flex justify-content-center flex-column align-items-center"
        style={{ height: "100vh" }}
      >
        <h1>This is React Router Assignmet</h1>
        <div className="d-flex justify-content-center mt-3  mb-3">
          <Link
            to="child_links"
            className="btn btn-danger"
          >{`-> Click here to see child Component !`}</Link>
        </div>
        <MDBContainer>
          {/*########################### outlet here ########################## */}
          <Outlet />
        </MDBContainer>
        <Link to="/" className="btn btn-primary mt-3">
          Go Home
        </Link>
      </MDBContainer>
    );
  }
}

export default home;
