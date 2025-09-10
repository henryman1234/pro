import React from "react";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, useRouteError } from "react-router-dom"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Test from "./components/Test";
import Layout from "./pages/layout/Layout";
import Subscribe from "./pages/suscribe/Subscribe";



function App () {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout/>,
          errorElement: <PageError/>,
          children: [
            {
              path: "",
              element: <Home/>
            },
            {
              path: "login",
              element: <Login/>
            },
            {
              path: "register",
              element: <Register/>
            },
            {
              path: "/test",
              element: <Test/>
            },
            {
              path:"/subscribe",
              element: <Subscribe/>
            }
          ]
        }
      ])

    return (
        <RouterProvider router={router}/>
    )
}

function PageError () {
    const error = useRouteError() as {data?: string, message?: string}
    console.log(error)
    return (
      <div>
        <h1>Une érreur est survenue</h1>
        <p>{error?.data ?? error?.message}</p>
      </div>
    )
  }

export default App