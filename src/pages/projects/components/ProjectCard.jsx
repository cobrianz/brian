// ProjectCard.jsx (updated)
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const ProjectCard = ({ project, onViewDetails }) => {
  if (!project) return null;

  const mockUrl =
    project.liveUrl ||
    project.githubUrl ||
    `${(project.title || "project").toLowerCase().replace(/\s+/g, "-")}.app`;

  return (
    <motion.div
      className="card-surface overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Browser-window mockup */}
      <div className="border-b-2 border-border bg-navbar">
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
          </div>
          <div className="text-[11px] text-text-secondary font-mono truncate max-w-[70%]">
            {mockUrl.replace(/^https?:\/\//, "")}
          </div>
          <div className="w-6" />
        </div>
      </div>

      <div className="relative h-48 bg-card">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} mockup`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-secondary">
            <Icon name="ImageOff" size={28} />
          </div>
        )}

        <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs bg-primary/15 text-primary font-medium border-2 border-border">
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
              className="px-2 py-1 bg-card border-2 border-border text-xs rounded-[2px] text-foreground"
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
