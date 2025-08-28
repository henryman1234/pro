import React from "react";
import "./layout.scss"
import {Outlet, Link} from "react-router-dom"
import Navbar from "../../components/navbar/Navbar";


const Layout = function () {
    return(
        <section className="layout">
            <Navbar/>
            <Outlet/>
        </section>
    )
}

export  default Layout