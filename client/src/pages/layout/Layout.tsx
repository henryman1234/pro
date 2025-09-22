import React, { useContext } from "react";
import "./layout.scss"
import {Outlet, Link, useNavigate, Navigate} from "react-router-dom"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { AuthContext, type AuthContextType } from "../../contexts/AuthContext";
import Home from "../home/Home";


const Layout = function () {

    return(
        <section className="layout">
            <Navbar />
            <Outlet/>
            <Footer/>
        </section>
    )
}

const RequireAuthLayout = function () {

    const navigate = useNavigate()

    const {currentUser} = useContext(AuthContext) as AuthContextType

    if (!currentUser) {
        return <Navigate to = "/login" />
    } else {
        return <div className="layout">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    }
}

export   {Layout, RequireAuthLayout}