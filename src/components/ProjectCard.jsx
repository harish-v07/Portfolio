import React from 'react';
import { FaCode } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, codeLink }) => {
  return (
    <div className="bg-card-bg border border-border-color rounded-lg p-6 flex flex-col h-full transform hover:-translate-y-1 transition-transform duration-300">
      <h3 className="text-xl font-bold text-accent mb-2">{title}</h3>
      <p className="text-secondary-text text-sm flex-grow mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      {codeLink && codeLink !== '#' && (
        <a 
          href={codeLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-accent font-semibold hover:text-accent-hover transition-colors duration-300 mt-auto flex items-center gap-2"
        >
          <FaCode /> View Code
        </a>
      )}
    </div>
  );
};

export default ProjectCard;