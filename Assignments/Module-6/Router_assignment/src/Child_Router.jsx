import React, { Suspense } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Child_compo from "./Child_compo";
// import Child_compo_lazy from "./Child_compo_lazy";

const Child_compo_lazy = React.lazy(() => import("./Child_compo_lazy"));

const Child_Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="d-flex justify-content-around mt-5">
              <Link to="child_1" className="btn btn-warning m-1">
                child without lazy loading
              </Link>
              <Link to="child_2" className="btn btn-warning m-1">
                child with lazy loading
              </Link>
            </div>
            <div
              className="d-flex justify-content-center align-items-center p-5 mt-3 rounded border"
              style={{ height: "200px" }}
            >
              <Outlet />
            </div>
          </>
        }
      >
        <Route path="child_1" element={<Child_compo />} />
        <Route
          path="child_2"
          element={
            <Suspense fallback={"loading..."}>
              <Child_compo_lazy />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default Child_Router;
