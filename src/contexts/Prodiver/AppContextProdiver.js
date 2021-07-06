import React, { useState, createContext, useContext, useEffect } from 'react';

export const AppContext = createContext({});

export default function AppContextProdiver({ children }) {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [authLoading, setAuthLoading] = useState(true)

    const login = (data) => {
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem("user-authentication", JSON.stringify(data));
    }

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("user-authentication");
    }

    useEffect(() => {
        let loginData = localStorage.getItem("user-authentication");
        if (loginData) {
            loginData = JSON.parse(loginData);
            login(loginData);
        }
        setAuthLoading(false);
    }, [])

    return (
        <AppContext.Provider value={{
            user,
            token,
            login,
            logout,
            authLoading
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);
