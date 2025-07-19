import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProfessionalStory = () => {
  const storyHighlights = [
    {
      icon: "MapPin",
      title: "Nairobi Roots",
      description: "Born and raised in Kenya's tech hub, bringing local innovation to global standards"
    },
    {
      icon: "Code",
      title: "Self-Taught Journey",
      description: "Transformed curiosity into expertise through dedication and continuous learning"
    },
    {
      icon: "Globe",
      title: "Global Perspective",
      description: "Building solutions that work across cultures and markets worldwide"
    },
    {
      icon: "Target",
      title: "Impact-Driven",
      description: "Every line of code written with measurable business outcomes in mind"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Story Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
          My Professional Journey
        </h2>
        <p className="text-lg text-text-secondary leading-relaxed">
          From curious student to professional developer, building the future one project at a time.
        </p>
      </motion.div>

      {/* Main Story */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-morphism rounded-2xl p-8 space-y-6"
      >
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">The Beginning</h3>
          <p className="text-text-secondary leading-relaxed">
            My journey into software development began during my university years in Nairobi, where I discovered the power of code to solve real-world problems. What started as curiosity about how websites worked evolved into a passion for creating digital experiences that make a difference.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">The Evolution</h3>
          <p className="text-text-secondary leading-relaxed">
            Through countless hours of learning, building, and iterating, I've developed expertise in modern web technologies. Each project taught me something new - from optimizing performance to creating intuitive user experiences. I've worked with startups, established businesses, and fellow developers, always focusing on delivering solutions that drive measurable results.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">The Vision</h3>
          <p className="text-text-secondary leading-relaxed">
            Today, I represent the new generation of African tech talent - globally competitive, locally rooted, and future-focused. My goal is to bridge the gap between innovative ideas and practical implementation, creating software that not only works flawlessly but also contributes to business growth and user satisfaction.
          </p>
        </div>
      </motion.div>

      {/* Story Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {storyHighlights.map((highlight, index) => (
          <motion.div
            key={highlight.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            className="glass-morphism rounded-xl p-6 hover-glow transition-smooth"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Icon name={highlight.icon} size={24} className="text-primary" />
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProfessionalStory;