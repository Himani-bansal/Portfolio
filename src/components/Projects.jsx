import React, { useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAOS from './useAOS';
import project1 from "../assets/himani.png";
import project_pic from "../assets/about-image.png";
import travel from "../assets/travel1.png";
import travel1 from "../assets/travel2.png";
import travel2 from "../assets/travel3.png";
import travel3 from "../assets/travel4.png";
import Netflix1 from "../assets/netflix1.png";
import Netflix2 from "../assets/netflix2.png";
import Netflix3 from "../assets/netflix3.png";
import webclick1 from "../assets/webclick1.png";
import webclick2 from "../assets/webclick2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";

const projects = {
  javascript: [
    {
      title: 'JavaScript Project 1',
      description: 'Description of JavaScript Project 1.',
      images: [
        project1,
        project_pic,
        project_pic,
        project_pic,
      ]
    },
    {
      title: 'JavaScript Project 2',
      description: 'Description of JavaScript Project 2.',
      images: [
        project1,
        project_pic,
        project_pic,
        project_pic,
      ]
    }
  ],
  react: [
    {
      title: 'WebClicks',
      description: 'It is a react template made with chakra ui and showing the respective components of chakra ui.',
      images: [
        webclick1,
        webclick2,
        web3,
        web4,
      ]
    },
    {
      title: 'Travel & Tourism',
      description: 'It is a react template made with chakra ui and showing the respective components of chakra ui and is available in both dark and light mode.',
      images: [
        travel,
        travel1,
        travel2,
        travel3,
      ]
    },
    {
      title: 'Netflix Clone',
      description: 'It is a sample of Netflix Clone made of using react specially to learn the use of APIs',
      images: [
        Netflix1,
        Netflix2,
        Netflix3,

      ]
    }
  ],
  htmlcss: [
    {
      title: 'HTML Project 1',
      description: 'Description of HTML Project 1.',
      images: [
        project1,
        project_pic,
        project_pic,
        project_pic,
      ]
    },
    {
      title: 'HTML Project 2',
      description: 'Description of HTML Project 2.',
      images: [
        project1,
        project_pic,
        project_pic,
        project_pic,
      ]
    }
  ]
};

const ProjectCarousel = ({ projects = [] }) => (
  <Carousel interval={null} indicators={false}className='py-lg-5 h_70 '>
    {projects.map((project, index) => (
      <Carousel.Item key={index}>
        <div className="row d-flex m-auto">
          <div data-aos="fade-right" className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center mb-3 py-3 ">
            <Card.Body className="text-white des_card ">
              <Card.Title className="fw-bold f_39 py-3">{project.title}</Card.Title>
              <Card.Text className="fw-lighter f_22">{project.description}</Card.Text>
              <Card.Text className="fw-lighter f_22"><span className='fw_bold'>Built with:</span>{project.technology}</Card.Text>
              <a href="#" className="nav-link ff_roboto f_22 fw-bold f-color-purple ms-0  py-2 ">View The Site &gt;&gt;</a>
              <a href="#" className="nav-link ff_roboto f_22  fw-bold  ms-0 py-2">View The Code &gt;&gt;</a>
            </Card.Body>
          </div>
          <div data-aos="fade-left" className="col-lg-4  d-flex justify-content-center align-items-center img_box  py-3 my-3 mx-auto ms-lg-3">
            <Card className="rounded-4 hero_image  " >
              <Carousel controls={false}>
                {project.images.map((image, imgIndex) => (
                  <Carousel.Item key={imgIndex}>
                    <Card.Img variant="top" className="p-0 m-0 rounded-4 card_img col-lg-11 " src={image} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card>
          </div>
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
);

const Projects = () => {
  useAOS();
  const [activeTab, setActiveTab] = useState('javascript');

  const handleTabClick = (tab, event) => {
    event.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="bg_union project_section align-items-center justify-content-center" id="projects">
      <div className="text-center py-5">
        <h3 className="fs_big fw-bold f-color-white m-auto">Projects</h3>
      </div>
      <ul data-aos="zoom-in" className="f-color-white d-flex tabs justify-content-center align-items-center fw-bold mb-4">
        {['javascript', 'react', 'htmlcss'].map(tab => (
          <li
            key={tab}
            className={`tab_heading mx-lg-4
             ${activeTab === tab ? 'active-tab' : ''}`}
            onClick={(event) => handleTabClick(tab, event)}
          >
            <a className="tab_link" href="#">
              {tab === 'javascript' ? 'JavaScript' : tab === 'react' ? 'React.js' : 'HTML/CSS'}
            </a>
          </li>
        ))}
      </ul>
      <div className="project-section">
        {activeTab === 'javascript' && <ProjectCarousel projects={projects.javascript} />}
        {activeTab === 'react' && <ProjectCarousel projects={projects.react} />}
        {activeTab === 'htmlcss' && <ProjectCarousel projects={projects.htmlcss} />}
      </div>
    </div>
  );
};
export default Projects;
