import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectModal from './components/ProjectModal';
import ProjectStats from './components/ProjectStats';
import FeaturedProject from './components/FeaturedProject';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Mock data for project statistics
  const projectStats = [
    {
      icon: 'Briefcase',
      value: '25+',
      label: 'Completed Projects',
      change: '+3 this month'
    },
    {
      icon: 'Users',
      value: '15+',
      label: 'Happy Clients',
      change: '+2 this quarter'
    },
    {
      icon: 'Code',
      value: '50K+',
      label: 'Lines of Code',
      change: '+12K this year'
    },
    {
      icon: 'Star',
      value: '4.9',
      label: 'Average Rating',
      change: '+0.2 improvement'
    }
  ];

  // Mock data for project categories
  const categories = [
    { id: 'all', name: 'All Projects', icon: 'Grid3x3', count: 12 },
    { id: 'fullstack', name: 'Full-Stack Apps', icon: 'Layers', count: 5 },
    { id: 'frontend', name: 'Frontend Showcases', icon: 'Monitor', count: 4 },
    { id: 'backend', name: 'Backend Solutions', icon: 'Server', count: 2 },
    { id: 'opensource', name: 'Open Source', icon: 'GitBranch', count: 1 }
  ];

  // Mock data for technologies
  const technologies = [
    { id: 'react', name: 'React', count: 8 },
    { id: 'nodejs', name: 'Node.js', count: 6 },
    { id: 'mongodb', name: 'MongoDB', count: 5 },
    { id: 'typescript', name: 'TypeScript', count: 4 },
    { id: 'nextjs', name: 'Next.js', count: 3 },
    { id: 'express', name: 'Express', count: 5 },
    { id: 'tailwind', name: 'Tailwind CSS', count: 7 },
    { id: 'postgresql', name: 'PostgreSQL', count: 3 }
  ];

  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Revolution",
      type: "Full-Stack Application",
      category: "fullstack",
      description: "A comprehensive e-commerce solution built with React, Node.js, and MongoDB, featuring real-time inventory management, secure payment processing, and advanced analytics dashboard.",
      fullDescription: `This project represents a complete overhaul of a traditional retail business's digital presence. The platform handles over 10,000 products across multiple categories with real-time inventory synchronization, automated order processing, and comprehensive customer relationship management.

The system architecture emphasizes scalability and performance, utilizing microservices for different business domains, Redis for caching, and AWS services for cloud infrastructure. The frontend delivers a seamless shopping experience with advanced search capabilities, personalized recommendations, and mobile-first responsive design.`,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Stripe", "AWS", "Redis"],
      duration: "4 months",
      teamSize: "3 developers",
      status: "Live",
      rating: "4.9",
      impact: "+150%",
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/briancheruiyot/ecommerce-platform",
      features: [
        "Real-time inventory management with automated restocking alerts",
        "Secure payment processing with multiple gateway support",
        "Advanced analytics dashboard with sales forecasting",
        "Multi-vendor marketplace functionality",
        "Mobile-responsive design with PWA capabilities",
        "Automated email marketing and customer segmentation"
      ],
      architecture: `The application follows a microservices architecture with separate services for user management, product catalog, order processing, and payment handling. The frontend is built as a single-page application using React with Redux for state management, while the backend utilizes Node.js with Express framework and MongoDB for data persistence.`,
      codeSnippet: `// Advanced product search with filtering and pagination
const searchProducts = async (query, filters, page = 1) => {
  const pipeline = [
    { $match: { $text: { $search: query } } },
    { $match: buildFilterQuery(filters) },
    { $sort: { score: { $meta: "textScore" } } },
    { $skip: (page - 1) * ITEMS_PER_PAGE },
    { $limit: ITEMS_PER_PAGE }
  ];
  
  return await Product.aggregate(pipeline);
};`,
      metrics: [
        { label: "Page Load Time", value: "1.2s" },
        { label: "Conversion Rate", value: "3.8%" },
        { label: "Mobile Performance", value: "95/100" },
        { label: "SEO Score", value: "98/100" }
      ],
      challenges: [
        {
          title: "Real-time Inventory Synchronization",
          description: "Managing inventory across multiple sales channels while preventing overselling required complex synchronization logic.",
          solution: "Implemented event-driven architecture with Redis pub/sub for real-time updates and optimistic locking for concurrent transactions."
        },
        {
          title: "Payment Processing Security",
          description: "Ensuring PCI compliance while maintaining smooth user experience for payment processing.",
          solution: "Integrated Stripe with tokenization and implemented comprehensive fraud detection with machine learning algorithms."
        }
      ],
      results: [
        {
          title: "Revenue Growth",
          description: "Achieved 150% increase in online sales within 6 months of launch"
        },
        {
          title: "User Engagement",
          description: "Improved average session duration by 85% with enhanced user experience"
        },
        {
          title: "Operational Efficiency",
          description: "Reduced manual order processing time by 70% through automation"
        }
      ],
      testimonial: {
        content: "Brian delivered an exceptional e-commerce platform that transformed our business. The attention to detail and technical expertise exceeded our expectations.",
        author: "Sarah Johnson",
        role: "CEO, RetailTech Solutions"
      }
    },
    {
      id: 2,
      title: "Real-Time Analytics Dashboard",
      type: "Frontend Showcase",
      category: "frontend",
      description: "An interactive analytics dashboard built with React and D3.js, featuring real-time data visualization, customizable widgets, and advanced filtering capabilities.",
      fullDescription: `This dashboard serves as the central command center for a SaaS platform, providing real-time insights into user behavior, system performance, and business metrics. The interface adapts to different user roles, displaying relevant KPIs and actionable insights through intuitive visualizations.

The project showcases advanced frontend techniques including virtual scrolling for large datasets, WebSocket integration for real-time updates, and sophisticated state management for complex user interactions. The design system ensures consistency across all components while maintaining accessibility standards.`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
      ],
      technologies: ["React", "TypeScript", "D3.js", "WebSocket", "Tailwind CSS", "Framer Motion"],
      duration: "2 months",
      teamSize: "2 developers",
      status: "Live",
      rating: "4.8",
      impact: "+200%",
      liveUrl: "https://example-dashboard.com",
      githubUrl: "https://github.com/briancheruiyot/analytics-dashboard",
      features: [
        "Real-time data visualization with WebSocket integration",
        "Customizable dashboard widgets with drag-and-drop functionality",
        "Advanced filtering and date range selection",
        "Export capabilities for reports and charts",
        "Role-based access control and personalized views",
        "Mobile-responsive design with touch-friendly interactions"
      ],
      architecture: `The dashboard utilizes a component-based architecture with React and TypeScript for type safety. State management is handled through React Context and custom hooks, while D3.js powers the complex data visualizations. WebSocket connections provide real-time updates without polling.`,
      codeSnippet: `// Real-time chart component with WebSocket integration
const RealtimeChart = ({ metric, timeRange }) => {
  const [data, setData] = useState([]);
  const wsRef = useRef(null);

  useEffect(() => {
    wsRef.current = new WebSocket(\`ws://api.example.com/metrics/\${metric}\`);
    
    wsRef.current.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(prev => [...prev.slice(-99), newData]);
    };

    return () => wsRef.current?.close();
  }, [metric]);

  return <D3Chart data={data} timeRange={timeRange} />;
};`,
      metrics: [
        { label: "Data Processing", value: "10K/sec" },
        { label: "Chart Render Time", value: "50ms" },
        { label: "Memory Usage", value: "45MB" },
        { label: "Bundle Size", value: "280KB" }
      ],
      challenges: [
        {
          title: "Real-time Performance Optimization",
          description: "Handling thousands of data points per second while maintaining smooth 60fps animations.",
          solution: "Implemented data throttling, virtual scrolling, and optimized D3.js rendering with canvas fallback for large datasets."
        }
      ],
      results: [
        {
          title: "User Productivity",
          description: "Increased data analysis efficiency by 200% through intuitive visualizations"
        },
        {
          title: "Decision Making Speed",
          description: "Reduced time to insights from hours to minutes with real-time updates"
        }
      ],
      testimonial: {
        content: "The dashboard Brian created has become indispensable for our operations team. The real-time insights have transformed how we make decisions.",
        author: "Michael Chen",
        role: "CTO, DataFlow Inc"
      }
    },
    {
      id: 3,
      title: "Microservices API Gateway",
      type: "Backend Solution",
      category: "backend",
      description: "A scalable API gateway built with Node.js and Express, featuring authentication, rate limiting, load balancing, and comprehensive monitoring.",
      fullDescription: `This API gateway serves as the central entry point for a microservices architecture, handling authentication, authorization, rate limiting, and request routing. The system processes over 100,000 requests per day while maintaining sub-100ms response times.

The architecture emphasizes reliability and scalability, with built-in circuit breakers, health checks, and automatic failover mechanisms. Comprehensive logging and monitoring provide real-time insights into system performance and help identify potential issues before they impact users.`,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
      ],
      technologies: ["Node.js", "Express", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
      duration: "3 months",
      teamSize: "4 developers",
      status: "Live",
      rating: "4.9",
      impact: "+300%",
      githubUrl: "https://github.com/briancheruiyot/api-gateway",
      features: [
        "JWT-based authentication with refresh token rotation",
        "Dynamic rate limiting based on user tiers",
        "Intelligent load balancing with health checks",
        "Request/response transformation and validation",
        "Comprehensive API analytics and monitoring",
        "Circuit breaker pattern for fault tolerance"
      ],
      architecture: `The gateway follows a plugin-based architecture allowing for easy extension of functionality. Core services include authentication, rate limiting, and routing, while plugins handle specific business logic. Redis provides caching and session storage, while PostgreSQL stores configuration and analytics data.`,
      codeSnippet: `// Intelligent rate limiting middleware
const rateLimiter = async (req, res, next) => {
  const key = \`rate_limit:\${req.user.id}:\${req.route.path}\`;
  const limit = getUserTierLimit(req.user.tier);
  
  const current = await redis.incr(key);
  if (current === 1) {
    await redis.expire(key, 3600); // 1 hour window
  }
  
  if (current > limit) {
    return res.status(429).json({
      error: 'Rate limit exceeded',
      resetTime: await redis.ttl(key)
    });
  }
  
  res.set('X-RateLimit-Remaining', limit - current);
  next();
};`,
      metrics: [
        { label: "Requests/Day", value: "100K+" },
        { label: "Response Time", value: "85ms" },
        { label: "Uptime", value: "99.9%" },
        { label: "Error Rate", value: "0.01%" }
      ],
      challenges: [
        {
          title: "High Availability Requirements",
          description: "Ensuring 99.9% uptime while handling traffic spikes and service failures.",
          solution: "Implemented circuit breakers, health checks, and automatic failover with Kubernetes orchestration."
        }
      ],
      results: [
        {
          title: "System Reliability",
          description: "Achieved 99.9% uptime with automated failover and monitoring"
        },
        {
          title: "Performance Optimization",
          description: "Reduced average API response time by 300% through intelligent caching"
        }
      ],
      testimonial: {
        content: "Brian's API gateway solution has been rock-solid. The performance improvements and reliability have exceeded our expectations.",
        author: "David Rodriguez",
        role: "Lead DevOps Engineer, TechCorp"
      }
    }
  ];

  // Featured project (first project in the list)
  const featuredProject = projects[0];

  useEffect(() => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Filter by technologies
    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter(project =>
        selectedTechnologies.some(tech =>
          project.technologies.some(projectTech =>
            projectTech.toLowerCase().includes(technologies.find(t => t.id === tech)?.name.toLowerCase() || '')
          )
        )
      );
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, selectedTechnologies]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleTechnologyToggle = (techId) => {
    setSelectedTechnologies(prev =>
      prev.includes(techId)
        ? prev.filter(id => id !== techId)
        : [...prev, techId]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedTechnologies([]);
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Helmet>
        <title>Projects - Featured Work Gallery & Case Studies | Brian Cheruiyot</title>
        <meta name="description" content="Explore Brian Cheruiyot's comprehensive portfolio showcasing technical depth and real-world impact through detailed case studies and interactive project demonstrations." />
        <meta name="keywords" content="portfolio, projects, case studies, full-stack development, React, Node.js, web development" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon name="Briefcase" size={24} className="text-primary" />
                </div>
                <span className="text-primary font-medium">Featured Work Gallery</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Projects & <span className="text-primary">Case Studies</span>
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Explore my comprehensive portfolio showcasing technical depth and real-world impact through detailed case studies, interactive demonstrations, and measurable results that drive business value.
              </p>
            </motion.div>

            {/* Project Statistics */}
            <ProjectStats stats={projectStats} />
          </div>
        </section>

        {/* Featured Project Section */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Project</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Highlighting my most impactful work with comprehensive technical deep-dive and measurable business results.
              </p>
            </motion.div>

            <FeaturedProject 
              project={featuredProject} 
              onViewDetails={handleViewDetails}
            />
          </div>
        </section>

        {/* Projects Gallery Section */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">All Projects</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Browse through my complete portfolio organized by category and technology stack.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Filter Sidebar */}
              <div className="lg:col-span-1">
                <ProjectFilter
                  categories={categories}
                  technologies={technologies}
                  selectedCategory={selectedCategory}
                  selectedTechnologies={selectedTechnologies}
                  onCategoryChange={handleCategoryChange}
                  onTechnologyToggle={handleTechnologyToggle}
                  onClearFilters={handleClearFilters}
                  projectCount={filteredProjects.length}
                />
              </div>

              {/* Projects Grid */}
              <div className="lg:col-span-3">
                {filteredProjects.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <ProjectCard
                          project={project}
                          onViewDetails={handleViewDetails}
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon name="Search" size={32} className="text-text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">No Projects Found</h3>
                    <p className="text-text-secondary mb-6">
                      Try adjusting your filters to see more projects.
                    </p>
                    <Button
                      variant="outline"
                      onClick={handleClearFilters}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life with cutting-edge technology and proven development practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                                 variant="ghost"
                                 size="lg"
                                 className="bg-[#1c421c] text-green-500 rounded-full px-5 py-2.5 flex items-center gap-2 transition duration-300 hover:brightness-110 shadow-inner border border-green-900/10 hover:bg-[#265226] "
                                 iconName="MessageCircle"
                                 iconPosition="left"
                               >
                                 Message
                               </Button>
                <Button
                  variant="outline"
                  size="lg"
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
};

export default ProjectsPage;