import React, { useState, createContext } from 'react';

const HeaderContext = React.createContext({});

import React from 'react'

export default function AppContextProdiver({ children }) {

    const [user, setUser] = useState(null)

    return (
        <HeaderContext.Provider data={ }>
            {children}
        </HeaderContext.Provider>
    )
}
