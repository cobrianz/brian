import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-morphism rounded-2xl p-6 lg:p-8 hover-glow transition-all duration-300 border border-border/20 hover:border-primary/30">
        {/* Service Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-brand rounded-xl flex items-center justify-center shadow-brand">
              <Icon 
                name={service.icon} 
                size={24} 
                className="text-white"
              />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm lg:text-base">
                {service.subtitle}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
              {service.priceRange}
            </div>
            <div className="text-xs text-text-secondary">
              {service.timeline}
            </div>
          </div>
        </div>

        {/* Service Description */}
        <p className="text-foreground/80 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <Icon 
                name="Check" 
                size={16} 
                className="text-success flex-shrink-0"
              />
              <span className="text-sm text-foreground/80">{feature}</span>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-surface rounded-full text-xs text-foreground/80 border border-border/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <Button
          variant="ghost"
          onClick={toggleExpanded}
          className="w-full mb-4 text-primary hover:bg-primary/10"
          iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
          iconPosition="right"
        >
          {isExpanded ? "Show Less" : "View Details & Process"}
        </Button>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-border/20 pt-6">
                {/* Development Process */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Development Process
                  </h4>
                  <div className="space-y-3">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-white">
                            {idx + 1}
                          </span>
                        </div>
                        <div>
                          <h5 className="font-medium text-foreground mb-1">
                            {step.title}
                          </h5>
                          <p className="text-sm text-foreground/70">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Project Example */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Recent Project Example
                  </h4>
                  <div className="bg-surface/50 rounded-lg p-4 border border-border/20">
                    <h5 className="font-medium text-foreground mb-2">
                      {service.projectExample.title}
                    </h5>
                    <p className="text-sm text-foreground/70 mb-3">
                      {service.projectExample.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {service.projectExample.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-success">
                            {result.metric}
                          </div>
                          <div className="text-xs text-foreground/60">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                   <Button
                                  variant="ghost"
                                  size="lg"
                                  className="w-full text-xs sm:text-sm bg-[#1c421c] text-green-500 rounded-full px-5 py-2.5 flex items-center gap-2 transition duration-300 hover:brightness-110 shadow-inner border border-green-900/10 hover:bg-[#265226]"
                                  iconName="MessageCircle"
                                  iconPosition="left"
                                >
                                  Discuss This Service
                                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ServiceCard;