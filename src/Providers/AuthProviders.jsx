import React, { createContext, useState } from 'react';

export const ChefContext = createContext()
const AuthProviders = ({children}) => {
    const [toggle, setToggle] = useState(false);
    const [user,setUser] = useState('ahmad');
    const [loading,setLoading] = useState(true);
    const userInfo = {
        toggle,
        setToggle,
        user
    }
    return (
       <ChefContext.Provider value={userInfo}>
        {children}
       </ChefContext.Provider>
    );
};

export default AuthProviders;