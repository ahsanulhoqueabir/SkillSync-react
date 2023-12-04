import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Statistics from "./components/Statistics.jsx";
import AppliedJobs from "./components/AppliedJobs.jsx";
import Blog from "./components/Blog.jsx";
import Home from "./components/Home.jsx";
import { AllData } from "./utilities/function.js";
import ShowJobDetails from "./components/ShowJobDetails.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogDetails from "./components/BlogDetails.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: AllData,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "job/:title",
        element: <ShowJobDetails />,
        loader: (params) => params,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs />,
      },
      {
        path: "blog",
        element: <Blog />,
        // loader: ()=> fetch('https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/blogP.json')
      },
      {
        path: "blog/:title",
        element: <BlogDetails />,
        loader: (params) => params,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>
);
