import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CollaborationApproach = () => {
  const collaborationPrinciples = [
    {
      icon: "MessageSquare",
      title: "Clear Communication",
      description: "Regular updates through your preferred channels - Slack, email, or video calls. You'll never wonder about project status.",
      features: [
        "Daily progress updates",
        "Weekly milestone reviews",
        "24-hour response guarantee",
        "Transparent project tracking"
      ]
    },
    {
      icon: "Users",
      title: "True Partnership",
      description: "I don't just code your requirements - I contribute strategic insights and suggest improvements based on industry best practices.",
      features: [
        "Strategic technical advice",
        "UX/UI improvement suggestions",
        "Performance optimization recommendations",
        "Future scalability planning"
      ]
    },
    {
      icon: "GitBranch",
      title: "Agile Development",
      description: "Flexible, iterative approach that adapts to changing requirements while maintaining project momentum and quality.",
      features: [
        "Sprint-based development cycles",
        "Regular demo sessions",
        "Continuous feedback integration",
        "Rapid prototyping capabilities"
      ]
    },
    {
      icon: "Shield",
      title: "Quality Assurance",
      description: "Rigorous testing and code review processes ensure your project meets the highest standards before delivery.",
      features: [
        "Comprehensive testing protocols",
        "Code review and documentation",
        "Performance benchmarking",
        "Security best practices"
      ]
    }
  ];

  const workingStyles = [
    {
      title: "Remote-First Collaboration",
      description: "Optimized for distributed teams with async communication and flexible scheduling across time zones.",
      icon: "Globe",
      benefits: ["Flexible scheduling", "Documented processes", "Async communication", "Global accessibility"]
    },
    {
      title: "Embedded Team Member",
      description: "Integrate seamlessly with your existing team, participating in standups, planning sessions, and team activities.",
      icon: "Users",
      benefits: ["Team integration", "Cultural alignment", "Shared responsibility", "Knowledge transfer"]
    },
    {
      title: "Independent Contractor",
      description: "Take full ownership of project delivery with minimal oversight, providing regular updates and milestone demos.",
      icon: "Briefcase",
      benefits: ["Self-managed delivery", "Minimal oversight needed", "Results-focused approach", "Efficient execution"]
    }
  ];

  const communicationTools = [
    { name: "Slack", icon: "MessageCircle", usage: "Daily communication and quick updates" },
    { name: "Zoom/Meet", icon: "Video", usage: "Weekly reviews and planning sessions" },
    { name: "GitHub", icon: "GitBranch", usage: "Code collaboration and version control" },
    { name: "Notion/Trello", icon: "Clipboard", usage: "Project management and documentation" },
    { name: "Figma", icon: "Palette", usage: "Design collaboration and feedback" },
    { name: "Email", icon: "Mail", usage: "Formal communications and deliverables" }
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
            My Collaborative Approach
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Success comes from true partnership. I don't just deliver code - I become 
            an extension of your team, contributing insights and ensuring your project exceeds expectations.
          </p>
        </motion.div>

        {/* Collaboration Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {collaborationPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-morphism rounded-2xl p-6 lg:p-8 hover-glow transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center shadow-brand flex-shrink-0">
                  <Icon 
                    name={principle.icon} 
                    size={24} 
                    className="text-white"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                {principle.features.map((feature, idx) => (
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
            </motion.div>
          ))}
        </div>

        {/* Working Styles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
            Flexible Working Styles
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workingStyles.map((style, index) => (
              <div
                key={index}
                className="glass-morphism rounded-2xl p-6 lg:p-8 text-center hover-glow transition-all duration-300"
              >
                <div className="w-16 h-16 bg-surface rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Icon 
                    name={style.icon} 
                    size={32} 
                    className="text-primary"
                  />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  {style.title}
                </h4>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {style.description}
                </p>
                <div className="space-y-2">
                  {style.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <Icon 
                        name="Check" 
                        size={14} 
                        className="text-success flex-shrink-0"
                      />
                      <span className="text-sm text-foreground/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Communication Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
            Communication & Collaboration Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communicationTools.map((tool, index) => (
              <div
                key={index}
                className="glass-morphism rounded-xl p-6 hover-glow transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Icon 
                    name={tool.icon} 
                    size={24} 
                    className="text-primary"
                  />
                  <h4 className="font-semibold text-foreground">
                    {tool.name}
                  </h4>
                </div>
                <p className="text-sm text-foreground/70">
                  {tool.usage}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-morphism rounded-2xl p-8 lg:p-12 text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and see how I can help bring your vision to life. 
            I'm committed to delivering exceptional results through true collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
                              variant="ghost"
                              size="lg"
                              className="bg-[#1c421c] text-green-500 rounded-full px-5 py-2.5 flex items-center gap-2 transition duration-300 hover:brightness-110 shadow-inner border border-green-900/10 hover:bg-[#265226] "
                              iconName="MessageCircle"
                              iconPosition="left"
                            >
                              Start a Conversation
                            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule a Call
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/20">
            <p className="text-sm text-foreground/60 mb-4">
              Typical response time: Within 4 hours during business hours
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-foreground/60">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-success" />
                <span>Available Mon-Fri, 9AM-6PM EAT</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} className="text-success" />
                <span>Remote collaboration worldwide</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborationApproach;