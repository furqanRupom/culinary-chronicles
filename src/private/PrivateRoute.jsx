import React, { useContext } from 'react';
import { ChefContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user} = useContext(ChefContext)
    if(user){
        return children
    }
    return <Navigate to="/user/login" state={{from:location}} replace={true}></Navigate>
}

export default PrivateRoute;