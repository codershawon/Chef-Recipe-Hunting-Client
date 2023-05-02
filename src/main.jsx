import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Layout/Main.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import AuthProviders from "../Providers/AuthProviders.jsx";
import Register from "./components/Register/Register.jsx";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes.jsx";
import Blog from "./components/Blog/Blog.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <PrivateRoutes><Home></Home></PrivateRoutes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/blog",
        element:<PrivateRoutes><Blog></Blog></PrivateRoutes>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProviders> <RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>
);
