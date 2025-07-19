import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "Monitor",
      color: "text-blue-400",
      skills: [
        { name: "React.js", level: 95, projects: "15+ projects", recent: "E-commerce Platform 2024" },
        { name: "JavaScript/ES6+", level: 92, projects: "20+ projects", recent: "Real-time Chat App" },
        { name: "TypeScript", level: 88, projects: "8+ projects", recent: "Task Management System" },
        { name: "Tailwind CSS", level: 90, projects: "12+ projects", recent: "Portfolio Website" },
        { name: "Next.js", level: 85, projects: "6+ projects", recent: "Blog Platform" },
        { name: "HTML5/CSS3", level: 95, projects: "25+ projects", recent: "Landing Page Design" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: "Server",
      color: "text-green-400",
      skills: [
        { name: "Node.js", level: 88, projects: "10+ projects", recent: "API Gateway Service" },
        { name: "Express.js", level: 90, projects: "12+ projects", recent: "RESTful API Development" },
        { name: "MongoDB", level: 85, projects: "8+ projects", recent: "User Management System" },
        { name: "PostgreSQL", level: 82, projects: "6+ projects", recent: "Analytics Dashboard" },
        { name: "REST APIs", level: 92, projects: "15+ projects", recent: "Mobile App Backend" },
        { name: "GraphQL", level: 75, projects: "3+ projects", recent: "Content Management API" }
      ]
    },
    tools: {
      title: "Tools & Technologies",
      icon: "Settings",
      color: "text-purple-400",
      skills: [
        { name: "Git/GitHub", level: 95, projects: "All projects", recent: "Team Collaboration Workflow" },
        { name: "Docker", level: 80, projects: "5+ projects", recent: "Microservices Deployment" },
        { name: "AWS/Cloud", level: 78, projects: "4+ projects", recent: "Serverless Architecture" },
        { name: "Figma", level: 85, projects: "8+ projects", recent: "Design System Creation" },
        { name: "Jest/Testing", level: 82, projects: "6+ projects", recent: "Unit Test Implementation" },
        { name: "Webpack/Vite", level: 88, projects: "10+ projects", recent: "Build Optimization" }
      ]
    },
    soft: {
      title: "Professional Skills",
      icon: "Users",
      color: "text-orange-400",
      skills: [
        { name: "Problem Solving", level: 95, projects: "Daily practice", recent: "Complex Algorithm Optimization" },
        { name: "Team Collaboration", level: 92, projects: "Team projects", recent: "Cross-functional Team Lead" },
        { name: "Communication", level: 90, projects: "Client interactions", recent: "Technical Documentation" },
        { name: "Project Management", level: 85, projects: "Multiple projects", recent: "Agile Sprint Planning" },
        { name: "Mentoring", level: 88, projects: "Junior developers", recent: "Code Review Sessions" },
        { name: "Adaptability", level: 93, projects: "Technology shifts", recent: "Framework Migration" }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  const getSkillColor = (level) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getSkillLabel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
          Technical Skills Matrix
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Comprehensive overview of my technical competencies with proficiency indicators and recent project applications.
        </p>
      </motion.div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => {
          const categoryData = skillCategories[category];
          return (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'glass-morphism text-foreground hover:bg-surface'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon 
                name={categoryData.icon} 
                size={20} 
                className={activeCategory === category ? 'text-primary-foreground' : categoryData.color}
              />
              <span className="font-medium">{categoryData.title}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Skills Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="glass-morphism rounded-2xl p-8"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Icon 
              name={skillCategories[activeCategory].icon} 
              size={28} 
              className={skillCategories[activeCategory].color}
            />
            <h3 className="text-2xl font-bold text-foreground">
              {skillCategories[activeCategory].title}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="space-y-3"
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-semibold text-foreground">{skill.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      skill.level >= 90 ? 'bg-green-500/20 text-green-400' :
                      skill.level >= 80 ? 'bg-blue-500/20 text-blue-400' :
                      skill.level >= 70 ? 'bg-yellow-500/20 text-yellow-400': 'bg-red-500/20 text-red-400'
                    }`}>
                      {getSkillLabel(skill.level)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-text-secondary">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-surface rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full ${getSkillColor(skill.level)}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>

                {/* Skill Details */}
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Icon name="Briefcase" size={14} className="text-text-secondary" />
                    <span className="text-sm text-text-secondary">{skill.projects}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} className="text-text-secondary" />
                    <span className="text-sm text-text-secondary">Recent: {skill.recent}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="text-center glass-morphism rounded-xl p-6">
          <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
          <div className="text-sm text-text-secondary">Expert Level Skills</div>
        </div>
        <div className="text-center glass-morphism rounded-xl p-6">
          <div className="text-3xl font-bold text-blue-400 mb-2">8+</div>
          <div className="text-sm text-text-secondary">Advanced Skills</div>
        </div>
        <div className="text-center glass-morphism rounded-xl p-6">
          <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
          <div className="text-sm text-text-secondary">Projects Completed</div>
        </div>
        <div className="text-center glass-morphism rounded-xl p-6">
          <div className="text-3xl font-bold text-orange-400 mb-2">3+</div>
          <div className="text-sm text-text-secondary">Years Experience</div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsMatrix;