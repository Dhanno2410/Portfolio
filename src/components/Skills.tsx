
import React from 'react';
import Section from './shared/Section';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
    return (
        <Section id="skills" className="bg-black">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
                My <span className="text-purple-400">Toolkit</span>
            </h2>
            <div className="flex flex-col gap-12">
                {SKILL_CATEGORIES.map((category) => (
                    <div key={category.name}>
                        <h3 className="text-xl font-bold text-gray-200 mb-6 text-center md:text-left">{category.name}</h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            {category.skills.map((skill) => (
                                <div key={skill.name} className="bg-[#1a1a1a] text-gray-200 px-5 py-2.5 rounded-lg text-md font-medium shadow-md transition-all duration-300 hover:bg-purple-600 hover:shadow-purple-500/20 cursor-default">
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;