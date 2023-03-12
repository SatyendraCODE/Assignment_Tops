import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={Router} />
);