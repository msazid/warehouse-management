import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth)
    const location = useLocation();
    if(!user && user?.email){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;