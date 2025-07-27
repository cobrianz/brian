import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const FeaturedProject = ({ project, onViewDetails }) => {
  return (
    <motion.div
      className="bg-card rounded-2xl overflow-hidden shadow-premium-strong mb-12"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="relative h-96 lg:h-auto">
          <div className="relative h-full">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-cta-primary text-white text-sm font-medium rounded-full">
                Featured Project
              </span>
            </div>
          </div>
        </div>

        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Icon name="Star" size={20} className="text-primary" />
            </div>
            <div>
              <span className="text-primary text-sm font-medium">
                {project.type}
              </span>
              <div className="text-xs text-text-secondary">
                {project.duration}
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-4">
            {project.title}
          </h2>

          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            {project.fullDescription}
          </p>

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
              Key Achievements
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface rounded-lg p-3">
                <div className="text-xl font-bold text-success">
                  {project.impact}
                </div>
                <div className="text-xs text-text-secondary">
                  Performance Boost
                </div>
              </div>
              <div className="bg-surface rounded-lg p-3">
                <div className="text-xl font-bold text-primary">
                  {project.rating}
                </div>
                <div className="text-xs text-text-secondary">Client Rating</div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 6).map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-surface text-foreground text-sm rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              className="flex-1 bg-primary hover:bg-primary/90"
              onClick={() => onViewDetails(project)}
            >
              <Icon name="Eye" size={18} className="mr-2" />
              View Case Study
            </Button>
            <div className="flex space-x-3">
              {project.liveUrl && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.liveUrl, "_blank")}
                >
                  <Icon name="ExternalLink" size={18} className="mr-2" />
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Icon name="Github" size={18} className="mr-2" />
                  Code
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
