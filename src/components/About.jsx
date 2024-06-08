import React from 'react';
import useAOS from './useAOS';
import 'aos/dist/aos.css';
import about_img from "../assets/about-image.png";

export const About = () => {
  useAOS();
  return (
    <div className=" about_section h-100 bg_union d-flex flex-column align-items-center justify-content-center f-color-white pb-4" id="about">
      <div className="w_70 text-center mt-5" data-aos="zoom-in">
        <h3 className="fs_big fw-bold py-md-3">About Me</h3>
      </div>
      <div className="w_80 f_22 d-flex align-items-center justify-content-center flex-column flex-md-row">
        <div className="col-md-4 text-center" data-aos="fade-up">
          <img className="about_img img-fluid" src={about_img} alt="About" />
        </div>
        <p data-aos="fade-up" className="col-md-7 f_24 about_para">
          Welcome to my portfolio! I’m Himani Bansal, a passionate Full Stack Developer currently pursuing my
          Master of Computer Applications (MCA). I thrive on turning ideas into reality through elegant and
          efficient code. My journey into the world of programming started with a curiosity to understand how
          things work behind the scenes on the web. Since then, I have dived deep into technologies like HTML,
          CSS, JavaScript, and various frameworks like React.js and Node.js, honing my skills to build responsive
          and dynamic web applications. I am excited about leveraging my academic knowledge and practical
          experience to contribute meaningfully to innovative projects. Currently seeking internships or full-time
          opportunities to further enrich my skills and contribute to impactful projects. Let’s connect and create
          something awesome together!
        </p>
      </div>
    </div>
  );
}
