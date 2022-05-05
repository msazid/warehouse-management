import React from 'react';
import GoogleButton from 'react-google-button';
import deliveryPic from '../../../Assets/Image/delivery.jpg'
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
                            <span>Forget your password ?</span>
                            <button type="submit" class="btn w-100">Login</button>
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