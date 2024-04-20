import React, { useRef } from 'react'
import MyCarousel from './Carousel.jsx'
import html from "../assets/html.png"
import bg_pic from '../assets/bg_pic.jpg';
import css from "../assets/css.png"
import js from "../assets/js.png"
import ProjectAbout from './ProjectAbout.jsx'



const projects = () => {

    
    return <div class=" bg_union Projects py-4">

        <div class=" text-center pt-4">
            <h3 class="fs_big fw-bold f-color-white">Projects</h3>
        </div>
    

        <div className="row container">
            <div className="col d-flex align-items-center justify-content-center flex-column">
                <img className="image py-4 rounded-circle" src={bg_pic} />
                <img className="image py-4 rounded-circle" src={bg_pic} />
                <img className="image py-4 rounded-circle" src={bg_pic} />
            </div>
            <div className="col  d-flex align-items-center justify-content-center flex-column ">
                <div className='project_box f-color-white p-2 border'>
                    <img class="main-image" src={bg_pic} />
                    <h2>title</h2>
                    <p>description</p>
                    <h4>view site</h4>
                    <h4>view code</h4>

                </div>
            </div>

        </div>

    </div >
}

export default projects
