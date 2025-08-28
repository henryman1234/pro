import React, { createContext, useEffect, useState } from "react"

export const AuthContext = createContext();

export const AuthContextProvider = function ({children}) {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )

    const updateUser = function(data) {
        setCurrentUser(data)
    }

    useEffect(function(){
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <AuthContext.Provider value={{currentUser, updateUser}}>
            {children}
        </AuthContext.Provider>
    )
}