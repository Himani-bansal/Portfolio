import React from 'react'

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import github from "../assets/github.png";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import c from "../assets/c.png";


const Skills = () => {
    return <div className="skills bg_union py-4 py-lg-4 d-flex flex-column flex- align-items-center justify-content-center">
        <div className="w_70 text-center ">
            <h3 className="fs_big fw-bold f-color-white">Skills &amp; Experience</h3>
        </div>
        <div className="w_70 f_22 text-center p-lg-5 m-auto ">
            <p className=" skills_para f-color-white">
                The main area of expertise is front end development (client side of the web).
                HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins,
                features, animations, and coding interactive layouts. I have also full-stack developer experience
                with one of the most popular open source CMS on the web - WordPress
                Visit my <a href="/" className=" text-decoration-none fw-bold f_24 f-color-purple ">Github </a>for more
                details.
            </p>
        </div>
        <div className="w_70 d-flex flex-wrap justify-content-center align-items-center">
            <div>
                <img className="transform-element scale-element skills_img m-lg-5 mb-lg-4 " src={html} />
                <h6 className="f-color-white text-center"> HTML5</h6>
            </div>
            <div><img className="transform-element scale-element skills_img m-lg-5 mb-lg-4 " src={css} />
                <h6 className="f-color-white text-center"> CSS3</h6>
            </div>
            <div> <img className="transform-element scale-element skills_img m-lg-5 mb-lg-4 " src={js} />
                <h6 className="f-color-white text-center"> Javascript</h6>
            </div>
            <div> <img className="transform-element scale-element skills_img m-lg-5 mb-lg-4 " src={bootstrap} />
                <h6 className="f-color-white text-center"> Bootstrap</h6>
            </div>
            <div> <img className="transform-element scale-element skills_img m-lg-5 mb-lg-4 " src={react} />
                <h6 className="f-color-white text-center"> React</h6>
            </div>
            <div> <img className="transform-element scale-element skills_img m-lg-5 mb-lg-4 " src={nodejs} />
                <h6 className="f-color-white text-center"> Nodejs</h6>
            </div>
            <div> <img className="transform-element scale-element skills_img m-lg-5 mb-lg-4 " src={c} />
                <h6 className="f-color-white text-center"> C++</h6>
            </div>
            <div> <img className="transform-element scale-element skills_img m-lg-5 mb-lg-4 " src={github} />
                <h6 className="f-color-white text-center"> Github</h6>
            </div>
        </div>
    </div>

}

export default Skills
