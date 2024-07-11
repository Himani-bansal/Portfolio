import React from 'react';
import useAOS from './useAOS';
import 'aos/dist/aos.css';
import hero_pic from "../assets/image-me.png";
import { Navbar } from '../components/Navbar';
import DownloadButton from '../components/DownloadButton';

const Hero_section = () => {
    useAOS();
    return (
        <div className='hero_section'>
            <Navbar />
            <div className="container py-lg-5">
                <div className="row align-items-center justify-content-center pb-5 text-white">
                    <div className="col-10 col-md-6 f-color-white order-lg-2">
                        <div className=' transform-element scale-element '>
                            <p data-aos="zoom-in" className="pt-5 pb-4 main_heading  fw-bold f_50
                        f-color-white">I AM A PASSIONATE DEVELOPER</p></div>
                        <h5 data-aos="zoom-in" className="fw-light py-2 fs-3 fw-medium">Hi, I am <span className="fw-medium fw-bold">Himani Bansal</span></h5>
                        <p data-aos="zoom-in" className="fw-light fw-normal  para transform-element scale-element">Currently, I am pursuing MCA with computer science, A curious brain who love to explore new technology.</p>
                        <button data-aos="zoom-in" className="btn download_btn  mt-3 resume_btn col-lg-5" id="downloadBtn"><DownloadButton/></button>
                    </div>
                    <div data-aos="zoom-in" className="col-10 col-md-6  mt-5 mt-md-0 text-center">
                        <img className="hero_img rounded-circle" src={hero_pic} alt="hero"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero_section;
