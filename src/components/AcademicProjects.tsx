
import React from 'react';
import Section from './shared/Section';
import AcademicProjectCard from './shared/AcademicProjectCard';
import { ACADEMIC_PROJECTS } from '../constants';

const AcademicProjects: React.FC = () => {
    return (
        <Section id="academic-projects" className="bg-black">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                Academic & Capstone <span className="text-purple-400">Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ACADEMIC_PROJECTS.map((project, index) => (
                    <AcademicProjectCard key={index} project={project} />
                ))}
            </div>
        </Section>
    );
};

export default AcademicProjects;