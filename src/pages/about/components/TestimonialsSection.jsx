import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Senior Product Manager",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: `Brian's technical expertise and collaborative approach made him an invaluable team member. His ability to translate complex requirements into clean, efficient code while maintaining excellent communication throughout the project was impressive. The React application he built exceeded our performance expectations and delivered measurable business results.`,
      rating: 5,
      project: "E-commerce Platform Redesign",
      skills: ["React.js", "Performance Optimization", "Team Collaboration"],
      date: "December 2024"
    },
    {
      id: 2,
      name: "David Ochieng",
      role: "Lead Developer",
      company: "Nairobi Tech Hub",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: `Working with Brian on several projects has been a pleasure. His code quality is exceptional, and he has a natural ability to mentor junior developers. Brian consistently delivers solutions that are not only functional but also maintainable and scalable. His understanding of modern web technologies is impressive.`,
      rating: 5,
      project: "Team Mentorship & Code Reviews",
      skills: ["Code Quality", "Mentorship", "Technical Leadership"],
      date: "November 2024"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Startup Founder",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: `Brian helped us build our MVP from the ground up. His ability to understand our business requirements and translate them into a robust technical solution was remarkable. He delivered on time, within budget, and the application has been running smoothly since launch. Highly recommended for any startup looking for reliable development expertise.`,
      rating: 5,
      project: "MVP Development",
      skills: ["Full-Stack Development", "Startup Mindset", "Problem Solving"],
      date: "October 2024"
    },
    {
      id: 4,
      name: "Professor James Kimani",
      role: "Computer Science Lecturer",
      company: "Maseno University",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: `Brian was one of my most dedicated students who has grown into an exceptional developer. His passion for learning and sharing knowledge with peers was evident from day one. He regularly contributes to our tech community events and has become a role model for current students. His technical skills are matched by his professional attitude.`,
      rating: 5,
      project: "Academic Excellence & Community Building",
      skills: ["Continuous Learning", "Knowledge Sharing", "Community Leadership"],
      date: "September 2024"
    },
    {
      id: 5,
      name: "Michael Chen",
      role: "CTO",
      company: "GlobalTech Solutions",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      content: `Brian's work on our international project demonstrated his ability to work across time zones and cultures effectively. His technical solutions were innovative, and his communication skills made remote collaboration seamless. The performance improvements he implemented resulted in a 40% increase in user engagement.`,
      rating: 5,
      project: "International Web Application",
      skills: ["Remote Collaboration", "Performance Optimization", "Cross-Cultural Communication"],
      date: "August 2024"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
          Professional Testimonials
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Testimonials from colleagues and mentors providing social proof of collaborative approach and technical capabilities.
        </p>
      </motion.div>

      {/* Main Testimonial Display */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass-morphism rounded-2xl p-8 lg:p-12 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 right-4">
            <Icon name="Quote" size={120} className="text-primary" />
          </div>
        </div>

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Testimonial Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-conversion-accent rounded-full flex items-center justify-center">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-text-secondary">
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-text-secondary ml-2">
                    {currentTestimonial.date}
                  </span>
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Project & Skills */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pt-6 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Icon name="Briefcase" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    Project: {currentTestimonial.project}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentTestimonial.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-primary scale-125' :'bg-surface hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </motion.div>

      {/* Testimonial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            className={`glass-morphism rounded-xl p-6 cursor-pointer transition-all duration-300 ${
              index === activeTestimonial
                ? 'border-primary/50 shadow-brand'
                : 'hover:shadow-premium'
            }`}
            onClick={() => setActiveTestimonial(index)}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-foreground text-sm">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-text-secondary">
                  {testimonial.company}
                </p>
              </div>
            </div>
            
            <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
              "{testimonial.content.substring(0, 120)}..."
            </p>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-xs text-text-secondary">
                {testimonial.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="text-center glass-morphism rounded-xl p-6">
          <div className="text-3xl font-bold text-conversion-accent mb-2">5.0</div>
          <div className="text-sm text-text-secondary">Average Rating</div>
        </div>
        <div className="text-center glass-morphism rounded-xl p-6">
          <div className="text-3xl font-bold text-primary mb-2">15+</div>
          <div className="text-sm text-text-secondary">Happy Clients</div>
        </div>
        <div className="text-center glass-morphism rounded-xl p-6">
          <div className="text-3xl font-bold text-accent mb-2">100%</div>
          <div className="text-sm text-text-secondary">Project Success</div>
        </div>
        <div className="text-center glass-morphism rounded-xl p-6">
          <div className="text-3xl font-bold text-cta-primary mb-2">24h</div>
          <div className="text-sm text-text-secondary">Response Time</div>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;