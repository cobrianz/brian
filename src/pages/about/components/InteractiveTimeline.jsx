import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const InteractiveTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineEvents = [
    {
      year: "2021",
      title: "University & First Code",
      description: "Started Computer Science at Maseno University. Wrote my first \'Hello World\' in Python and fell in love with programming.",
      icon: "GraduationCap",
      achievements: ["Learned Python fundamentals", "Built first calculator app", "Joined coding club"],
      color: "text-blue-400"
    },
    {
      year: "2022",
      title: "Web Development Discovery",
      description: "Discovered web development through HTML, CSS, and JavaScript. Built my first responsive website and realized the power of the web.",
      icon: "Code",
      achievements: ["Mastered HTML/CSS/JS", "Built 5 static websites", "Learned responsive design"],
      color: "text-green-400"
    },
    {
      year: "2023",
      title: "React & Modern Stack",
      description: "Dove deep into React ecosystem. Built dynamic applications and learned modern development practices with Git, APIs, and deployment.",
      icon: "Layers",
      achievements: ["React expertise", "API integration", "Git workflow mastery", "First freelance project"],
      color: "text-purple-400"
    },
    {
      year: "2024",
      title: "Professional Developer",
      description: "Transitioned to full-time development. Specialized in full-stack solutions with Node.js, databases, and cloud deployment.",
      icon: "Briefcase",
      achievements: ["Full-stack proficiency", "Database design", "Cloud deployment", "Team collaboration"],
      color: "text-orange-400"
    },
    {
      year: "2025",
      title: "Innovation & Leadership",
      description: "Currently focusing on cutting-edge technologies, mentoring junior developers, and building scalable solutions for global clients.",
      icon: "Rocket",
      achievements: ["Advanced React patterns", "Mentoring developers", "International clients", "Open source contributions"],
      color: "text-cyan-400"
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
          Technical Evolution Timeline
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          From first line of code to professional developer - a journey of continuous learning and growth.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-conversion-accent"></div>

        {/* Timeline Events */}
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex items-start space-x-8"
            >
              {/* Timeline Node */}
              <motion.div
                className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-primary shadow-brand scale-110' 
                    : 'bg-surface hover:bg-primary/20'
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon 
                  name={event.icon} 
                  size={24} 
                  className={activeIndex === index ? 'text-white' : 'text-primary'} 
                />
              </motion.div>

              {/* Timeline Content */}
              <div className="flex-1 min-w-0">
                <motion.div
                  className={`glass-morphism rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    activeIndex === index ? 'shadow-brand border-primary/30' : 'hover:shadow-premium'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className={`text-2xl font-bold ${event.color}`}>
                        {event.year}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground">
                        {event.title}
                      </h3>
                    </div>
                    <Icon 
                      name={activeIndex === index ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      className="text-text-secondary" 
                    />
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-border pt-4"
                      >
                        <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {event.achievements.map((achievement, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              className="flex items-center space-x-2"
                            >
                              <Icon name="Check" size={16} className="text-conversion-accent" />
                              <span className="text-sm text-text-secondary">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTimeline;