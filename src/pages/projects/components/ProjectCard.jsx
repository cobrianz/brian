import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-card rounded-xl overflow-hidden shadow-premium hover:shadow-premium-strong transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Project Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === 'Live' ?'bg-success text-success-foreground' 
              : project.status === 'In Development' ?'bg-warning text-warning-foreground' :'bg-secondary text-secondary-foreground'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Quick Action Buttons */}
        <motion.div
          className="absolute top-4 right-4 flex space-x-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          {project.liveUrl && (
            <Button
              variant="secondary"
              size="icon"
              className="w-8 h-8 bg-white/20 backdrop-blur-sm hover:bg-white/30"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveUrl, '_blank');
              }}
            >
              <Icon name="ExternalLink" size={16} />
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="secondary"
              size="icon"
              className="w-8 h-8 bg-white/20 backdrop-blur-sm hover:bg-white/30"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubUrl, '_blank');
              }}
            >
              <Icon name="Github" size={16} />
            </Button>
          )}
        </motion.div>

        {/* Project Type */}
        <div className="absolute bottom-4 left-4">
          <span className="px-2 py-1 bg-primary/20 backdrop-blur-sm text-primary text-xs font-medium rounded">
            {project.type}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center space-x-1 text-warning">
            <Icon name="Star" size={16} className="fill-current" />
            <span className="text-sm font-medium">{project.rating}</span>
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-surface text-foreground text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Project Metrics */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={14} />
              <span>{project.teamSize}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-success">
              {project.impact}
            </div>
            <div className="text-xs text-text-secondary">Impact</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => onViewDetails(project)}
          >
            <Icon name="Eye" size={16} className="mr-2" />
            View Details
          </Button>
          {project.liveUrl && (
            <Button
              variant="default"
              size="sm"
              className="flex-1"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <Icon name="ExternalLink" size={16} className="mr-2" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;