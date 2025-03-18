import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types/project';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project }) => {
  return (
    <div className="h-full bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg border border-transparent hover:border-secondary transition-all duration-300">
      <div className="relative h-48">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      
      <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
            {project.category}
          </span>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <Github size={20} className="text-gray-400 hover:text-white" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <ExternalLink size={20} className="text-gray-400 hover:text-white" />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/5 rounded-md text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="mt-auto">
          <Link
            to={`/projects/${project.id}`}
            className="project-card-link"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;