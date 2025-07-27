import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import ProjectCard from "./components/ProjectCard";
import ProjectFilter from "./components/ProjectFilter";
import ProjectModal from "./components/ProjectModal";
import ProjectStats from "./components/ProjectStats";
import FeaturedProject from "./components/FeaturedProject";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Updated project statistics based on portfolio
  const projectStats = [
    {
      icon: "Briefcase",
      value: "20+",
      label: "Completed Projects",
      change: "+5 this year",
    },
    {
      icon: "Users",
      value: "500+",
      label: "Companies Served",
      change: "+100 this year",
    },
    {
      icon: "Code",
      value: "2+",
      label: "Years of Experience",
      change: "Ongoing growth",
    },
    {
      icon: "Star",
      value: "96%",
      label: "Success Rate",
      change: "+2% improvement",
    },
  ];

  // Updated project categories
  const categories = [
    { id: "all", name: "All Projects", icon: "Grid3x3", count: 5 },
    { id: "fullstack", name: "Full-Stack Apps", icon: "Layers", count: 3 },
    { id: "frontend", name: "Frontend Apps", icon: "Monitor", count: 2 },
  ];

  // Updated technologies
  const technologies = [
    { id: "react", name: "React", count: 5 },
    { id: "nextjs", name: "Next.js", count: 1 },
    { id: "tailwind", name: "Tailwind CSS", count: 3 },
    { id: "redux", name: "Redux Toolkit", count: 2 },
    { id: "node", name: "Node.js", count: 1 },
    { id: "mysql", name: "MySQL", count: 1 },
    { id: "vite", name: "Vite", count: 2 },
    { id: "d3", name: "D3.js", count: 2 },
  ];

  // Updated projects based on provided documents
  const projects = [
    {
      id: 1,
      title: "Actinova AI Tutor",
      type: "Full-Stack Application",
      category: "fullstack",
      description:
        "A personalized learning platform powered by AI, offering custom learning paths and progress tracking for over 100,000 learners worldwide.",
      fullDescription:
        "Actinova AI Tutor is a Next.js-based platform that delivers personalized learning experiences through advanced AI. It offers over 2,500 courses, tracks user progress with detailed analytics, and supports a global community of learners across 150+ countries. The platform features a responsive design, offline course access for premium users, and industry-recognized certificates.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
      duration: "6 months",
      teamSize: "4 developers",
      status: "Live",
      rating: "4.8",
      impact: "+96%",
      liveUrl: "https://actinovaraitutor.netlify.app/",
      githubUrl: "https://github.com/cobrianz/actinova-ai-tutor",
      features: [
        "AI-powered personalized learning paths",
        "Progress tracking with detailed analytics",
        "2,500+ courses across multiple domains",
        "Community learning features",
        "Mobile app for iOS and Android",
        "Offline course access for premium users",
      ],
      architecture:
        "Built with Next.js for server-side rendering and static site generation, using Vercel's font optimization and a custom API for course management. The frontend uses React with Tailwind CSS for styling, and the backend leverages Node.js for API integrations.",
      codeSnippet: `// Course recommendation API endpoint
import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId, preferences } = req.body;
  const recommendations = await aiModel.generateLearningPath(userId, preferences);
  res.status(200).json({ courses: recommendations });
};`,
      metrics: [
        { label: "Active Users", value: "100K+" },
        { label: "Success Rate", value: "96%" },
        { label: "Courses", value: "2,500+" },
        { label: "Countries", value: "150+" },
      ],
      challenges: [
        {
          title: "AI Personalization",
          description:
            "Creating accurate learning path recommendations based on user preferences.",
          solution:
            "Implemented a hybrid recommendation system combining collaborative filtering and content-based algorithms.",
        },
      ],
      results: [
        {
          title: "User Engagement",
          description:
            "Achieved 96% learner success rate with personalized content.",
        },
        {
          title: "Global Reach",
          description: "Expanded to 150+ countries with multilingual support.",
        },
      ],
      testimonial: {
        content:
          "Actinova helped me transition to tech in just 6 months. The personalized roadmap was exactly what I needed.",
        author: "Sarah Chen",
        role: "Software Developer at Google",
      },
    },
    {
      id: 2,
      title: "IB Bank Liberia",
      type: "Full-Stack Application",
      category: "fullstack",
      description:
        "A modern banking application with real-time data visualization and secure API integrations.",
      fullDescription:
        "IB Bank Liberia is a React-based banking application utilizing Vite, Redux Toolkit, and Tailwind CSS. It features advanced data visualization with D3.js and Recharts, secure API integrations for payment gateways, and a responsive design for seamless user experience across devices.",
      image:
        "https://images.unsplash.com/photo-1560243563-0627e57aaed1?w=800&h=600&fit=crop",
      technologies: [
        "React",
        "Vite",
        "Redux Toolkit",
        "Tailwind CSS",
        "D3.js",
        "Recharts",
      ],
      duration: "4 months",
      teamSize: "3 developers",
      status: "Live",
      rating: "4.7",
      impact: "+120%",
      liveUrl: "https://ib-bankliberia.netlify.app/",
      githubUrl: "https://github.com/cobrianz/Ib-bank",
      features: [
        "Real-time data visualization with D3.js and Recharts",
        "Secure payment gateway integrations",
        "Responsive design with Tailwind CSS",
        "State management with Redux Toolkit",
        "Form handling with React Hook Form",
        "Smooth animations with Framer Motion",
      ],
      architecture:
        "The application uses a component-based architecture with React and Vite for fast development. Redux Toolkit manages state, while Tailwind CSS handles styling with responsive breakpoints. D3.js and Recharts power the data visualization components.",
      codeSnippet: `// Data visualization component
import { LineChart, Line, XAxis, YAxis } from 'recharts';
const TransactionChart = ({ data }) => (
  <LineChart width={600} height={300} data={data}>
    <XAxis dataKey="date" />
    <YAxis />
    <Line type="monotone" dataKey="amount" stroke="#8884d8" />
  </LineChart>
);`,
      metrics: [
        { label: "Page Load Time", value: "1.5s" },
        { label: "User Retention", value: "85%" },
        { label: "API Response Time", value: "120ms" },
        { label: "Mobile Score", value: "90/100" },
      ],
      challenges: [
        {
          title: "Real-time Data Processing",
          description: "Handling real-time transaction data for visualization.",
          solution:
            "Integrated WebSocket for live updates and optimized D3.js rendering for performance.",
        },
      ],
      results: [
        {
          title: "User Experience",
          description:
            "Improved user engagement by 120% with intuitive visualizations.",
        },
        {
          title: "Performance",
          description: "Reduced page load time to under 1.5 seconds.",
        },
      ],
      testimonial: {
        content:
          "The real-time analytics and responsive design have significantly improved our customer experience.",
        author: "Bank Manager",
        role: "IB Bank Liberia",
      },
    },
    {
      id: 3,
      title: "Anonmind",
      type: "Frontend Application",
      category: "frontend",
      description:
        "A responsive web application focused on mental health support with interactive UI and data visualizations.",
      fullDescription:
        "Anonmind is a React-based application built with Vite, Redux Toolkit, and Tailwind CSS. It provides a platform for mental health support with interactive UI components, data visualizations using D3.js and Recharts, and smooth animations powered by Framer Motion.",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5ebd8?w=800&h=600&fit=crop",
      technologies: [
        "React",
        "Vite",
        "Redux Toolkit",
        "Tailwind CSS",
        "D3.js",
        "Recharts",
        "Framer Motion",
      ],
      duration: "3 months",
      teamSize: "2 developers",
      status: "Live",
      rating: "4.8",
      impact: "+150%",
      liveUrl: "https://anonmind.netlify.app/",
      githubUrl: "https://github.com/cobrianz/anonmind",
      features: [
        "Interactive UI with Framer Motion animations",
        "Data visualization with D3.js and Recharts",
        "Responsive design with Tailwind CSS",
        "State management with Redux Toolkit",
        "Efficient form handling with React Hook Form",
        "Accessibility-focused design",
      ],
      architecture:
        "The application follows a modular component architecture with React and Vite. Redux Toolkit manages complex state interactions, while Tailwind CSS ensures responsive styling. D3.js and Recharts handle data visualizations, and Framer Motion powers animations.",
      codeSnippet: `// Animation component with Framer Motion
import { motion } from 'framer-motion';
const AnimatedCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="card">Content</div>
  </motion.div>
);`,
      metrics: [
        { label: "Engagement Rate", value: "75%" },
        { label: "Load Time", value: "1.3s" },
        { label: "Accessibility Score", value: "95/100" },
        { label: "User Satisfaction", value: "4.8/5" },
      ],
      challenges: [
        {
          title: "Accessibility Compliance",
          description: "Ensuring the application meets WCAG standards.",
          solution:
            "Implemented semantic HTML and ARIA attributes with thorough testing.",
        },
      ],
      results: [
        {
          title: "User Engagement",
          description:
            "Increased engagement by 150% with interactive features.",
        },
        {
          title: "Accessibility",
          description: "Achieved 95/100 WCAG compliance score.",
        },
      ],
      testimonial: {
        content:
          "Anonmind's intuitive design and engaging visuals make it a powerful tool for mental health support.",
        author: "Elena Rodriguez",
        role: "UX Designer at Airbnb",
      },
    },
    {
      id: 4,
      title: "Actinova Technologies",
      type: "Full-Stack Application",
      category: "fullstack",
      description:
        "A platform offering API integrations and tech consulting services for businesses, with production-ready code examples.",
      fullDescription:
        "Actinova Technologies provides seamless API integrations and tech consulting for startups and enterprises. Built with React and Vite, it features production-ready code examples for APIs like Mpesa and Stripe, and supports automation with tools like Zapier and n8n. The platform ensures 99.9% uptime and 24/7 expert support.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "Vite", "Node.js", "Tailwind CSS"],
      duration: "5 months",
      teamSize: "5 developers",
      status: "Live",
      rating: "4.9",
      impact: "+200%",
      liveUrl: "https://actinova.netlify.app/",
      githubUrl: "https://github.com/cobrianz/Actinova",
      features: [
        "Production-ready API integration examples",
        "Automation workflows with Zapier and n8n",
        "Modern UI/UX with Tailwind CSS",
        "Secure OAuth and HTTPS implementations",
        "24/7 expert support",
        "99.9% uptime guarantee",
      ],
      architecture:
        "The platform uses React with Vite for fast frontend development and Node.js for backend API handling. Tailwind CSS ensures a modern, responsive UI, and the architecture supports secure API integrations with OAuth and HTTPS.",
      codeSnippet: `// Mpesa STK Push API integration
import axios from 'axios';
const mpesaSTKPush = async () => {
  const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
    BusinessShortCode: '174379',
    Amount: '1',
    PartyA: '254712345678',
    // ... other parameters
  }, {
    headers: { Authorization: 'Bearer YOUR_ACCESS_TOKEN' }
  });
  return response.data;
};`,
      metrics: [
        { label: "Uptime", value: "99.9%" },
        { label: "Companies Served", value: "500+" },
        { label: "API Calls/Day", value: "50K+" },
        { label: "Response Time", value: "100ms" },
      ],
      challenges: [
        {
          title: "Secure API Integrations",
          description: "Ensuring secure and compliant API integrations.",
          solution:
            "Implemented OAuth, HTTPS, and followed data protection best practices.",
        },
      ],
      results: [
        {
          title: "Business Impact",
          description: "Trusted by 500+ companies with seamless integrations.",
        },
        {
          title: "Performance",
          description: "Achieved 99.9% uptime with sub-100ms API responses.",
        },
      ],
      testimonial: {
        content:
          "Actinova's API integrations have streamlined our operations significantly.",
        author: "Lisa Wang",
        role: "Product Manager at Stripe",
      },
    },
    {
      id: 5,
      title: "Beta Health",
      type: "Frontend Application",
      category: "frontend",
      description:
        "A health-focused web application built with React and Create React App, featuring a responsive UI.",
      fullDescription:
        "Beta Health is a frontend-focused health application built with Create React App and React. It provides a user-friendly interface for health-related services, with a focus on responsive design and efficient development workflows using npm scripts for testing and deployment.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173fdabe37f?w=800&h=600&fit=crop",
      technologies: ["React", "JavaScript", "CSS3"],
      duration: "2 months",
      teamSize: "2 developers",
      status: "Live",
      rating: "4.6",
      impact: "+100%",
      githubUrl: "https://github.com/cobrianz/Beta-health",
      features: [
        "Responsive UI with CSS3",
        "Efficient development with Create React App",
        "Testing suite with Jest",
        "Optimized build for production",
        "Linting for code quality",
        "Mobile-first design",
      ],
      architecture:
        "Built with Create React App, the application uses a component-based React architecture with CSS3 for styling. It includes a comprehensive testing suite with Jest and optimized production builds using Webpack.",
      codeSnippet: `// Sample React component
import React from 'react';
const HealthDashboard = () => (
  <div className="dashboard">
    <h2>Health Metrics</h2>
    <div className="metrics-grid">...</div>
  </div>
);`,
      metrics: [
        { label: "Build Time", value: "30s" },
        { label: "Test Coverage", value: "85%" },
        { label: "Bundle Size", value: "250KB" },
        { label: "Load Time", value: "1.8s" },
      ],
      challenges: [
        {
          title: "Performance Optimization",
          description: "Ensuring fast load times for mobile users.",
          solution: "Utilized code splitting and lazy loading with React.",
        },
      ],
      results: [
        {
          title: "User Accessibility",
          description: "Improved mobile user experience by 100%.",
        },
        {
          title: "Development Efficiency",
          description:
            "Reduced build time through optimized Webpack configuration.",
        },
      ],
      testimonial: {
        content:
          "Beta Health's clean interface and fast performance make it a pleasure to use.",
        author: "Ahmed Hassan",
        role: "DevOps Engineer",
      },
    },
  ];

  // Featured project (Actinova AI Tutor)
  const featuredProject = projects[0];

  useEffect(() => {
    let filtered = projects;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (project) => project.category === selectedCategory
      );
    }

    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter((project) =>
        selectedTechnologies.some((tech) =>
          project.technologies.some((projectTech) =>
            projectTech
              .toLowerCase()
              .includes(
                technologies.find((t) => t.id === tech)?.name.toLowerCase() ||
                  ""
              )
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
    setSelectedTechnologies((prev) =>
      prev.includes(techId)
        ? prev.filter((id) => id !== techId)
        : [...prev, techId]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategory("all");
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
        <title>Projects - Brian Cheruiyot's Portfolio</title>
        <meta
          name="description"
          content="Explore Brian Cheruiyot's portfolio showcasing full-stack and frontend projects, including AI-powered learning platforms, banking applications, and health-focused apps."
        />
        <meta
          name="keywords"
          content="portfolio, web development, React, Next.js, Tailwind CSS, full-stack, frontend, AI, Brian Cheruiyot"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

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
                <span className="text-primary font-medium">Portfolio</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                My <span className="text-primary">Projects</span>
              </h1>

              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Discover my work in building scalable web applications, from
                AI-powered learning platforms to secure banking systems, all
                crafted with modern technologies.
              </p>
            </motion.div>

            <ProjectStats stats={projectStats} />
          </div>
        </section>

        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Featured Project
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Highlighting my AI-powered learning platform with comprehensive
                features and global impact.
              </p>
            </motion.div>

            <FeaturedProject
              project={featuredProject}
              onViewDetails={handleViewDetails}
            />
          </div>
        </section>

        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                All Projects
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Browse my portfolio of full-stack and frontend projects built
                with cutting-edge technologies.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-4 gap-8">
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
                      <Icon
                        name="Search"
                        size={32}
                        className="text-text-secondary"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      No Projects Found
                    </h3>
                    <p className="text-text-secondary mb-6">
                      Try adjusting your filters to see more projects.
                    </p>
                    <Button variant="outline" onClick={handleClearFilters}>
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Let's collaborate to create scalable, modern web applications
                tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-[#1c421c] text-green-500 rounded-full px-5 py-2.5 flex items-center gap-2 transition duration-300 hover:brightness-110 shadow-inner border border-green-900/10 hover:bg-[#265226]"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Let's Get in Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    window.open("https://briancheruiyot.netlify.app/", "_blank")
                  }
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  View Portfolio
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

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
