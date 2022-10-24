import React,{ createContext, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider ({children}){

    const [user, setUser] = useState({
        email: "",
        id: "",
        image: "",
        name: "",
        token: "",
    })

    const [porcentagem, setPorcentagem] = useState(0);

    return (
        <AuthContext.Provider value={{user, setUser, porcentagem, setPorcentagem}}>
            {children}
        </AuthContext.Provider>
    )
}