import React from 'react';
import { Link } from 'react-router-dom';
import Items from '../Items/Items';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import './Home.css'

import img1 from '../../../Assets/Logo/dettol.png'
import img2 from '../../../Assets/Logo/harpic.png'
import img3 from '../../../Assets/Logo/mcdonalds.png'
import img4 from '../../../Assets/Logo/pepsi.jpeg'
import img5 from '../../../Assets/Logo/Unilever.png'
import img6 from '../../../Assets/Logo/tang.jpg'

const Home = () => {

    return (
        <div>
            <div className='hero-section d-flex align-items-center justify-content-center'>
                <div className='container'>
                    <h1 className='banner-title text-center text-light'>Welcome to <span className="text-color">MS Grocery</span> Warehouse</h1>
                    <p className='banner-text text-light'>We'll never walk alone.You can easily update or mange the item list. <br /> Facing any problem feel free to give us any king of feedback.We'll  <br />always there for you and want to hare from you</p>
                    <Link className='btn-banner me-2' to='/manageitems'>  <span>Browse Items Lists</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg></Link>

                </div>
            </div>
            <div className="container my-5">
                <h1 className='text-center home-title'>Product List </h1>
                <p className='text-muted text-center'>Here is our all product with supplier and quantity</p>
            </div>
            <Items></Items>

            <div className='container my-5'>
                <h2 className='text-center home-title'>Our Suppliers</h2>
                <p className='text-muted'>Some of our regular suppliers and their logos</p>
            </div>
           <Swiper
                
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="container py-3 my-5 mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} className='w-50 h-50' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} className='w-50 h-50' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} className='w-50 h-50' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} className='w-50 h-50' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} className='w-50 h-50' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} className='w-50 h-50' alt="" />
                </SwiperSlide>
            </Swiper>
            <div className="container my-3">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h1 className='home-title text-start py-2'>Our office Location</h1>
                        <p className="home-text text-start">
                        <strong className='news-text'>Address:</strong> Mirpur , Dhaka-1207
                        </p>
                        <p className="home-text text-start">
                        <strong className='news-text'>Phone:</strong> +8801926045689
                        </p>
                        <p className="home-text text-start">
                        <strong className='news-text'>Address:</strong> Mirpur , Dhaka-1207
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <form className='card p-3'>
                            <h1 className='home-title'>Facing Problems ?</h1>
                            <h5 className='home-text'>Give us your valuable recommendations</h5>
                            <input placeholder='email' className='form-control my-2 border-0 border-bottom' type="email" />
                            <textarea placeholder='your report' className='form-control border-0 border-bottom'  rows="3"></textarea>
                            <input className='btn my-3' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
           </div>
    );
};

export default Home;