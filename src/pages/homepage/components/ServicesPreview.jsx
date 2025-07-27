import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesPreview = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      description: "End-to-end web applications using React, Node.js, and modern databases",
      icon: "Code",
      technologies: ["React", "Node.js", "MongoDB", "PostgreSQL"],
      features: [
        "Responsive design implementation",
        "RESTful API development",
        "Database optimization",
        "Performance monitoring"
      ],
      deliveryTime: "2-8 weeks",
      startingPrice: "$2,500"
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Modern, responsive user interfaces with exceptional user experience",
      icon: "Palette",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Mobile-first responsive design",
        "Interactive animations",
        "Cross-browser compatibility",
        "Accessibility compliance"
      ],
      deliveryTime: "1-4 weeks",
      startingPrice: "$1,200"
    },
    {
      id: 3,
      title: "Backend API Development",
      description: "Scalable server-side solutions with robust security and performance",
      icon: "Server",
      technologies: ["Node.js", "Express", "Python", "AWS"],
      features: [
        "RESTful & GraphQL APIs",
        "Authentication systems",
        "Cloud deployment",
        "Performance optimization"
      ],
      deliveryTime: "1-6 weeks",
      startingPrice: "$1,800"
    },
    {
      id: 4,
      title: "Technical Consulting",
      description: "Strategic guidance for technology decisions and architecture planning",
      icon: "Lightbulb",
      technologies: ["Architecture", "Strategy", "Code Review", "Mentoring"],
      features: [
        "Technology stack recommendations",
        "Code quality audits",
        "Performance optimization",
        "Team mentoring"
      ],
      deliveryTime: "Flexible",
      startingPrice: "$150/hour"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(82,113,255,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Zap" size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">Services & Expertise</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Full-Stack Solutions for{' '}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            From concept to deployment, I deliver scalable web solutions that drive business growth. 
            Specializing in React, Node.js, and cloud technologies with a focus on performance and user experience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative"
            >
              <div className="glass-morphism p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 h-full hover-glow">
                {/* Service Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={service.icon} size={24} className="text-primary" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-surface/50 border border-border rounded text-xs text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-surface/50 border border-border rounded text-xs text-text-secondary">
                      +{service.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Pricing & Timeline */}
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-text-secondary">From {service.startingPrice}</span>
                  <span className="text-text-secondary">{service.deliveryTime}</span>
                </div>

                {/* Hover Details */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredService === service.id ? 1 : 0,
                    height: hoveredService === service.id ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-border pt-4 mt-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs text-text-secondary">
                          <Icon name="Check" size={12} className="text-success" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-morphism p-8 rounded-2xl border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a solution that exceeds your expectations. From initial consultation to final deployment, I'm here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services-technical-capability-showcase">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover-scale"
                  iconName="Eye"
                  iconPosition="left"
                >
                  View All Services
                </Button>
              </Link>
              
              <Link to="/contact-professional-connection-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-cta-primary text-cta-primary hover:bg-cta-primary hover:text-white hover-scale"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Start Project Discussion
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;