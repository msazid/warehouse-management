import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword ,useSendPasswordResetEmail, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import GoogleButton from 'react-google-button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import deliveryPic from '../../../Assets/Image/delivery.jpg'
import auth from '../../../Firebase/Firebase.init';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userEmail = useRef('')
    const userPassword = useRef('')
    let from = location.state?.from?.pathname || '/'
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail , sending] = useSendPasswordResetEmail(auth);

    if (user || googleUser) {
        navigate(from, { replace: true });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = userEmail.current.value;
        const password = userPassword.current.value;
        signInWithEmailAndPassword(email, password)
    }
    if(sending || loading || googleLoading){
        <Loading></Loading>
    }
    let errorText;
    if(error || googleError){
      errorText =  <p>{error?.message} {googleError?.message}</p>
    }
    const resetPassword = async () =>{
        const email = userEmail.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast.success(`Mail send successfully`,{id:'success'})
        }
    }
    return (
        <div>
            <div className="row container w-75 mx-auto my-3">

                <div className="d-md-block d-none col-md-6">
                    <img className='img-fluid' src={deliveryPic} alt="" />
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center">
                    <div className='w-100'>
                        <form className='w-100 h-75' onSubmit={handleLogin}>
                            <h3>Login</h3>
                            <div className="my-3">
                                <span className="text-start d-block">Email</span>
                                <input required type="email" ref={userEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <span className='text-start d-block text-start'>Password</span>
                                <input required type="password" ref={userPassword} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn w-100">Login</button>
                            {errorText}
                            <p className='mt-3'>New here please<Link className='ms-2' to='/register'>Register</Link></p>
                        </form>

                        <div className="text-center"><button className="text-primary bg-light border-0" onClick={resetPassword}>Forget Password ?</button></div>
                        <h4 className='text-center my-3'>Or</h4>
                        <GoogleButton className='w-100'
                            onClick={() => { signInWithGoogle() }}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;