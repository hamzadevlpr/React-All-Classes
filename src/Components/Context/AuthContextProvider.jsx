import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

function AuthContextProvider({ children }) {

    let [login, setLogin] = useState(false);

    return (
        // <div>
        <AuthContext.Provider value={{ login, setLogin}}>
            {children}
        </AuthContext.Provider>
        // </div>
    )
}
export default AuthContextProvider;