
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import AcademicProjects from './components/AcademicProjects';
import Experience from './components/Experience';
import Education from './components/Education';

const App: React.FC = () => {
    return (
        <div className="bg-black min-h-screen">
            <Header />
            <main>
                <Hero />
                <About />
                <Education />
                <Experience />
                <Skills />
                <Projects />
                <AcademicProjects />
                <Achievements />
                <Contact />
            </main>
        </div>
    );
};

export default App;
