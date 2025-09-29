import  React, { useState, type FormEvent } from "react";
import "./register.scss"
import {Link, useNavigate} from "react-router-dom"


const Register = function () {

    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


    const handleSubmit = async function (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const username = formData.get("username")
        const matricule = formData.get("matricule")
        const email = formData.get("email")
        const password = formData.get("password")
        const training = formData.get("training")
        setError("")
        setIsLoading(true)

        try {
            const res = await fetch("http://localhost:8800/api/auth/register", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({username, matricule, email,training, password}),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            })
            const data = await res.json()
            console.log(data)
            navigate("/login")
        } catch (err: any) {
            console.log(err)
            setError(err.message)
        } finally  {
            setIsLoading(false)
        }

    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <div className="loginContainer">
                <h1 className="loginTitle">Inscription</h1>
                {error && <span>{error}</span>}
                <div className="loginForm">
                    <div className="item">
                        <label htmlFor="username">Nom</label>
                        <input type="text" required maxLength={10} placeholder="Ton Nom" name="username" id="username" />
                    </div>
                    <div className="item">
                        <label htmlFor="email">Email</label>
                        <input type="text" required placeholder="Ton Email" name="email" id="email" />
                    </div>
                    <div className="item">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="text" required placeholder="Mot de passe" name="password" id="password" />
                    </div>

                    <div className="item">
                        <label htmlFor="training">Formation</label>
                        <input type="text" placeholder="Formation souhaité" name="training" id="training" />
                    </div>

                    <div className="item">
                        <button type="submit" >S'inscrire</button>
                        <span>si t'as un déja un compte clique <Link to="/login">Ici</Link></span>
                    </div>
                </div>
            </div>
        </form>
    )
    
}

export default Register