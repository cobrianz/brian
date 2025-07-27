import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'Eye' },
    { id: 'technical', name: 'Technical Details', icon: 'Code' },
    { id: 'challenges', name: 'Challenges & Solutions', icon: 'Zap' },
    { id: 'results', name: 'Results & Impact', icon: 'TrendingUp' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-6xl max-h-[90vh] bg-card rounded-2xl shadow-premium-strong overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon name="Briefcase" size={24} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
                  <p className="text-text-secondary">{project.type} • {project.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {project.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Icon name="Github" size={16} className="mr-2" />
                    Code
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-text-secondary hover:text-foreground"
                >
                  <Icon name="X" size={24} />
                </Button>
              </div>
            </div>

            <div className="flex h-[calc(90vh-120px)]">
              <div className="w-1/2 p-6 border-r border-border">
                <div className="relative h-full">
                  <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-surface rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-success">{project.impact}</div>
                      <div className="text-sm text-text-secondary">Performance Boost</div>
                    </div>
                    <div className="bg-surface rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">{project.rating}</div>
                      <div className="text-sm text-text-secondary">Client Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-1/2 flex flex-col">
                <div className="flex border-b border-border">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'text-primary border-b-2 border-primary' :'text-text-secondary hover:text-foreground'
                      }`}
                    >
                      <Icon name={tab.icon} size={16} />
                      <span>{tab.name}</span>
                    </button>
                  ))}
                </div>

                <div className="flex-1 p-6 overflow-y-auto">
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Project Overview</h3>
                        <p className="text-text-secondary leading-relaxed">{project.fullDescription}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Technology Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-surface text-foreground text-sm rounded-lg"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                              <span className="text-text-secondary">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === 'technical' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Architecture Overview</h3>
                        <p className="text-text-secondary leading-relaxed mb-4">{project.architecture}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Code Highlights</h3>
                        <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                          <pre className="text-foreground overflow-x-auto">
                            {project.codeSnippet}
                          </pre>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Performance Metrics</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {project.metrics.map((metric, index) => (
                            <div key={index} className="bg-surface rounded-lg p-3">
                              <div className="text-lg font-semibold text-primary">{metric.value}</div>
                              <div className="text-sm text-text-secondary">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'challenges' && (
                    <div className="space-y-6">
                      {project.challenges.map((challenge, index) => (
                        <div key={index} className="border-l-4 border-warning pl-4">
                          <h4 className="font-semibold text-foreground mb-2">{challenge.title}</h4>
                          <p className="text-text-secondary mb-3">{challenge.description}</p>
                          <div className="bg-surface rounded-lg p-3">
                            <h5 className="font-medium text-success mb-2">Solution:</h5>
                            <p className="text-text-secondary text-sm">{challenge.solution}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'results' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Project Impact</h3>
                        <div className="grid grid-cols-1 gap-4">
                          {project.results.map((result, index) => (
                            <div key={index} className="bg-surface rounded-lg p-4">
                              <div className="flex items-center space-x-3 mb-2">
                                <Icon name="TrendingUp" size={20} className="text-success" />
                                <h4 className="font-semibold text-foreground">{result.title}</h4>
                              </div>
                              <p className="text-text-secondary">{result.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {project.testimonial && (
                        <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                          <div className="flex items-start space-x-3">
                            <Icon name="Quote" size={20} className="text-primary mt-1" />
                            <div>
                              <p className="text-foreground italic mb-3">"{project.testimonial.content}"</p>
                              <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                  <span className="text-primary-foreground text-sm font-medium">
                                    {project.testimonial.author.charAt(0)}
                                  </span>
                                </div>
                                <div>
                                  <div className="font-medium text-foreground">{project.testimonial.author}</div>
                                  <div className="text-sm text-text-secondary">{project.testimonial.role}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;