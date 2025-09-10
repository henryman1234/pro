import React from "react";
import "./layout.scss"
import {Outlet, Link} from "react-router-dom"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";


const Layout = function () {
    return(
        <section className="layout">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </section>
    )
}

export  default Layout