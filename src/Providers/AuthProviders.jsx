import React, { createContext, useState } from 'react';

export const ChefContext = createContext()
const AuthProviders = ({children}) => {
    const [toggle, setToggle] = useState(false);
    const userInfo = {
        toggle,
        setToggle
    }
    return (
       <ChefContext.Provider value={userInfo}>
        {children}
       </ChefContext.Provider>
    );
};

export default AuthProviders;