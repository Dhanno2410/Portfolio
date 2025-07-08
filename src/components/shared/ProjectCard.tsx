
import React from 'react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-purple-500/20 transform hover:-translate-y-2 bg-[#1a1a1a] flex flex-col h-full border border-gray-800 hover:border-purple-700">
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-700/50">
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                <span key={tag} className="bg-purple-900/50 text-purple-300 text-xs font-medium px-2.5 py-1 rounded-full">
                    {tag}
                </span>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;