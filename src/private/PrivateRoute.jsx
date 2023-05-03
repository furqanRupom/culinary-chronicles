import React, { useContext } from 'react';
import { ChefContext } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(ChefContext)
    if(user){
        return children
    }
    return <Navigate to="/user/login"></Navigate>
}

export default PrivateRoute;