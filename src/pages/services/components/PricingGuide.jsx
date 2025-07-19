import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingGuide = () => {
  const [selectedPackage, setSelectedPackage] = useState('professional');

  const pricingPackages = [
    {
      id: 'starter',
      name: 'Starter Package',
      price: '$2,500 - $5,000',
      duration: '2-4 weeks',
      description: 'Perfect for small businesses and startups looking to establish their digital presence.',
      features: [
        'Responsive landing page or simple website',
        'Basic contact forms and integrations',
        'Mobile-first design approach',
        'SEO optimization basics',
        'Content management system setup',
        '30 days of support and maintenance'
      ],
      ideal: 'Small businesses, startups, personal brands',
      technologies: ['React', 'Tailwind CSS', 'Netlify/Vercel'],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional Package',
      price: '$5,000 - $15,000',
      duration: '4-8 weeks',
      description: 'Comprehensive solution for growing businesses needing robust web applications.',
      features: [
        'Full-stack web application development',
        'Custom API development and integration',
        'User authentication and authorization',
        'Database design and optimization',
        'Advanced UI/UX with animations',
        'Performance optimization and testing',
        'Deployment and CI/CD setup',
        '90 days of support and maintenance'
      ],
      ideal: 'Growing businesses, SaaS products, e-commerce',
      technologies: ['React', 'Node.js', 'MongoDB/PostgreSQL', 'AWS/Digital Ocean'],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Package',
      price: '$15,000+',
      duration: '8-16 weeks',
      description: 'Scalable enterprise solutions with advanced features and dedicated support.',
      features: [
        'Complex multi-platform applications',
        'Microservices architecture',
        'Advanced security implementations',
        'Third-party integrations and APIs',
        'Performance monitoring and analytics',
        'Load balancing and scalability',
        'Documentation and team training',
        '6 months of priority support'
      ],
      ideal: 'Large enterprises, complex systems, high-traffic applications',
      technologies: ['React', 'Node.js', 'Docker', 'Kubernetes', 'AWS/Azure'],
      popular: false
    }
  ];

  const additionalServices = [
    {
      service: 'Performance Audit & Optimization',
      price: '$500 - $2,000',
      description: 'Comprehensive analysis and optimization of existing applications'
    },
    {
      service: 'API Development & Integration',
      price: '$1,000 - $5,000',
      description: 'Custom API development or third-party service integrations'
    },
    {
      service: 'Mobile App Development',
      price: '$8,000 - $25,000',
      description: 'React Native mobile applications for iOS and Android'
    },
    {
      service: 'Ongoing Maintenance & Support',
      price: '$500 - $2,000/month',
      description: 'Regular updates, security patches, and feature enhancements'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Transparent Pricing Guide
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Clear, honest pricing with no hidden fees. Every project is unique, 
            but these packages provide a solid foundation for planning your investment.
          </p>
        </motion.div>

        {/* Main Pricing Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${
                pkg.popular ? 'lg:scale-105 lg:-mt-4' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-brand text-white px-4 py-2 rounded-full text-sm font-medium shadow-brand">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`glass-morphism rounded-2xl p-6 lg:p-8 h-full transition-all duration-300 ${
                pkg.popular 
                  ? 'border-primary/50 shadow-brand' 
                  : 'border-border/20 hover:border-primary/30'
              } hover-glow`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {pkg.duration}
                  </div>
                </div>

                <p className="text-foreground/80 text-center mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-4">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Icon 
                          name="Check" 
                          size={16} 
                          className="text-success flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Ideal For:
                  </h4>
                  <p className="text-sm text-foreground/70">{pkg.ideal}</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-3">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-surface rounded text-xs text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant={pkg.popular ? "default" : "outline"}
                  fullWidth
                  className={pkg.popular 
                    ? "bg-cta-primary hover:bg-cta-primary/90 text-white shadow-glow" 
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="glass-morphism rounded-xl p-6 hover-glow transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-foreground">
                    {service.service}
                  </h4>
                  <span className="text-primary font-bold">
                    {service.price}
                  </span>
                </div>
                <p className="text-sm text-foreground/70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-morphism rounded-2xl p-8 lg:p-12 text-center"
        >
          <Icon 
            name="Info" 
            size={48} 
            className="text-primary mx-auto mb-6"
          />
          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
            Important Pricing Notes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Custom Quotes Available
              </h4>
              <p className="text-sm text-foreground/70">
                Every project is unique. These packages serve as starting points, 
                and I provide detailed custom quotes based on your specific requirements.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Flexible Payment Terms
              </h4>
              <p className="text-sm text-foreground/70">
                Payment plans available with milestone-based billing. 
                Typically 50% upfront, 50% on completion for smaller projects.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                No Hidden Costs
              </h4>
              <p className="text-sm text-foreground/70">
                All pricing includes development, testing, and deployment. 
                Third-party service costs (hosting, domains) are separate and transparent.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Money-Back Guarantee
              </h4>
              <p className="text-sm text-foreground/70">
                If you're not satisfied with the initial deliverables, 
                I'll refund your deposit and part ways professionally.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingGuide;