import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import ProcessOverview from './components/ProcessOverview';
import PricingGuide from './components/PricingGuide';
import CollaborationApproach from './components/CollaborationApproach';

const ServicesPage = () => {
  const services = [
    {
      icon: "Monitor",
      title: "React Frontend Development",
      subtitle: "Modern UI/UX Implementation",
      priceRange: "$3K - $12K",
      timeline: "3-8 weeks",
      description: "Create stunning, responsive user interfaces with React 18, featuring modern design patterns, smooth animations, and optimal performance across all devices.",
      features: [
        "Responsive design for all screen sizes",
        "Modern UI/UX with Tailwind CSS",
        "Component-based architecture",
        "Performance optimization",
        "Accessibility compliance (WCAG 2.1)",
        "Cross-browser compatibility"
      ],
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js", "Vite"],
      process: [
        {
          title: "Requirements Analysis",
          description: "Understanding your brand, users, and business objectives to create the perfect user experience."
        },
        {
          title: "Design System Creation",
          description: "Building a comprehensive design system with reusable components and consistent styling."
        },
        {
          title: "Component Development",
          description: "Creating modular, reusable React components with proper state management and optimization."
        },
        {
          title: "Testing & Optimization",
          description: "Comprehensive testing across devices and browsers, with performance optimization for fast loading."
        }
      ],
      projectExample: {
        title: "E-commerce Dashboard Redesign",
        description: "Modernized a legacy admin dashboard with React 18, improving user experience and reducing load times significantly.",
        results: [
          { metric: "65%", label: "Faster Load Times" },
          { metric: "40%", label: "Better User Engagement" },
          { metric: "90%", label: "Accessibility Score" }
        ]
      }
    },
    {
      icon: "Server",
      title: "Node.js Backend Architecture",
      subtitle: "Scalable API Design",
      priceRange: "$4K - $15K",
      timeline: "4-10 weeks",
      description: "Build robust, scalable backend systems with Node.js, featuring RESTful APIs, database optimization, and enterprise-grade security implementations.",
      features: [
        "RESTful API development",
        "Database design and optimization",
        "Authentication & authorization",
        "Real-time features with WebSockets",
        "Third-party integrations",
        "Comprehensive API documentation"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis", "JWT", "Socket.io"],
      process: [
        {
          title: "Architecture Planning",
          description: "Designing scalable system architecture with proper separation of concerns and future growth in mind."
        },
        {
          title: "Database Design",
          description: "Creating optimized database schemas with proper indexing and relationship management."
        },
        {
          title: "API Development",
          description: "Building secure, well-documented APIs with proper error handling and validation."
        },
        {
          title: "Security Implementation",
          description: "Implementing authentication, authorization, and security best practices throughout the system."
        }
      ],
      projectExample: {
        title: "SaaS Platform API",
        description: "Developed a comprehensive API for a multi-tenant SaaS platform, handling thousands of concurrent users with optimal performance.",
        results: [
          { metric: "99.9%", label: "Uptime Achieved" },
          { metric: "200ms", label: "Average Response Time" },
          { metric: "10K+", label: "Concurrent Users" }
        ]
      }
    },
    {
      icon: "Layers",
      title: "Full-Stack Application Development",
      subtitle: "End-to-End Solutions",
      priceRange: "$8K - $25K",
      timeline: "6-16 weeks",
      description: "Complete web application development from concept to deployment, integrating modern frontend and backend technologies for seamless user experiences.",
      features: [
        "Complete application architecture",
        "Frontend and backend integration",
        "Database design and management",
        "User authentication systems",
        "Payment gateway integration",
        "Deployment and DevOps setup"
      ],
      technologies: ["React", "Node.js", "MongoDB/PostgreSQL", "AWS/Digital Ocean", "Docker", "CI/CD"],
      process: [
        {
          title: "System Architecture",
          description: "Designing the complete system architecture with scalability and maintainability in focus."
        },
        {
          title: "Frontend Development",
          description: "Creating intuitive user interfaces with modern React patterns and responsive design."
        },
        {
          title: "Backend Integration",
          description: "Building and integrating robust backend services with proper API design and security."
        },
        {
          title: "Deployment & Monitoring",
          description: "Setting up production deployment with monitoring, logging, and automated backup systems."
        }
      ],
      projectExample: {
        title: "Healthcare Management System",
        description: "Built a comprehensive healthcare management platform with patient records, appointment scheduling, and billing integration.",
        results: [
          { metric: "500+", label: "Daily Active Users" },
          { metric: "95%", label: "User Satisfaction" },
          { metric: "60%", label: "Process Efficiency Gain" }
        ]
      }
    },
    {
      icon: "Zap",
      title: "Performance Optimization",
      subtitle: "Measurable Improvement Metrics",
      priceRange: "$2K - $8K",
      timeline: "2-6 weeks",
      description: "Comprehensive performance auditing and optimization of existing applications, delivering measurable improvements in speed, SEO, and user experience.",
      features: [
        "Performance auditing and analysis",
        "Code optimization and refactoring",
        "Database query optimization",
        "Image and asset optimization",
        "SEO improvements",
        "Core Web Vitals optimization"
      ],
      technologies: ["Lighthouse", "WebPageTest", "Bundle Analyzers", "CDN Setup", "Caching Strategies"],
      process: [
        {
          title: "Performance Audit",
          description: "Comprehensive analysis of current performance bottlenecks using industry-standard tools."
        },
        {
          title: "Optimization Strategy",
          description: "Creating a prioritized optimization plan based on impact and implementation complexity."
        },
        {
          title: "Implementation",
          description: "Executing optimizations with careful testing to ensure no functionality is compromised."
        },
        {
          title: "Monitoring Setup",
          description: "Implementing ongoing performance monitoring to maintain optimal performance over time."
        }
      ],
      projectExample: {
        title: "E-commerce Site Optimization",
        description: "Optimized a slow-loading e-commerce site, dramatically improving user experience and search engine rankings.",
        results: [
          { metric: "75%", label: "Faster Page Load" },
          { metric: "45%", label: "Better Conversion Rate" },
          { metric: "90+", label: "Lighthouse Score" }
        ]
      }
    }
  ];

  const keyStrengths = [
    {
      icon: "Code",
      title: "Clean Code Architecture",
      description: "Writing maintainable, scalable code that follows industry best practices and design patterns."
    },
    {
      icon: "Smartphone",
      title: "Mobile-First Approach",
      description: "Ensuring optimal user experience across all devices with responsive design principles."
    },
    {
      icon: "Shield",
      title: "Security Best Practices",
      description: "Implementing robust security measures to protect your application and user data."
    },
    {
      icon: "Gauge",
      title: "Performance Optimization",
      description: "Delivering fast, efficient applications that provide excellent user experiences."
    },
    {
      icon: "Users",
      title: "User-Centric Design",
      description: "Focusing on usability and accessibility to create inclusive digital experiences."
    },
    {
      icon: "Wrench",
      title: "Ongoing Support",
      description: "Providing continuous maintenance and updates to keep your application running smoothly."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Technical Capability Showcase | Brian Cheruiyot Portfolio</title>
        <meta name="description" content="Explore Brian Cheruiyot's comprehensive full-stack development services including React frontend development, Node.js backend architecture, and performance optimization with transparent pricing." />
        <meta name="keywords" content="React development, Node.js backend, full-stack developer, web application development, performance optimization, Kenya developer" />
        <meta property="og:title" content="Services - Technical Capability Showcase | Brian Cheruiyot" />
        <meta property="og:description" content="Professional web development services with transparent pricing and proven results. Specializing in React, Node.js, and full-stack solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services - Technical Capability Showcase | Brian Cheruiyot" />
        <meta name="twitter:description" content="Professional web development services with transparent pricing and proven results." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Technical Capability
                <span className="block text-transparent bg-clip-text bg-gradient-brand">
                  Showcase
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/80 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your digital vision into reality with comprehensive full-stack development services. 
                From concept to deployment, I deliver scalable solutions that drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button
                                 variant="ghost"
                                 size="lg"
                                 className="bg-[#1c421c] text-green-500 rounded-full px-5 py-2.5 flex items-center gap-2 transition duration-300 hover:brightness-110 shadow-inner border border-green-900/10 hover:bg-[#265226] "
                                 iconName="MessageCircle"
                                 iconPosition="left"
                               >
                                 Start Your Project
                               </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  iconName="Download"
                  iconPosition="left"
                >
                  View Portfolio
                </Button>
              </div>
            </motion.div>

            {/* Key Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            >
              {keyStrengths.map((strength, index) => (
                <div
                  key={index}
                  className="glass-morphism rounded-xl p-6 hover-glow transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon 
                      name={strength.icon} 
                      size={24} 
                      className="text-primary"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {strength.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {strength.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Comprehensive Development Services
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Each service is designed to deliver maximum value with transparent pricing, 
                clear timelines, and measurable results that drive your business forward.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index} 
                  service={service} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <ProcessOverview />

        {/* Pricing Guide */}
        <PricingGuide />

        {/* Collaboration Approach */}
        <CollaborationApproach />

        {/* Final CTA */}
        <section className="py-16 lg:py-24 bg-gradient-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a custom solution 
                that exceeds your expectations. No obligation consultation included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                                variant="ghost"
                                size="lg"
                                className="bg-[#1c421c] text-green-500 rounded-full px-5 py-2.5 flex items-center gap-2 transition duration-300 hover:brightness-110 shadow-inner border border-green-900/10 hover:bg-[#265226] "
                                iconName="MessageCircle"
                                iconPosition="left"
                              >
                                Get Free Consultation
                              </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  iconName="Phone"
                  iconPosition="left"
                >
                  Schedule a Call
                </Button>
              </div>
              <p className="text-sm text-foreground/60 mt-6">
                Typical response time: Within 4 hours • Free project estimation • No hidden costs
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;