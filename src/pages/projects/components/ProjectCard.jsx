// ProjectCard.jsx (updated)
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const ProjectCard = ({ project, onViewDetails }) => {
  if (!project) return null;
  return (
    <motion.div
      className="bg-card rounded-xl shadow-premium overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={`${project.title} cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 px-2 py-1 rounded-md text-xs bg-primary/20 text-primary font-medium">
          {project.type}
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary line-clamp-3 mb-4">
          {project.description || project.fullDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {(project.technologies || []).slice(0, 4).map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="px-2 py-1 bg-surface text-xs rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="text-xs text-text-secondary">{project.duration}</div>
          <Button
            type="button"
            size="sm"
            onClick={() => onViewDetails?.(project)}
          >
            <Icon name="Eye" size={16} className="mr-2" />
            View
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    fullDescription: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }),
  onViewDetails: PropTypes.func,
};

ProjectCard.defaultProps = {
  project: null,
  onViewDetails: undefined,
};

export default ProjectCard;
