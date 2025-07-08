
import React from 'react';
import Section from './shared/Section';
import ProjectCard from './shared/ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
    return (
        <Section id="projects">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                Featured <span className="text-purple-400">Projects</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;