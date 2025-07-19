import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NotableProjects = ({ isInteractiveView, filteredSkill }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "AWS"],
      duration: "3 months",
      team: "4 developers",
      role: "Lead Developer",
      impact: {
        users: "5,000+",
        revenue: "$50K+",
        performance: "99.9% uptime"
      },
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Order management system",
        "Admin dashboard for inventory management",
        "Email notifications and order tracking",
        "Responsive design for mobile and desktop"
      ],
      challenges: [
        "Implementing secure payment processing",
        "Optimizing database queries for large product catalogs",
        "Ensuring responsive design across all devices",
        "Managing complex state for shopping cart functionality"
      ],
      links: {
        live: "https://ecommerce-demo.briandev.com",
        github: "https://github.com/briancheruiyot/ecommerce-platform",
        demo: "https://demo.ecommerce-platform.com"
      }
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team collaboration, and progress tracking",
      technologies: ["React.js", "TypeScript", "Node.js", "Socket.io", "PostgreSQL"],
      duration: "2 months",
      team: "3 developers",
      role: "Full-Stack Developer",
      impact: {
        users: "2,000+",
        productivity: "40% increase",
        adoption: "95% team adoption"
      },
      features: [
        "Real-time collaboration with Socket.io",
        "Drag-and-drop task management",
        "Team member assignment and notifications",
        "Progress tracking and reporting",
        "File attachments and comments",
        "Calendar integration",
        "Mobile-responsive design",
        "Dark/light theme toggle"
      ],
      challenges: [
        "Implementing real-time synchronization",
        "Managing complex state with TypeScript",
        "Optimizing performance for large datasets",
        "Creating intuitive drag-and-drop interfaces"
      ],
      links: {
        live: "https://taskmanager.briandev.com",
        github: "https://github.com/briancheruiyot/task-manager",
        demo: "https://demo.task-manager.com"
      }
    },
    {
      id: 3,
      title: "Real Estate Platform",
      description: "Property listing and management platform with advanced search, virtual tours, and agent dashboard",
      technologies: ["Next.js", "React.js", "MongoDB", "Cloudinary", "Mapbox"],
      duration: "4 months",
      team: "5 developers",
      role: "Frontend Lead",
      impact: {
        listings: "10,000+",
        agents: "500+",
        inquiries: "30% increase"
      },
      features: [
        "Advanced property search with filters",
        "Interactive maps with Mapbox integration",
        "Image gallery with Cloudinary optimization",
        "Agent dashboard and lead management",
        "Property comparison tool",
        "Mortgage calculator",
        "Virtual tour integration",
        "SEO-optimized property pages"
      ],
      challenges: [
        "Implementing complex search algorithms",
        "Optimizing image loading and display",
        "Creating responsive map interfaces",
        "Managing large datasets efficiently"
      ],
      links: {
        live: "https://realestate.briandev.com",
        github: "https://github.com/briancheruiyot/real-estate-platform",
        demo: "https://demo.real-estate.com"
      }
    },
    {
      id: 4,
      title: "Learning Management System",
      description: "Educational platform with course creation, student progress tracking, and interactive assessments",
      technologies: ["React.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
      duration: "3 months",
      team: "4 developers",
      role: "Full-Stack Developer",
      impact: {
        students: "3,000+",
        courses: "200+",
        completion: "85% completion rate"
      },
      features: [
        "Course creation and management",
        "Video streaming and progress tracking",
        "Interactive quizzes and assessments",
        "Student dashboard and analytics",
        "Discussion forums and messaging",
        "Certificate generation",
        "Payment integration for courses",
        "Mobile-responsive design"
      ],
      challenges: [
        "Implementing video streaming efficiently",
        "Creating complex assessment systems",
        "Managing user roles and permissions",
        "Optimizing for mobile learning"
      ],
      links: {
        live: "https://lms.briandev.com",
        github: "https://github.com/briancheruiyot/learning-management-system",
        demo: "https://demo.lms-platform.com"
      }
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with post scheduling, engagement tracking, and reporting",
      technologies: ["React.js", "D3.js", "Node.js", "Redis", "Social APIs"],
      duration: "2 months",
      team: "3 developers",
      role: "Frontend Developer",
      impact: {
        accounts: "1,000+",
        posts: "50,000+",
        engagement: "60% increase"
      },
      features: [
        "Multi-platform social media integration",
        "Post scheduling and automation",
        "Real-time analytics with D3.js",
        "Engagement tracking and reporting",
        "Content calendar view",
        "Team collaboration tools",
        "Custom report generation",
        "Mobile app companion"
      ],
      challenges: [
        "Integrating multiple social media APIs",
        "Creating complex data visualizations",
        "Managing real-time data updates",
        "Ensuring data privacy and security"
      ],
      links: {
        live: "https://socialdash.briandev.com",
        github: "https://github.com/briancheruiyot/social-media-dashboard",
        demo: "https://demo.social-dashboard.com"
      }
    }
  ];

  const filteredProjects = filteredSkill 
    ? projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filteredSkill.toLowerCase())
        )
      )
    : projects;

  const openProjectModal = (project) => {
    if (isInteractiveView) {
      setSelectedProject(project);
    }
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="bg-card rounded-xl p-6 shadow-premium">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Icon name="FolderOpen" size={20} className="mr-2 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Notable Projects</h2>
          </div>
          
          {filteredSkill && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-text-secondary">Filtered by:</span>
              <span className="px-2 py-1 bg-primary text-primary-foreground text-sm rounded-md">
                {filteredSkill}
              </span>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProjectModal(project)}
              className={`p-4 rounded-lg bg-surface transition-all duration-300 ${
                isInteractiveView 
                  ? 'hover:bg-muted hover:scale-105 cursor-pointer hover:shadow-glow' 
                  : ''
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm text-primary font-medium">{project.role}</p>
                </div>
                {isInteractiveView && (
                  <Icon name="ExternalLink" size={16} className="text-text-secondary" />
                )}
              </div>
              
              <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 text-xs font-medium rounded-md ${
                      filteredSkill && tech.toLowerCase().includes(filteredSkill.toLowerCase())
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-1 text-xs text-text-secondary">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
              
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <span>{project.duration}</span>
                <span>{project.team}</span>
              </div>
              
              {/* Impact metrics */}
              <div className="mt-3 pt-3 border-t border-border">
                <div className="grid grid-cols-3 gap-2 text-center">
                  {Object.entries(project.impact).map(([key, value], index) => (
                    <div key={index}>
                      <p className="text-sm font-semibold text-success">{value}</p>
                      <p className="text-xs text-text-secondary capitalize">{key}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-8">
            <Icon name="Search" size={48} className="mx-auto text-text-secondary mb-4" />
            <p className="text-text-secondary">No projects found for "{filteredSkill}"</p>
          </div>
        )}
      </div>
      
      {/* Project Detail Modal */}
      {selectedProject && isInteractiveView && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{selectedProject.title}</h2>
                  <p className="text-primary font-medium">{selectedProject.role}</p>
                </div>
                <button
                  onClick={closeProjectModal}
                  className="p-2 hover:bg-surface rounded-lg transition-colors duration-300"
                >
                  <Icon name="X" size={20} className="text-text-secondary" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Project Overview</h3>
                    <p className="text-text-secondary leading-relaxed">{selectedProject.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                    <div className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-text-secondary">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Technical Challenges</h3>
                    <div className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-text-secondary">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">Duration:</span>
                        <span className="text-sm text-foreground">{selectedProject.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">Team Size:</span>
                        <span className="text-sm text-foreground">{selectedProject.team}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-surface text-xs font-medium text-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Impact Metrics</h3>
                    <div className="space-y-3">
                      {Object.entries(selectedProject.impact).map(([key, value], index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-sm text-text-secondary capitalize">{key}:</span>
                          <span className="text-sm font-semibold text-success">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Project Links</h3>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        fullWidth
                        iconName="ExternalLink"
                        iconPosition="left"
                        className="justify-start"
                      >
                        View Live Site
                      </Button>
                      <Button
                        variant="outline"
                        fullWidth
                        iconName="Github"
                        iconPosition="left"
                        className="justify-start"
                      >
                        View Source Code
                      </Button>
                      <Button
                        variant="outline"
                        fullWidth
                        iconName="Play"
                        iconPosition="left"
                        className="justify-start"
                      >
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotableProjects;