import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import { RouterProvider } from 'react-router-dom';
import MainRouter from "./router";
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={MainRouter} />);