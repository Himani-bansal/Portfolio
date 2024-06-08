import React from 'react'

import Hero_section from '../components/Hero_section'
import { About } from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact.jsx'
import BackToTop from './BackToTop.jsx'
import Education from './Education.jsx'
// import Certificates from './Certificates.jsx'

const Home = () => {
    return <>
        <Hero_section />
        <About />
        <Skills />
        <Education />
        <Projects />
        {/* <Certificates /> */}
        <Contact />
        <BackToTop />

    </>

}

export default Home
