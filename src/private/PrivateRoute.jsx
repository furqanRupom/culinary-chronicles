import React, { useContext } from 'react';
import { ChefContext } from '../Providers/AuthProviders';
import { FaSpinner } from 'react-icons/fa';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(ChefContext)
    if(loading){
        return <div className='animate-spin h-[500px] flex items-center justify-center'><FaSpinner className="text-4xl" /></div>
    }
    if(user){
        return children
    }
    return <Navigate to="/user/login" state={{from:location}} replace={true}></Navigate>
}

export default PrivateRoute;