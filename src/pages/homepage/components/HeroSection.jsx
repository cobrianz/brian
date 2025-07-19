import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import profile from '../../../assets/about.jpg';
const HeroSection = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const metrics = [
    { label: "Projects Completed", value: "47+", icon: "Code" },
    { label: "Technologies Mastered", value: "25+", icon: "Layers" },
    { label: "Client Satisfaction", value: "98%", icon: "Star" },
    { label: "Years Experience", value: "5+", icon: "Calendar" }
  ];

  const techStack = [
    "React", "Node.js", "TypeScript", "Python", "MongoDB", "PostgreSQL", 
    "AWS", "Docker", "GraphQL", "Next.js", "Express", "Tailwind CSS"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Custom Cursor */}
      <div
        className="fixed w-6 h-6 bg-primary/30 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "translate3d(0, 0, 0)",
        }}
      />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(82,113,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(82,113,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-surface/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6"
            >
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm text-text-secondary">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Brian{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Cheruiyot
              </span>
            </motion.h1>

            {/* Professional Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl sm:text-2xl text-text-secondary mb-4 font-medium"
            >
              Full-Stack Developer & Digital Architect
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Globally competitive African tech talent building scalable
              solutions that drive real business impact. Specializing in React,
              Node.js, and modern web technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex sm:flex-row flex-wrap gap-4 justify-center sm:gap-2 lg:justify-start mb-12 sm:w-full"
            >
              {/* Message Button */}
              <Link to="/contact">
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-fit text-xs sm:text-sm bg-[#1c421c] text-green-500 rounded-full px-5 py-2.5 flex items-center gap-2 transition duration-300 hover:brightness-110 shadow-inner border border-green-900/10 hover:bg-[#265226]"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Message
                </Button>
              </Link>

              {/* Resume Button */}
              <Button
                variant="ghost"
                size="lg"
                className="w-fit text-xs sm:text-sm relative text-primary px-6 py-3 flex items-center gap-2 transition duration-300 hover:bg-transparent
      before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
                iconName="Download"
                iconPosition="left"
              >
                Resume
              </Button>

              {/* View Projects Button */}
              <Link to="/projects">
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-fit text-xs sm:text-sm relative text-foreground hover:bg-transparent hover:text-primary px-6 py-3 flex items-center gap-2 transition-transform duration-300 hover:scale-105
        before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
                  iconName="ExternalLink"
                  iconPosition="right"
                >
                  View Projects
                </Button>
              </Link>
            </motion.div>
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-sm text-text-secondary font-medium">
                Technologies I work with:
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                    className="px-3 py-1 bg-surface/50 backdrop-blur-sm border border-border rounded-full text-sm text-foreground hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Metrics & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Profile Image */}
            <div className="relative mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-brand rounded-full opacity-20 blur-xl"
              />
              <div className="relative w-80 h-80 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-premium-strong">
                  <Image
                    src={profile}
                    alt="Brian Cheruiyot - Full-Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Animated Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  className={`glass-morphism p-6 rounded-xl border border-border hover-glow transition-all duration-300 ${
                    currentMetric === index
                      ? "ring-2 ring-primary/50 shadow-brand"
                      : ""
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon
                        name={metric.icon}
                        size={20}
                        className="text-primary"
                      />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        {metric.value}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-6 flex items-center justify-center space-x-2 text-text-secondary"
            >
              <Icon name="MapPin" size={16} className="text-primary" />
              <span className="text-sm">Nairobi, Kenya • GMT+3</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-8rem] left-1/2 transform -translate-x-1/2 w-full"
          >
            <div className="flex flex-col items-center space-y-2 text-text-secondary cursor-pointer hover:text-primary transition-colors duration-300 w-full">
              <span className="text-sm font-medium text-nowrap">
                Scroll to explore
              </span>
              <Icon name="ChevronDown" size={20} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;