
import React from 'react';
import Section from './shared/Section';
import { EXPERIENCES } from '../constants';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

const Experience: React.FC = () => {
    return (
        <Section id="experience">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
                Professional <span className="text-purple-400">Experience</span>
            </h2>
            <div className="max-w-3xl mx-auto">
                <div className="relative border-l-2 border-gray-700/50">
                    {EXPERIENCES.map((exp, index) => (
                        <div key={index} className="mb-12 ml-12 pl-4">
                            <span className="absolute -left-[21px] flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full ring-8 ring-black">
                                <BriefcaseIcon className="w-5 h-5 text-purple-400" />
                            </span>
                            <div className="p-6 bg-[#1a1a1a] rounded-lg shadow-md border border-gray-800 transition-all duration-300 hover:border-purple-700/50">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2">
                                    <h3 className="text-xl font-bold text-gray-100">{exp.role}</h3>
                                    <span className="bg-purple-900/50 text-purple-300 text-xs sm:text-sm font-medium px-2.5 py-1 rounded-full w-fit">{exp.duration}</span>
                                </div>
                                <p className="text-md font-semibold text-gray-300 mb-4">{exp.company} - <span className="font-normal text-gray-400">{exp.location}</span></p>
                                <ul className="space-y-2 text-gray-400 text-sm list-disc list-inside">
                                    {exp.responsibilities.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;