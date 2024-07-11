import React from 'react'
import useAOS from './useAOS';
import 'aos/dist/aos.css';

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import github from "../assets/github.png";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import c from "../assets/c.png";


const Skills = () => {
    useAOS();
    return <div className="skills py-4 py-lg-4 d-flex flex-column flex- align-items-center justify-content-center " id="skills">
        <div className="w_70 text-center  " data-aos="zoom-in">
            <h3 className="fs_big fw-bold f-color-white ">Skills</h3>
        </div>
        <div className="col-lg-8 col-md-5 col-sm-5 f_22 text-center p-lg-5 m-auto  ">
            <p className=" skills_para f-color-white " data-aos="fade-up">
                The main area of expertise is front end development (client side of the web).
                HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins,
                features, animations, and coding interactive layouts. I have also full-stack developer experience
                with one of the most popular open source CMS on the web - WordPress
                Visit my <a href="/" className=" text-decoration-none fw-bold f_24 f-color-purple ">Github </a>for more
                details.
            </p>
        </div>
        <div className="px-4 col-lg-9 d-flex flex-wrap  justify-content-center align-items-center" data-aos="fade-up" >
            <div data-aos="zoom-in-up" className='skills_box  p-3 '>
                <img className=" skills_img m-lg-5 mb-md-2 mb-lg-4 scale-element transform-element " src={html} alt="image" />
                <h6 className="f-color-white text-center "> HTML5</h6>
            </div>
            <div data-aos="zoom-in-up" className='skills_box scale-element transform-element p-3'><img className="scale-element transform-element skills_img m-lg-5 mb-lg-4 " src={css} alt="image" />
                <h6 className="f-color-white text-center"> CSS3</h6>
            </div>
            <div data-aos="zoom-in-up" className='skills_box scale-element transform-element p-3'> <img className="skills_img scale-element transform-element m-lg-5 mb-lg-4 " src={js} />
                <h6 className="f-color-white text-center"> Javascript</h6>
            </div>
            <div data-aos="zoom-in-up" className='skills_box scale-element transform-element p-3'> <img className="skills_img scale-element transform-element m-lg-5 mb-lg-4 " src={bootstrap} alt="image" />
                <h6 className="f-color-white text-center"> Bootstrap</h6>
            </div>
            <div data-aos="zoom-in-up" className='skills_box scale-element transform-element p-3'> <img className="skills_img scale-element transform-element m-lg-5 mb-lg-4 " src={react} alt="image" />
                <h6 className="f-color-white text-center"> React</h6>
            </div>
            <div data-aos="zoom-in-up" className='skills_box scale-element transform-element p-3'> <img className="skills_img scale-element transform-element m-lg-5 mb-lg-4 " src={nodejs} alt="image" />
                <h6 className="f-color-white text-center"> Nodejs</h6>
            </div>
            <div data-aos="zoom-in-up" className='skills_box scale-element transform-element p-3'> <img className="skills_img scale-element transform-element m-lg-5 mb-lg-4 " src={c} alt="image" />
                <h6 className="f-color-white text-center"> C++</h6>
            </div>
            <div data-aos="zoom-in-up" className='skills_box scale-element transform-element p-3'> <img className="skills_img scale-element transform-element m-lg-5 mb-lg-4 " src={github} alt="image" />
                <h6 className="f-color-white text-center"> Github</h6>
            </div>
        </div>
    </div>

}

export default Skills
