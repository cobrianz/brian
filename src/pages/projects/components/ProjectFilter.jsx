import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ 
  categories, 
  technologies, 
  selectedCategory, 
  selectedTechnologies, 
  onCategoryChange, 
  onTechnologyToggle,
  onClearFilters,
  projectCount 
}) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-premium">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Filter Projects</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          className="text-text-secondary hover:text-foreground"
        >
          <Icon name="X" size={16} className="mr-2" />
          Clear All
        </Button>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Project Type</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-surface text-foreground hover:bg-primary/20 hover:text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon name={category.icon} size={16} className="mr-2 inline" />
              {category.name}
              <span className="ml-2 text-xs opacity-70">({category.count})</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Technology Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <motion.button
              key={tech.id}
              onClick={() => onTechnologyToggle(tech.id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedTechnologies.includes(tech.id)
                  ? 'bg-accent text-accent-foreground shadow-glow'
                  : 'bg-surface text-foreground hover:bg-accent/20 hover:text-accent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech.name}
              <span className="ml-2 text-xs opacity-70">({tech.count})</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-2 text-sm text-text-secondary">
          <Icon name="Filter" size={16} />
          <span>Showing {projectCount} projects</span>
        </div>
        <div className="flex items-center space-x-2">
          {selectedTechnologies.length > 0 && (
            <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">
              {selectedTechnologies.length} tech filters
            </span>
          )}
          {selectedCategory !== 'all' && (
            <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
              Category filtered
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;