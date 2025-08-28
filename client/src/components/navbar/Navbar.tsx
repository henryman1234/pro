import React, { useEffect, useState } from "react";
import "./navbar.scss"
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../public/images/logosaas.png"
import DefaultImage from "../../../public/images/noavatar.jpg"
import { useToggle } from "../../hooks/useToggle";

const Navbar = function () {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false)
    const [toggleDropDown, setToggleDropDown] = useState(false)
    let isUserLoggedIn = false

    useEffect(function() {
        const menu = document.querySelector("#menu")
        const body = document?.querySelector("body")
        if (isNavbarOpen) {
            menu?.classList.add("clicked")
            body?.classList.add("blur")
        }
    }, [isNavbarOpen])

    const [state, toggle] = useToggle(false)

    return (
        <div className="navbar">

            <div className="navbarContainer">
                <div className="logo">
                    <img src={Logo} alt="" />
                    <h2>onzième.</h2>
                </div>

                {/* MOBILE MENU */}
                <div className="mobileMenu">
                     {isUserLoggedIn ? <div className="mobileMenuItem">
                        <img onClick={toggle} src={DefaultImage} alt="Logo" className="mobileImage" />
                        
                        {state && <div className="mobileDrop">
                            <Link onClick={toggle} to="/">Mon Profile</Link>
                            <Link onClick={toggle} to="/">Blogs</Link>
                            <Link onClick={toggle} to="/">Contacts</Link>
                            <button className="logout">Se déconnecter</button>
                        </div>}
                     </div>: <Link to="/login" className="connect">Se Connecter</Link>}
                </div>



                {/* DESKTOP MENU */}
                <div className="desktopMenu">
                    {isUserLoggedIn ? <div className="desktopMenuItem">
                        <Link onClick={toggle} to="/">Mon Profile</Link>
                        <Link onClick={toggle} to="/">Blogs</Link>
                        <Link onClick={toggle} to="/">Contacts</Link>
                        <button className="logout">Se déconnecter</button>
                        <img onClick={toggle} src={DefaultImage} alt="Logo" className="desktopImage" />
                    </div> : <Link to="/login" className="connect">Se connecter</Link>}
                </div>
            </div>


        </div>
    )
}

export default Navbar