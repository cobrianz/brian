import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProcessOverview = () => {
  const processSteps = [
    {
      icon: "MessageSquare",
      title: "Discovery & Planning",
      description: "Understanding your vision, requirements, and business goals through detailed consultation.",
      duration: "1-2 weeks"
    },
    {
      icon: "Palette",
      title: "Design & Architecture",
      description: "Creating wireframes, UI designs, and technical architecture blueprints.",
      duration: "2-3 weeks"
    },
    {
      icon: "Code",
      title: "Development & Testing",
      description: "Building your solution with clean code, comprehensive testing, and regular updates.",
      duration: "4-8 weeks"
    },
    {
      icon: "Rocket",
      title: "Deployment & Launch",
      description: "Seamless deployment with performance optimization and go-live support.",
      duration: "1 week"
    },
    {
      icon: "Settings",
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and feature enhancements as your business grows.",
      duration: "Ongoing"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            My Development Process
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            A proven methodology that ensures your project is delivered on time, within budget, 
            and exceeds expectations. Every step is designed for transparency and collaboration.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full"></div>

          <div className="space-y-8 lg:space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <div className="glass-morphism rounded-2xl p-6 lg:p-8 hover-glow transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center shadow-brand">
                        <Icon 
                          name={step.icon} 
                          size={24} 
                          className="text-white"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {step.title}
                        </h3>
                        <span className="text-sm text-primary font-medium">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-gradient-brand rounded-full shadow-brand z-10 my-8">
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>

                {/* Mobile Timeline Node */}
                <div className="lg:hidden flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-full shadow-brand z-10 my-4">
                  <span className="text-white font-bold">
                    {index + 1}
                  </span>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1 lg:max-w-md"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 lg:mt-24"
        >
          <div className="glass-morphism rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
              Why This Process Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "Shield",
                  title: "Risk Mitigation",
                  description: "Early identification and resolution of potential issues"
                },
                {
                  icon: "Clock",
                  title: "On-Time Delivery",
                  description: "Structured timeline with regular milestones and updates"
                },
                {
                  icon: "DollarSign",
                  title: "Budget Control",
                  description: "Transparent pricing with no hidden costs or surprises"
                },
                {
                  icon: "Users",
                  title: "Collaboration",
                  description: "Regular communication and feedback throughout development"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-surface rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon 
                      name={benefit.icon} 
                      size={24} 
                      className="text-primary"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-foreground/70">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessOverview;