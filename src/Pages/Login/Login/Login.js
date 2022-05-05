import React from 'react';
import GoogleButton from 'react-google-button';
import { Link } from 'react-router-dom';
import deliveryPic from '../../../Assets/Image/delivery.jpg'
import auth from '../../../Firebase/Firebase.init';
const Login = () => {
    
    return (
        <div>
            <div className="row container w-75 mx-auto my-3">

                <div className="col-12 col-md-6">
                    <img className='img-fluid' src={deliveryPic} alt="" />
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center">
                    <div className='w-100'>
                        <form className='w-100 h-75'>
                            <h3>Login</h3>
                            <div class="my-3">
                                <span className="text-start">Email</span>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <span className='text-start'>Password</span>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <span className='d-block mb-3'>Forget your password ?</span>
                            <button type="submit" class="btn w-100">Login</button>
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