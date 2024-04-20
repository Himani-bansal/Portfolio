import React from 'react'

const ProjectAbout = (props) => {
    return <div className="col-4 text-white ">
        <h5> {props.about}</h5>
        <span className="pb-4 main_heading f_39 fw-bold transform-element scale-element ">{props.name}</span>
        <p className="fw-light fs-6 fw-normal transform-element scale-element ">{props.description}</p>
        <button className="nav-link ff_roboto f_18 mt-md-3 mt-lg-3 ms-0 py-2">
            {props.site} &gt;&gt;</button>
    </div>
}

export default ProjectAbout
