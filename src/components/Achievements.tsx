
import React from 'react';
import Section from './shared/Section';
import { ACHIEVEMENTS } from '../constants';
import { TrophyIcon } from './icons/TrophyIcon';

const Achievements: React.FC = () => {
    return (
        <Section id="achievements" className="bg-black">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                My <span className="text-purple-400">Achievements</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
                {ACHIEVEMENTS.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-6 p-6 bg-[#1a1a1a] rounded-lg shadow-lg transition-all duration-300 hover:shadow-purple-500/20 hover:scale-105">
                        <div className="flex-shrink-0">
                            <TrophyIcon className="w-10 h-10 text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-100">{achievement.title}</h3>
                            <p className="text-gray-400 mt-1">{achievement.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Achievements;