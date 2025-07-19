import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-card rounded-xl p-6 text-center shadow-premium hover:shadow-premium-strong transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Icon name={stat.icon} size={24} className="text-primary" />
          </div>
          <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
          <div className="text-text-secondary text-sm">{stat.label}</div>
          {stat.change && (
            <div className={`text-xs mt-2 flex items-center justify-center space-x-1 ${
              stat.change.startsWith('+') ? 'text-success' : 'text-error'
            }`}>
              <Icon 
                name={stat.change.startsWith('+') ? 'TrendingUp' : 'TrendingDown'} 
                size={12} 
              />
              <span>{stat.change}</span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectStats;