import React from 'react'
import { Navbar } from '../components/Navbar'
import Hero_section from '../components/Hero_section'
import { About } from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
    return <> <Navbar />
        <Hero_section />
        <About />
        <Skills />
        <Projects />
        <Contact />

    </>

}

export default Home
