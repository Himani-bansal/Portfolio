import React from 'react'
import hero_pic from "../assets/hero_pic.png"

const Hero_section = () => {
    return <div>
        <div className=" h_100 bg_union d-flex align-items-center justify-content-center pb-5">
            <div className="col-4 text-white ">
                <span className="pt-5 pb-4 main_heading f_39 fw-bold transform-element scale-element ">I AM A PASSIONATE
                    DEVELOPER</span>
                <h5 className="fw-light py-2 fs-3 fw-medium">Hi, I am <span className="fw-medium">
                    Himani Bansal</span></h5>
                <span className="fw-light fs-6 fw-normal transform-element scale-element">Currently i am pursuing MCA with
                    computer science, A curious brain who
                    love to
                    explore new technology.</span>
                <button className="nav-link active ff_roboto f_18 mt-md-3 mt-lg-3 ms-0 resume_btn px-4 py-2 text-nowrap" id="downloadBtn">
                    Download Resume</button>
            </div>
            <div className="col-6 text-center ms-5">
                <div className=" transform-element scale-element "><img className="hero_img ps-4" src={hero_pic} /></div>
            </div>
        </div>
    </div>


}

export default Hero_section
