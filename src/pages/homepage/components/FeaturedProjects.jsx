import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projects = [
    {
      id: 1,
      title: "EcoTrack - Sustainability Dashboard",
      description: "A comprehensive environmental tracking platform helping businesses monitor and reduce their carbon footprint through real-time analytics and actionable insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "D3.js", "AWS"],
      category: "Full-Stack Web App",
      impact: {
        users: "10K+",
        reduction: "25%",
        companies: "150+"
      },
      features: [
        "Real-time carbon footprint tracking",
        "Interactive data visualizations",
        "Automated reporting system",
        "Multi-tenant architecture"
      ],
      liveUrl: "https://ecotrack-demo.com",
      githubUrl: "https://github.com/briancheruiyot/ecotrack",
      status: "Live Production"
    },
    {
      id: 2,
      title: "FinanceFlow - Personal Budget Manager",
      description: "An intelligent personal finance application with AI-powered spending insights, budget optimization, and automated savings recommendations.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "Python", "PostgreSQL", "TensorFlow"],
      category: "FinTech Application",
      impact: {
        users: "5K+",
        savings: "$2M+",
        accuracy: "94%"
      },
      features: [
        "AI-powered expense categorization",
        "Predictive budget analysis",
        "Goal-based savings plans",
        "Bank-level security"
      ],
      liveUrl: "https://financeflow-app.com",
      githubUrl: "https://github.com/briancheruiyot/financeflow",
      status: "Live Production"
    },
    {
      id: 3,
      title: "MediConnect - Healthcare Platform",
      description: "A telemedicine platform connecting patients with healthcare providers, featuring appointment scheduling, video consultations, and medical record management.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "WebRTC"],
      category: "Healthcare Technology",
      impact: {
        consultations: "25K+",
        providers: "500+",
        satisfaction: "96%"
      },
      features: [
        "HD video consultations",
        "Secure medical records",
        "Prescription management",
        "Multi-language support"
      ],
      liveUrl: "https://mediconnect-health.com",
      githubUrl: "https://github.com/briancheruiyot/mediconnect",
      status: "Live Production"
    },
    {
      id: 4,
      title: "EduLearn - Online Learning Platform",
      description: "A modern e-learning platform with interactive courses, progress tracking, and collaborative learning features for educational institutions.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "GraphQL", "PostgreSQL", "Redis"],
      category: "EdTech Platform",
      impact: {
        students: "15K+",
        courses: "200+",
        completion: "87%"
      },
      features: [
        "Interactive course builder",
        "Real-time collaboration",
        "Advanced analytics",
        "Mobile-responsive design"
      ],
      liveUrl: "https://edulearn-platform.com",
      githubUrl: "https://github.com/briancheruiyot/edulearn",
      status: "Live Production"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
    setIsAutoPlaying(false);
  };

  const currentProjectData = projects[currentProject];

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(128,63,74,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Briefcase" size={16} className="text-accent" />
            <span className="text-sm text-accent font-medium">Featured Work</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Projects That{' '}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Drive Impact
            </span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Explore my latest work showcasing full-stack development expertise, innovative solutions, 
            and measurable business impact across various industries.
          </p>
        </motion.div>

        {/* Main Project Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Project Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-premium-strong">
                  <Image
                    src={currentProjectData.image}
                    alt={currentProjectData.title}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-2 bg-success/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span className="text-xs text-white font-medium">{currentProjectData.status}</span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs text-foreground font-medium">{currentProjectData.category}</span>
                    </div>
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>

                {/* Navigation Controls */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-4">
                  <button
                    onClick={prevProject}
                    className="w-12 h-12 bg-surface/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-premium"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>
                </div>
                
                <div className="absolute top-1/2 -translate-y-1/2 -right-4">
                  <button
                    onClick={nextProject}
                    className="w-12 h-12 bg-surface/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-premium"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                </div>
              </div>

              {/* Project Details */}
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {currentProjectData.title}
                </h3>
                
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  {currentProjectData.description}
                </p>

                {/* Impact Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(currentProjectData.impact).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-sm text-text-secondary capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProjectData.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {currentProjectData.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-text-secondary">
                        <Icon name="Check" size={16} className="text-success" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover-scale"
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    View Live Demo
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-foreground text-foreground hover:bg-foreground hover:text-background hover-scale"
                    iconName="Github"
                    iconPosition="left"
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Project Indicators */}
          <div className="flex justify-center space-x-2 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-primary scale-125' :'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-morphism p-8 rounded-2xl border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Explore More Projects
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Discover my complete portfolio with detailed case studies, technical deep-dives, 
              and the stories behind each project's success.
            </p>
            
            <Link to="/projects-featured-work-gallery-case-studies">
              <Button
                variant="default"
                size="lg"
                className="bg-cta-primary hover:bg-cta-primary/90 text-white shadow-glow hover-scale"
                iconName="ArrowRight"
                iconPosition="right"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;