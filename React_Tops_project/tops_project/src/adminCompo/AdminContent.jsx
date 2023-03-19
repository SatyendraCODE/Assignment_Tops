import React from "react";
import "./AdminContent.css";

const AdminContent = () => {
  return (
    <>
      <div className="backgroundHalf"></div>
      <div className="content">
        <div className="dashboardText p-4">
          <h2>Dashboard</h2>
          <p>
            <span>Welcome back to the Dashboard.</span>
            <br />
            Scroll down to see quick links and overviews of your Server, To do
            list Order status or get some Help using Nifty.
          </p>
        </div>
        <div className="container row my-2">
          <div className="col-7">
            <div className="box1"></div>
          </div>
          <div className="col-5">
            <div className="row">
                <div className="col-6"><div className="box2 mb-4"></div></div>
                <div className="col-6"><div className="box2 mb-4" ></div></div>
                <div className="col-6"><div className="box2 mb-4"></div></div>
                <div className="col-6"><div className="box2 mb-4"></div></div>
            </div>            
          </div>
        </div>
        <div className="p-4">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4"></div>
                <div className="col-4"></div>
            </div>
        </div>
        
      </div>
    </>
  );
};

export default AdminContent;
