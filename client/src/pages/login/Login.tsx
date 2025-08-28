import React, { useContext, useState } from "react";
import "./login.scss"
import {Link, useNavigate} from "react-router-dom"

const Login = function () {

    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async function (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const username = formData.get("username")
        const password =  formData.get("password")
        setError("")
        setIsLoading(true)

        try {
            const res = await fetch("http://localhost:8800/api/auth/login", {
                method: "POST",
                body: JSON.stringify({username, password}),
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });

            // localStorage.setItem("user", JSON.stringify(res))
            const data = await res.json()
            console.log(data)
            navigate("/")

        } catch (err: any) {
            console.log(err)
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="login">
            <div className="loginContainer">
                <h1 className="loginTitle">Connexion</h1>
                {error && <span>{error}</span>}
                <div className="loginForm">
                    <div className="item">
                        <label htmlFor="username">Nom</label>
                        <input type="text" placeholder="Ton Nom" name="username" id="username" />
                    </div>

                    <div className="item">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="text" required placeholder="Mot de passe" name="password" id="password" />
                    </div>

                    <div className="item">
                        <button disabled={isLoading} >Se Connecter</button>
                        <span>si t'as pas un compte clique <Link to="/register">Ici</Link></span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login