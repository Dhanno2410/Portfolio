
import React from 'react';
import Section from './shared/Section';
import { PERSONAL_DATA, PROJECTS } from '../constants';

const About: React.FC = () => {
    return (
        <Section id="about">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                About <span className="text-purple-400">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1 flex justify-center">
                    <img
                        src={PERSONAL_DATA.profilePicture}
                        alt="Profile"
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-purple-500 shadow-lg"
                    />
                </div>
                <div className="md:col-span-2">
                    <p className="text-lg text-gray-300 leading-relaxed">
                        {PERSONAL_DATA.bio}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-8">
                        <div className="flex items-center gap-4">
                            <span className="text-4xl font-bold text-purple-400">{PERSONAL_DATA.experience}</span>
                            <span className="text-gray-400">Years of <br/>Experience</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-4xl font-bold text-purple-400">{PROJECTS.length}+</span>
                             <span className="text-gray-400">Featured <br/>Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;