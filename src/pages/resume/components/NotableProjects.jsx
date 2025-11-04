import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const NotableProjects = ({ isInteractiveView, filteredSkill }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Edubora Management System",
      description:
        "A comprehensive school management system supporting Kenya’s CBC and 8-4-4 curricula, with role-based access for admins, teachers, students, and parents.",
      technologies: [
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "Django REST API",
        "MongoDB",
      ],
      duration: "4 months",
      team: "1 developer",
      role: "Full-Stack Developer",
      impact: {
        users: "500+",
        efficiency: "150% increase",
        schools: "5+ demo schools",
      },
      features: [
        "Multi-tenant architecture for multiple schools",
        "Role-based access control and routing",
        "Secure login via school code, employee ID, or admission number",
        "Responsive dashboards for admins, teachers, students, and parents",
        "Curriculum support for Kenya’s CBC and 8-4-4 systems",
        "Demo mode for UI testing without backend",
      ],
      challenges: [
        "Implementing secure multi-tenant data isolation",
        "Optimizing API performance for role-based dashboards",
        "Ensuring responsive design across user roles",
        "Integrating Django REST API with Next.js frontend",
      ],
      links: {
        live: "https://edubora.netlify.app/",
        github: "https://github.com/cobrianz/edubora",
        demo: "https://edubora.netlify.app/",
      },
    },
    {
      id: 2,
      title: "IB Bank Liberia",
      description:
        "A modern banking platform with secure user authentication, account management, and transaction processing.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      duration: "3 months",
      team: "2 developers",
      role: "Full-Stack Developer",
      impact: {
        users: "1,000+",
        transactions: "10,000+",
        uptime: "99.8%",
      },
      features: [
        "Secure user authentication with JWT",
        "Real-time transaction processing",
        "Responsive account management dashboard",
        "Multi-device compatibility",
        "Administrative panel for bank operations",
        "Secure API endpoints",
      ],
      challenges: [
        "Ensuring secure transaction processing",
        "Implementing compliance with banking standards",
        "Optimizing API performance for real-time updates",
        "Creating a responsive UI for all devices",
      ],
      links: {
        live: "https://ib-bankliberia.netlify.app/",
        github: "https://github.com/cobrianz/Ib-bank",
        demo: "https://ib-bankliberia.netlify.app/",
      },
    },
    {
      id: 3,
      title: "AnonMind",
      description:
        "A mental health platform providing anonymous support through AI-driven chat and resource sharing.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      duration: "2 months",
      team: "1 developer",
      role: "Full-Stack Developer",
      impact: {
        users: "1,000+",
        engagement: "85% session rate",
        resources: "50+",
      },
      features: [
        "Anonymous AI-driven chatbot",
        "Resource library for mental health",
        "Secure user data handling",
        "Responsive design",
        "Real-time chat support",
      ],
      challenges: [
        "Ensuring user anonymity",
        "Optimizing AI chatbot response time",
        "Creating a scalable backend",
        "Implementing responsive design",
      ],
      links: {
        live: "https://anonmind.netlify.app/",
        github: "https://github.com/cobrianz/anonmind",
        demo: "https://anonmind.netlify.app/",
      },
    },
    {
      id: 4,
      title: "Actinova AI Tutor",
      description:
        "An AI-powered educational platform offering personalized learning with interactive content.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      duration: "1.5 months",
      team: "1 developer",
      role: "Frontend Developer",
      impact: {
        students: "500+",
        quizzes: "1,000+",
        completion: "88% rate",
      },
      features: [
        "AI-driven personalized lessons",
        "Interactive quizzes and assessments",
        "Progress tracking dashboard",
        "Responsive design",
        "Fast load times with Vite",
      ],
      challenges: [
        "Integrating AI content delivery",
        "Optimizing performance for interactive content",
        "Ensuring responsive design",
        "Managing API response times",
      ],
      links: {
        live: "https://actinovaraitutor.netlify.app/",
        github: "https://github.com/cobrianz/actinova-ai-tutor",
        demo: "https://actinovaraitutor.netlify.app/",
      },
    },
    {
      id: 5,
      title: "Beta Health",
      description:
        "A healthcare platform for managing patient records and appointments with HIPAA compliance.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      duration: "3 months",
      team: "2 developers",
      role: "Full-Stack Developer",
      impact: {
        patients: "500+",
        appointments: "2,000+",
        efficiency: "80% increase",
      },
      features: [
        "Secure patient record management",
        "Appointment scheduling system",
        "User authentication and role-based access",
        "Responsive design for all devices",
        "HIPAA-compliant data handling",
      ],
      challenges: [
        "Ensuring HIPAA compliance",
        "Optimizing secure data storage",
        "Implementing role-based access",
        "Creating a responsive UI",
      ],
      links: {
        live: null,
        github: "https://github.com/cobrianz/Beta-health",
        demo: null,
      },
    },
    {
      id: 6,
      title: "Brianz Portfolio",
      description:
        "A personal portfolio showcasing projects and skills with a modern, responsive design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      duration: "1 month",
      team: "1 developer",
      role: "Frontend Developer",
      impact: {
        visitors: "2,000+",
        engagement: "90% session rate",
        seo: "98/100 score",
      },
      features: [
        "Interactive project showcase",
        "Responsive design",
        "Fast load times with Vite",
        "Smooth animations with Framer Motion",
        "SEO-optimized content",
      ],
      challenges: [
        "Optimizing load times",
        "Implementing smooth animations",
        "Ensuring SEO performance",
        "Creating a responsive layout",
      ],
      links: {
        live: "https://briancheruiyot.netlify.app/",
        github: "https://github.com/cobrianz/Brianz-portifolio",
        demo: "https://briancheruiyot.netlify.app/",
      },
    },
  ];

  const filteredProjects = filteredSkill
    ? projects.filter((project) =>
        project.technologies.some((tech) =>
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
            <h2 className="text-xl font-semibold text-foreground">
              Notable Projects
            </h2>
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
                  ? "hover:bg-muted hover:scale-105 cursor-pointer hover:shadow-glow"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {project.role}
                  </p>
                </div>
                {isInteractiveView && (
                  <Icon
                    name="ExternalLink"
                    size={16}
                    className="text-text-secondary"
                  />
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
                      filteredSkill &&
                      tech.toLowerCase().includes(filteredSkill.toLowerCase())
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
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

              <div className="mt-3 pt-3 border-t border-border">
                <div className="grid grid-cols-3 gap-2 text-center">
                  {Object.entries(project.impact).map(([key, value], index) => (
                    <div key={index}>
                      <p className="text-sm font-semibold text-success">
                        {value}
                      </p>
                      <p className="text-xs text-text-secondary capitalize">
                        {key}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-8">
            <Icon
              name="Search"
              size={48}
              className="mx-auto text-text-secondary mb-4"
            />
            <p className="text-text-secondary">
              No projects found for "{filteredSkill}"
            </p>
          </div>
        )}
      </div>

      {selectedProject && isInteractiveView && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {selectedProject.title}
                  </h2>
                  <p className="text-primary font-medium">
                    {selectedProject.role}
                  </p>
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
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Project Overview
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Key Features
                    </h3>
                    <div className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-text-secondary">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Technical Challenges
                    </h3>
                    <div className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-text-secondary">
                            {challenge}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Project Details
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">
                          Duration:
                        </span>
                        <span className="text-sm text-foreground">
                          {selectedProject.duration}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">
                          Team Size:
                        </span>
                        <span className="text-sm text-foreground">
                          {selectedProject.team}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Technologies
                    </h3>
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
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Impact Metrics
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(selectedProject.impact).map(
                        ([key, value], index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-sm text-text-secondary capitalize">
                              {key}:
                            </span>
                            <span className="text-sm font-semibold text-success">
                              {value}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Project Links
                    </h3>
                    <div className="space-y-2">
                      {selectedProject.links.live && (
                        <Button
                          variant="outline"
                          fullWidth
                          iconName="ExternalLink"
                          iconPosition="left"
                          className="justify-start"
                          onClick={() =>
                            window.open(selectedProject.links.live, "_blank")
                          }
                        >
                          View Live Site
                        </Button>
                      )}
                      {selectedProject.links.github && (
                        <Button
                          variant="outline"
                          fullWidth
                          iconName="Github"
                          iconPosition="left"
                          className="justify-start"
                          onClick={() =>
                            window.open(selectedProject.links.github, "_blank")
                          }
                        >
                          View Source Code
                        </Button>
                      )}
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
