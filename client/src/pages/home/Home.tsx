import React, { useContext } from "react"
import "./home.scss"
import { AuthContext, type AuthContextType } from "../../contexts/AuthContext"
import Header from "../../components/header/Header"
import About from "../../components/featured/Partners"
import Footer from "../../components/footer/Footer"

const Home = function () {
    const {currentUser} = useContext(AuthContext) as AuthContextType
    console.log(currentUser)
    
    return (
        <div>
            <Header/>
            <About/>
        </div>
    )
}

export default Home