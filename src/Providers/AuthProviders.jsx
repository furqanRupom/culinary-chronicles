import React, { createContext, useState } from 'react';
import {applyActionCode, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/firebase.config';
const auth = getAuth(app)
export const ChefContext = createContext()
const AuthProviders = ({children}) => {
    const [toggle, setToggle] = useState(false);
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);

    const LoginUser = (email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    const userInfo = {
        toggle,
        setToggle,
        user,
        LoginUser
    }
    return (
       <ChefContext.Provider value={userInfo}>
        {children}
       </ChefContext.Provider>
    );
};

export default AuthProviders;