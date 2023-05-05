import React from "react";
import ReactDOM from "react-dom/client";
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
import RouteError from "./components/RouteError/RouteError.jsx";
import ChefRecipesPage from "./components/Layout/ChefRecipesPage.jsx";
import ChefRecipes from "./components/chefRecipes/chefRecipes.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<RouteError></RouteError>,
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
  },{
    path:"/foodRecipes",
    element:<PrivateRoutes><ChefRecipesPage></ChefRecipesPage></PrivateRoutes>,
    children:[
      {
        path:"/foodRecipes/:id",
        element:<ChefRecipes></ChefRecipes>,
        loader:({params})=>fetch(`https://chef-recipe-hunting-server-side-codershawon.vercel.app/foodRecipes/${params.id}`)
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProviders> <RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>
);
