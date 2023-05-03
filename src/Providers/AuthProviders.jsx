import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, applyActionCode, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
const auth = getAuth(app)
export const ChefContext = createContext()
const AuthProviders = ({children}) => {
    const [toggle, setToggle] = useState(false);
    const [user,setUser] = useState();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // for loader
    const [loading,setLoading] = useState(true);


    // user register

    const registerUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }





    // user login

    const LoginUser = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }

    // login with google

    const LogInWithGoogle = () =>{

          return  signInWithPopup(auth,googleProvider)
    }
    // login with github

    const LoginWithGithub = ()=>{
        return signInWithPopup(auth,githubProvider);
    }

    // logout
    const logOut = ()=>{
        return signOut(auth)
    }

    // observer

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        };
    }, []);

    const userInfo = {
        toggle,
        setToggle,
        user,
        LoginUser,
        registerUser,
        LogInWithGoogle,
        LoginWithGithub,
        logOut,
        loading
    }
    return (
       <ChefContext.Provider value={userInfo}>
        {children}
       </ChefContext.Provider>
    );
};

export default AuthProviders;