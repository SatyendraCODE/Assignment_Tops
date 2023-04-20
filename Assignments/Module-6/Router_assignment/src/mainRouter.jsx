import { createBrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import HeaderCompo from "./CommonComp/header";
import Home from "./home";
import Child_Router from "./Child_Router";
// import ExampleChilds from "./exampleChilds.jsx";
// const LazyExampleChilds = React.lazy(() => import("./exampleChilds"));

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
    children: [
      {
        path: "child_links/*",
        element: (
          <>
            <Child_Router />
          </>
        )
      },
    ],
  },
  {
    path: "/example",
    element: (
      <>
        <HeaderCompo />
      </>
    ),
    children: [
      {
        path: "exampleChild",
        element: (
          <>
            {/* <React.Suspense fallback="Loading..">
              <LazyExampleChilds title="Nice"/>
            </React.Suspense> */}
          </>
        ),
      },
    ],
  },
]);

export default MainRouter;
