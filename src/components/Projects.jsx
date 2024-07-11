import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAOS from './useAOS';
import coin1 from "../project pics/coins/coin1.png";
import coin2 from "../project pics/coins/coins2.png";
import news1 from "../project pics/newsapp/news1.png";
import news2 from "../project pics/newsapp/news2.png";

import text1 from "../project pics/text-converter/text1.png";
import text2 from "../project pics/text-converter/text2.png";
import Netflix1 from "../assets/netflix1.png";
import Netflix2 from "../assets/netflix2.png";
import Netflix3 from "../assets/netflix3.png";
import notes1 from "../project pics/notesapp/notes1.png";
import notes2 from "../project pics/notesapp/notes2.png";
import pg1 from "../project pics/pg-seekers/1.jpeg";
import pg2 from "../project pics/pg-seekers/2.jpeg";
import pg3 from "../project pics/pg-seekers/3.jpeg";
import pg4 from "../project pics/pg-seekers/4.jpeg";
import pg5 from "../project pics/pg-seekers/5.jpeg";
import pg6 from "../project pics/pg-seekers/6.jpeg";
import pg7 from "../project pics/pg-seekers/7.jpeg";
import pg8 from "../project pics/pg-seekers/8.jpeg";

const projects = {
  frontend: [
    {
      title: 'Netflix Clone',
      description: "Developed a Netflix clone showcasing a responsive UI and dynamic content loading through API calls.",
      technology: "React.js , API calls , Axios",
      url1: "https://courageous-kataifi-f4b4e9.netlify.app/",
      url2: "https://github.com/Himani-bansal/Netflix_Clone",
      images: [
        Netflix1,
        Netflix2,
        Netflix3,

      ]
    },
    {
      title: 'CryptoCurrency',
      description: "A cryptocurrency tracking application utilizing Chakra UI for sleek and responsive design, fetching real-time data through API calls.",
      technology: "React.js , Chakra-UI , API calls",
      url1: "https://symphonious-tartufo-66271f.netlify.app/",
      url2: "https://github.com/Himani-bansal/coins",
      images: [
        coin1,
        coin2
      ]
    },
    {
      title: 'Ftatft-News',
      description: "A news application built with React, fetching and displaying real-time news updates through API calls.",
      technology: "React.js, API calls, Bootstrap",
      url1: "https://github.com/Himani-bansal/Newsapp",
      url2: "https://github.com/Himani-bansal/Newsapp",

      images: [
        news1,
        news2
      ]
    },

    {
      title: 'Text-Converter',
      description: "A text converter application with light and dark modes, allowing users to easily switch text between lowercase and uppercase.",
      technology: "React.js, Bootstrap",
      url1: "https://himani-bansal.github.io/textformatter/",
      url2: "https://github.com/Himani-bansal/textformatter",
      images: [
        text1,
        text2

      ]
    }
  ],

  fullstack: [
    {
      title: 'Notes Taking App',
      description: "A full-stack note-taking app with user login and comprehensive CRUD operations for managing notes efficiently.",
      technology: "Mongo DB, Express.js , React.js, Node.js,Bootstrap",
      url1: "https://github.com/Himani-bansal/notestakingapp",
      url2: "https://github.com/Himani-bansal/notestakingapp",
      images: [
        notes1,
        notes2
      ]
    },
    {
      title: 'PG Seekers',
      description: 'A MERN stack PG listing website where users can find and add PG accommodations tailored to their needs.',
      technology: "Mongo DB, Express.js , React.js, Node.js,Bootstrap",
      url1: "https://lnkd.in/dvc6PqVr",
      url2: "https://github.com/Himani-bansal/PGseekers",

      images: [
        pg1,
        pg2,
        pg3, pg4, pg5, pg6, pg7, pg8
      ]
    }
  ]
};

const ProjectCarousel = ({ projects = [] }) => (
  <Carousel interval={null} indicators={false} className='py-lg-5 h_70 '>
    {projects.map((project, index) => (
      <Carousel.Item key={index}>
        <div className="row d-flex m-auto">
          <div data-aos="fade-right" className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center mb-3 py-3 ">
            <Card.Body className="text-white des_card ">
              <Card.Title className="fw-bold f_39 py-3">{project.title}</Card.Title>
              <Card.Text className="fw-lighter f_22">{project.description}</Card.Text>
              <Card.Text className="fw-lighter f_22"><span className='fw_bold f-color-purple'>Built with: </span>{project.technology}</Card.Text>
              <Link to={project.url1} className="nav-link ff_roboto f_22 fw-bold  ms-0  py-2 "> View The Site &gt;&gt;</Link>
              <Link to={project.url2} className="nav-link ff_roboto f_22  fw-bold f-color-purple ms-0 py-2">View The Code &gt;&gt;</Link>
            </Card.Body>
          </div>
          <div data-aos="fade-left" className="col-lg-4  d-flex justify-content-center align-items-center img_box  py-3 my-3 mx-auto ms-lg-3">
            <Card className="rounded-4 hero_image  " >
              <Carousel interval={1000} controls={false}>
                {project.images.map((image, imgIndex) => (
                  <Carousel.Item key={imgIndex}>
                    <Card.Img variant="top" className="p-0 m-0 rounded-4 card_img col-lg-11 " src={image} alt="project_image" />
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
  const [activeTab, setActiveTab] = useState('frontend');

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
        {['frontend', 'fullstack'].map(tab => (
          <li
            key={tab}
            className={`tab_heading mx-lg-4
             ${activeTab === tab ? 'active-tab' : ''}`}
            onClick={(event) => handleTabClick(tab, event)}
          >
            <a className="tab_link" href="/">
              {tab === 'frontend' ? 'frontend' : 'fullstack'}
            </a>
          </li>
        ))}
      </ul>
      <div className="project-section">
        {activeTab === 'frontend' && <ProjectCarousel projects={projects.frontend} />}
        {activeTab === 'fullstack' && <ProjectCarousel projects={projects.fullstack} />}

      </div>
    </div>
  );
};
export default Projects;
