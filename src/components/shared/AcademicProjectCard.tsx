
import React from 'react';
import type { AcademicProject } from '../../types';

interface AcademicProjectCardProps {
  project: AcademicProject;
}

const AcademicProjectCard: React.FC<AcademicProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col h-full border border-gray-800 hover:border-purple-700">
      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-3 text-gray-100">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tag) => (
            <span key={tag} className="bg-purple-900/50 text-purple-300 text-xs font-medium px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed"><span className="font-semibold text-gray-300">Objective:</span> {project.objective}</p>
      </div>
      
      <div className="mt-auto pt-4 border-t border-gray-700/50">
        <h4 className="font-semibold text-gray-300 mb-3">Role & Contribution:</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
            {project.roleAndContribution.map((item, index) => (
                <li key={index} className="flex items-start">
                    <svg className="w-3 h-3 mr-3 mt-1 flex-shrink-0 text-purple-400" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AcademicProjectCard;