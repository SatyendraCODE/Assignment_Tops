import React from "react";
import Sidebar from "./Sidebar";
import AdminNav from "./AdminNav";
import MainContent from "./AdminContent";

const Adminpanel = () => {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="d-flex flex-column container-fluid m-0 p-0">
          <AdminNav />
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default Adminpanel;
