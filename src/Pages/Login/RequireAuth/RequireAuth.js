import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './RequireAuth.css'
const RequireAuth = ({children}) => {
    const [user,loading,error] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(error){}
    if(!user){
            return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center container py-5 verify-email'>
            <div className='text-center mb-2'>
                <h5 className='item-h5'> Did you Verify ?</h5>
                <h2 className='home-title'>Please check your <strong className='text-success'>email</strong> to confirm the verification</h2>
                <p className='home-text'>if you don't get any email please click the button</p>
            </div>
            <button
                className='verify-button'
                onClick={async () => {
                    await sendEmailVerification();
                    toast.success('Verification email sent');
                }}
            >
                Send Verification Email Again
            </button>
        </div>
    }
    return children;
};

export default RequireAuth;