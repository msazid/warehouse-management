import React from 'react';
import GoogleButton from 'react-google-button';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="row container w-75 mx-auto my-3">
                <div className="col-12 col-md-8 mx-auto">
                    <div className='w-100'>
                        <form className='w-100 h-75'>
                            <h3>Register New User</h3>
                            <div class="my-3">
                                <span className="text-start">Name</span>
                                <input type="text" name='name' class="form-control" aria-describedby="nameHelp" />
                            </div>
                            <div class="mb-3">
                                <span className="text-start">User Name</span>
                                <input type="text" name='username' class="form-control" aria-describedby="userNameHelp" />
                            </div>
                            <div class="mb-3">
                                <span className="text-start">Email</span>
                                <input type="email" name='email' class="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <span className='text-start'>New Password</span>
                                <input type="password" name='password' class="form-control"/>
                            </div>
                            <div class="mb-3">
                                <span className='text-start'>Confirm Password</span>
                                <input type="password" name='password' class="form-control"/>
                            </div>
                            <button type="submit" class="btn w-100">Register</button>
                          <p className='mt-3'>Already have an account<Link className='ms-2' to='/login'>Login</Link></p> 
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

export default Register;