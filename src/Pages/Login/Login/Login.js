import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import GoogleButton from 'react-google-button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import deliveryPic from '../../../Assets/Image/delivery.jpg'
import auth from '../../../Firebase/Firebase.init';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/'
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if(user){
        navigate(from,{replace:true});
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <div className="row container w-75 mx-auto my-3">

                <div className="col-12 col-md-6">
                    <img className='img-fluid' src={deliveryPic} alt="" />
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center">
                    <div className='w-100'>
                        <form className='w-100 h-75' onSubmit={handleLogin}>
                            <h3>Login</h3>
                            <div className="my-3">
                                <span className="text-start">Email</span>
                                <input required type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <span className='text-start'>Password</span>
                                <input required type="password" name='password' className="form-control" id="exampleInputPassword1" />
                            </div>
                            <span className='d-block mb-3'>Forget your password ?</span>
                            <button type="submit" className="btn w-100">Login</button>
                            <p className='mt-3'>New here please<Link className='ms-2' to='/register'>Register</Link></p>
                        </form>
                        <h4 className='text-center my-3'>Or</h4>
                        <GoogleButton className='w-100'
                            onClick={() => { console.log('Google button clicked') }}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;