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

  // Updated project statistics based on provided projects
  const projectStats = [
    {
      icon: "Briefcase",
      value: "5+",
      label: "Completed Projects",
      change: "+2 this year",
    },
    {
      icon: "Users",
      value: "10+",
      label: "Satisfied Clients",
      change: "+3 this year",
    },
    {
      icon: "Code",
      value: "30K+",
      label: "Lines of Code",
      change: "+8K this year",
    },
    {
      icon: "Star",
      value: "4.8",
      label: "Average Rating",
      change: "+0.3 improvement",
    },
  ];

  // Updated categories based on provided projects
  const categories = [
    { id: "all", name: "All Projects", icon: "Grid3x3", count: 5 },
    { id: "fullstack", name: "Full-Stack Apps", icon: "Layers", count: 3 },
    { id: "frontend", name: "Frontend Showcases", icon: "Monitor", count: 2 },
  ];

  // Updated technologies based on provided projects
  const technologies = [
    { id: "react", name: "React", count: 5 },
    { id: "typescript", name: "TypeScript", count: 4 },
    { id: "tailwind", name: "Tailwind CSS", count: 5 },
    { id: "nodejs", name: "Node.js", count: 3 },
    { id: "mongodb", name: "MongoDB", count: 2 },
    { id: "express", name: "Express", count: 2 },
    { id: "vite", name: "Vite", count: 3 },
  ];

  // Updated projects data based on provided GitHub repos and live URLs
  const projects = [
    {
      id: 1,
      title: "IB Bank Liberia",
      type: "Full-Stack Application",
      category: "fullstack",
      description:
        "A modern banking platform for International Bank Liberia, featuring secure user authentication, account management, and transaction processing with a responsive UI.",
      fullDescription: `IB Bank Liberia is a comprehensive banking platform designed to provide secure and efficient financial services. The application includes features like user authentication, account management, transaction history, and administrative dashboards. Built with a modern tech stack, it ensures scalability and a seamless user experience across devices.

The frontend is developed with React and Tailwind CSS for a responsive and intuitive interface, while the backend uses Node.js and Express with MongoDB for secure data management. The platform integrates secure authentication protocols and real-time transaction processing.`,
      image: "https://ib-bankliberia.netlify.app/assets/ib-bank-screenshot.png",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      duration: "3 months",
      teamSize: "2 developers",
      status: "Live",
      rating: "4.8",
      impact: "+120%",
      liveUrl: "https://ib-bankliberia.netlify.app/",
      githubUrl: "https://github.com/cobrianz/Ib-bank",
      features: [
        "Secure user authentication with JWT",
        "Real-time transaction processing",
        "Responsive account management dashboard",
        "Multi-device compatibility",
        "Administrative panel for bank operations",
        "Secure API endpoints",
      ],
      architecture: `The application follows a client-server architecture with React handling the frontend and Node.js/Express for the backend. MongoDB serves as the database, with JWT for authentication. The frontend uses Vite for fast builds, and Tailwind CSS ensures consistent styling.`,
      codeSnippet: `// User authentication endpoint
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};`,
      metrics: [
        { label: "Page Load Time", value: "1.5s" },
        { label: "Transaction Speed", value: "0.8s" },
        { label: "Mobile Performance", value: "92/100" },
        { label: "API Response Time", value: "120ms" },
      ],
      challenges: [
        {
          title: "Secure Transaction Processing",
          description:
            "Ensuring secure and fast transaction processing while maintaining compliance with banking standards.",
          solution:
            "Implemented JWT authentication and encrypted API endpoints with rate limiting.",
        },
      ],
      results: [
        {
          title: "User Adoption",
          description:
            "Increased online banking adoption by 120% within 3 months.",
        },
        {
          title: "Operational Efficiency",
          description: "Reduced manual transaction processing time by 60%.",
        },
      ],
      testimonial: {
        content:
          "The IB Bank Liberia platform has streamlined our operations and provided our customers with a modern banking experience.",
        author: "John Doe",
        role: "IT Manager, IB Bank Liberia",
      },
    },
    {
      id: 2,
      title: "AnonMind",
      type: "Full-Stack Application",
      category: "fullstack",
      description:
        "A mental health platform providing anonymous support through AI-driven chat and resource sharing, built with React and Node.js.",
      fullDescription: `AnonMind is a mental health platform designed to offer anonymous support to users through AI-driven chatbots and community resources. The platform ensures user privacy while providing access to mental health resources and real-time chat support.

The frontend is built with React and Tailwind CSS, offering a clean and responsive interface. The backend uses Node.js with Express and MongoDB for data management, with an AI integration for personalized user interactions.`,
      image: "https://anonmind.netlify.app/assets/anonmind-screenshot.png",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      duration: "2 months",
      teamSize: "1 developer",
      status: "Live",
      rating: "4.7",
      impact: "+100%",
      liveUrl: "https://anonmind.netlify.app/",
      githubUrl: "https://github.com/cobrianz/anonmind",
      features: [
        "Anonymous AI-driven chatbot",
        "Resource library for mental health",
        "Secure user data handling",
        "Responsive design",
        "Real-time chat support",
      ],
      architecture: `The platform uses a monolithic architecture with React for the frontend and Node.js/Express for the backend. MongoDB handles data storage, and Vite is used for fast frontend builds. Tailwind CSS ensures a consistent and responsive UI.`,
      codeSnippet: `// AI chatbot response handler
const handleChatMessage = async (req, res) => {
  const { message } = req.body;
  try {
    const aiResponse = await aiService.processMessage(message);
    await ChatMessage.create({ userId: req.user.id, message, response: aiResponse });
    res.json({ response: aiResponse });
  } catch (error) {
    res.status(500).json({ error: 'Chat processing failed' });
  }
};`,
      metrics: [
        { label: "Chat Response Time", value: "1.2s" },
        { label: "User Engagement", value: "85%" },
        { label: "Mobile Performance", value: "90/100" },
        { label: "API Uptime", value: "99.8%" },
      ],
      challenges: [
        {
          title: "User Privacy",
          description:
            "Ensuring complete anonymity while maintaining session continuity.",
          solution:
            "Implemented session-based anonymous IDs without storing personal data.",
        },
      ],
      results: [
        {
          title: "User Reach",
          description: "Reached 1000+ users within 2 months of launch.",
        },
        {
          title: "Engagement",
          description: "Increased user session time by 100%.",
        },
      ],
      testimonial: {
        content:
          "AnonMind has provided a safe space for users to seek mental health support anonymously.",
        author: "Jane Smith",
        role: "Mental Health Advocate",
      },
    },
    {
      id: 3,
      title: "Actinova AI Tutor",
      type: "Frontend Showcase",
      category: "frontend",
      description:
        "An AI-powered educational platform offering personalized learning experiences with interactive content, built with React and Vite.",
      fullDescription: `Actinova AI Tutor is an educational platform that leverages AI to provide personalized learning experiences. The platform features interactive lessons, quizzes, and progress tracking, designed to enhance student engagement and learning outcomes.

The application is built with React, TypeScript, and Tailwind CSS, using Vite for fast development and builds. The frontend integrates with an AI API for personalized content delivery, ensuring a seamless and responsive user experience.`,
      image:
        "https://actinovaraitutor.netlify.app/assets/actinova-screenshot.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      duration: "1.5 months",
      teamSize: "1 developer",
      status: "Live",
      rating: "4.9",
      impact: "+150%",
      liveUrl: "https://actinovaraitutor.netlify.app/",
      githubUrl: "https://github.com/cobrianz/actinova-ai-tutor",
      features: [
        "AI-driven personalized lessons",
        "Interactive quizzes and assessments",
        "Progress tracking dashboard",
        "Responsive design",
        "Fast load times with Vite",
      ],
      architecture: `The application is a single-page application built with React and TypeScript, using Vite for fast builds and hot module replacement. Tailwind CSS provides a responsive and consistent UI, with an external AI API handling content personalization.`,
      codeSnippet: `// AI content fetcher
const fetchPersonalizedContent = async (userId, topic) => {
  try {
    const response = await fetch(\`https://api.actinova.ai/content?userId=\${userId}&topic=\${topic}\`);
    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error('Error fetching content:', error);
    return [];
  }
};`,
      metrics: [
        { label: "Page Load Time", value: "0.9s" },
        { label: "Quiz Completion Rate", value: "88%" },
        { label: "Mobile Performance", value: "95/100" },
        { label: "API Response Time", value: "100ms" },
      ],
      challenges: [
        {
          title: "Content Personalization",
          description:
            "Delivering tailored content in real-time without performance degradation.",
          solution:
            "Optimized API calls with caching and lazy loading of content.",
        },
      ],
      results: [
        {
          title: "Student Engagement",
          description: "Increased quiz completion rates by 150%.",
        },
        {
          title: "Learning Outcomes",
          description: "Improved average test scores by 30%.",
        },
      ],
      testimonial: {
        content:
          "Actinova AI Tutor has revolutionized how we deliver educational content to students.",
        author: "Emily Brown",
        role: "Education Consultant",
      },
    },
    {
      id: 4,
      title: "Beta Health",
      type: "Full-Stack Application",
      category: "fullstack",
      description:
        "A healthcare platform for managing patient records and appointments, built with React and Node.js.",
      fullDescription: `Beta Health is a healthcare management platform designed to streamline patient record management and appointment scheduling. The application features secure data handling, user authentication, and a responsive interface for both patients and healthcare providers.

The frontend is developed with React and Tailwind CSS, while the backend uses Node.js, Express, and MongoDB for secure data storage and management. The platform ensures HIPAA compliance and fast performance.`,
      image:
        "https://images.unsplash.com/photo-1576091160399-1123a8340d3f?w=800&h=600&fit=crop",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      duration: "3 months",
      teamSize: "2 developers",
      status: "In Development",
      rating: "4.7",
      impact: "+80%",
      githubUrl: "https://github.com/cobrianz/Beta-health",
      features: [
        "Secure patient record management",
        "Appointment scheduling system",
        "User authentication and role-based access",
        "Responsive design for all devices",
        "HIPAA-compliant data handling",
      ],
      architecture: `The application uses a client-server architecture with React for the frontend and Node.js/Express for the backend. MongoDB handles data storage, with secure APIs protected by JWT authentication. Tailwind CSS ensures a consistent and responsive UI.`,
      codeSnippet: `// Appointment scheduling endpoint
const scheduleAppointment = async (req, res) => {
  const { patientId, date, doctorId } = req.body;
  try {
    const appointment = await Appointment.create({ patientId, date, doctorId });
    res.json({ appointment });
  } catch (error) {
    res.status(500).json({ error: 'Failed to schedule appointment' });
  }
};`,
      metrics: [
        { label: "Data Processing Time", value: "1.3s" },
        { label: "API Response Time", value: "150ms" },
        { label: "Mobile Performance", value: "90/100" },
        { label: "Security Score", value: "95/100" },
      ],
      challenges: [
        {
          title: "Data Security",
          description: "Ensuring HIPAA compliance for patient data.",
          solution:
            "Implemented encrypted data storage and secure API endpoints.",
        },
      ],
      results: [
        {
          title: "Efficiency",
          description: "Reduced appointment scheduling time by 80%.",
        },
        {
          title: "User Satisfaction",
          description: "Achieved 95% user satisfaction in beta testing.",
        },
      ],
      testimonial: {
        content:
          "Beta Health has greatly improved our clinic's operational efficiency.",
        author: "Dr. Michael Lee",
        role: "Clinic Manager",
      },
    },
    {
      id: 5,
      title: "Brianz Portfolio",
      type: "Frontend Showcase",
      category: "frontend",
      description:
        "A personal portfolio showcasing projects and skills, built with React and Tailwind CSS.",
      fullDescription: `Brianz Portfolio is a personal portfolio website showcasing my projects, skills, and professional achievements. The site features a clean, modern design with interactive elements and a responsive layout.

Built with React, TypeScript, and Tailwind CSS, the portfolio uses Vite for fast builds and optimal performance. It includes sections for projects, resume, and contact information, designed to highlight technical expertise and creativity.`,
      image:
        "https://briancheruiyot.netlify.app/assets/portfolio-screenshot.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      duration: "1 month",
      teamSize: "1 developer",
      status: "Live",
      rating: "4.8",
      impact: "+200%",
      liveUrl: "https://briancheruiyot.netlify.app/",
      githubUrl: "https://github.com/cobrianz/Brianz-portifolio",
      features: [
        "Interactive project showcase",
        "Responsive design",
        "Fast load times with Vite",
        "Smooth animations with Framer Motion",
        "SEO-optimized content",
      ],
      architecture: `The portfolio is a single-page application built with React and TypeScript, using Vite for fast builds. Tailwind CSS provides a responsive and modern UI, with Framer Motion for smooth animations.`,
      codeSnippet: `// Project card component
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-card rounded-xl shadow-premium"
      whileHover={{ y: -8 }}
    >
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </motion.div>
  );
};`,
      metrics: [
        { label: "Page Load Time", value: "0.8s" },
        { label: "SEO Score", value: "98/100" },
        { label: "Mobile Performance", value: "96/100" },
        { label: "Visitor Engagement", value: "90%" },
      ],
      challenges: [
        {
          title: "Performance Optimization",
          description: "Ensuring fast load times and smooth animations.",
          solution: "Used Vite for optimized builds and lazy-loaded images.",
        },
      ],
      results: [
        {
          title: "Visitor Engagement",
          description: "Increased average session duration by 200%.",
        },
        {
          title: "SEO Performance",
          description: "Achieved top rankings for portfolio-related keywords.",
        },
      ],
      testimonial: {
        content:
          "The portfolio site effectively showcases Brian's skills and projects.",
        author: "Sarah Johnson",
        role: "Web Developer",
      },
    },
  ];

  // Featured project set to IB Bank Liberia
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
        <title>
          Projects - Featured Work Gallery & Case Studies | Brian Cheruiyot
        </title>
        <meta
          name="description"
          content="Explore Brian Cheruiyot's comprehensive portfolio showcasing technical depth and real-world impact through detailed case studies and interactive project demonstrations."
        />
        <meta
          name="keywords"
          content="portfolio, projects, case studies, full-stack development, React, Node.js, web development"
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
                <span className="text-primary font-medium">
                  Featured Work Gallery
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Projects & <span className="text-primary">Case Studies</span>
              </h1>

              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Explore my comprehensive portfolio showcasing technical depth
                and real-world impact through detailed case studies, interactive
                demonstrations, and measurable results that drive business
                value.
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
                Highlighting my most impactful work with comprehensive technical
                deep-dive and measurable business results.
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
                Browse through my complete portfolio organized by category and
                technology stack.
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
                Ready to Start Your Next Project?
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life with cutting-edge
                technology and proven development practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-[#1c421c] text-green-500 rounded-full px-5 py-2.5 flex items-center gap-2 transition duration-300 hover:brightness-110 shadow-inner border border-green-900/10 hover:bg-[#265226]"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Message
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Download" size={20} className="mr-2" />
                  Download Resume
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
