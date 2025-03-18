import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/projects')}
            className="text-secondary hover:text-accent transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80 pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </button>

        <div className="relative rounded-xl overflow-hidden mb-12">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-300 mb-8">{project.details.overview}</p>

              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-2 mb-8">
                {project.details.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
              <p className="text-gray-300 mb-8">{project.details.implementation}</p>

              {project.details.testimonial && (
                <>
                  <h2 className="text-2xl font-semibold mb-4">Testimonial</h2>
                  <blockquote className="border-l-4 border-secondary pl-4 italic text-gray-300 mb-8">
                    "{project.details.testimonial}"
                  </blockquote>
                </>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Project Details</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-400 mb-2">Category</h3>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full">
                    {project.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400 mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/5 rounded-md text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400 mb-2">Links</h3>
                  <div className="space-y-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <Github size={20} />
                        View Source
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;