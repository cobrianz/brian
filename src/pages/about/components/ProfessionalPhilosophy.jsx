import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProfessionalPhilosophy = () => {
  const philosophyPrinciples = [
    {
      icon: "Code2",
      title: "Clean Code Philosophy",
      description: "Code should be readable, maintainable, and self-documenting. Every function should have a single responsibility, and every variable should tell a story.",
      quote: "Clean code is not written by following a set of rules. Clean code is written by someone who cares."
    },
    {
      icon: "Users",
      title: "User-Centered Design",
      description: "Technology exists to serve people, not the other way around. Every interface should be intuitive, accessible, and delightful to use.",
      quote: "The best interface is the one that gets out of the user\'s way and lets them accomplish their goals effortlessly."
    },
    {
      icon: "BarChart3",
      title: "Measurable Results",
      description: "Every feature should have a purpose, every optimization should have metrics, and every project should deliver quantifiable business value.",
      quote: "If you can't measure it, you can't improve it. Data-driven decisions lead to successful outcomes."
    },
    {
      icon: "Zap",
      title: "Performance First",
      description: "Speed and efficiency are not optional. Users expect fast, responsive applications that work seamlessly across all devices and network conditions.",
      quote: "Performance is a feature, not an afterthought. Every millisecond matters in user experience."
    }
  ];

  const coreValues = [
    {
      icon: "Heart",
      title: "Passion-Driven Development",
      description: "Genuine enthusiasm for solving problems and creating digital experiences that make a difference."
    },
    {
      icon: "Shield",
      title: "Integrity & Transparency",
      description: "Honest communication about timelines, challenges, and solutions. Building trust through reliability."
    },
    {
      icon: "Lightbulb",
      title: "Continuous Innovation",
      description: "Always exploring new technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: "Users",
      title: "Collaborative Spirit",
      description: "Believing that the best solutions come from diverse perspectives and open communication."
    }
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
          Professional Philosophy
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          The guiding principles that shape my approach to software development and professional relationships.
        </p>
      </motion.div>

      {/* Philosophy Principles */}
      <div className="space-y-8">
        {philosophyPrinciples.map((principle, index) => (
          <motion.div
            key={principle.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col lg:flex-row items-start gap-8 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Content */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Icon name={principle.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {principle.title}
                </h3>
              </div>
              
              <p className="text-text-secondary leading-relaxed text-lg">
                {principle.description}
              </p>
              
              <blockquote className="glass-morphism rounded-xl p-6 border-l-4 border-primary">
                <Icon name="Quote" size={24} className="text-primary mb-3" />
                <p className="text-foreground font-medium italic leading-relaxed">
                  "{principle.quote}"
                </p>
              </blockquote>
            </div>

            {/* Visual Element */}
            <div className="w-full lg:w-80 h-64 glass-morphism rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center mx-auto">
                  <Icon name={principle.icon} size={32} className="text-white" />
                </div>
                <div className="text-sm text-text-secondary font-medium">
                  Principle #{index + 1}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Core Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
            Core Values
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto">
            The fundamental beliefs that guide every decision and interaction in my professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="glass-morphism rounded-xl p-6 hover-glow transition-smooth"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={value.icon} size={24} className="text-accent" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-foreground">{value.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Personal Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="text-center"
      >
        <div className="glass-morphism rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
          <Icon name="Target" size={48} className="text-primary mx-auto mb-6" />
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Personal Mission Statement
          </h3>
          <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed mb-6">
            "To bridge the gap between innovative ideas and practical implementation, creating software solutions that not only meet technical requirements but also drive meaningful business outcomes and enhance user experiences. I am committed to representing the excellence of African tech talent on the global stage while contributing to the growth and success of every team and project I'm part of."
          </blockquote>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-12 h-0.5 bg-primary"></div>
            <cite className="text-text-secondary font-accent text-lg">
              Brian Cheruiyot
            </cite>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfessionalPhilosophy;