import React from 'react';
import deliveryPic from '../../../Assets/Image/delivery.jpg'
const Login = () => {
    return (
        <div>
            <div className="row container w-75 border mx-auto">
                <div className="col-12 col-md-6 border">
                    <img className='img-fluid' src={deliveryPic} alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <form className='border border-2'>
                        <div class="mb-3">
                            <span className="text-start">Email</span>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <span className='text-start'>Password</span>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;