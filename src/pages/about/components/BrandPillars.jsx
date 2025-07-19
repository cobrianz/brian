import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const BrandPillars = () => {
  const pillars = [
    {
      icon: "Award",
      title: "Technical Excellence",
      description: "Proven ability to deliver scalable, high-performance solutions using modern technologies and best practices.",
      examples: [
        "Clean, maintainable code architecture",
        "Performance optimization expertise",
        "Test-driven development approach",
        "Security-first implementation"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: "Lightbulb",
      title: "Innovation Mindset",
      description: "Embracing cutting-edge technologies and creative problem-solving to build tomorrow\'s solutions today.",
      examples: [
        "Early adopter of new frameworks",
        "Creative UI/UX implementations",
        "Automation and workflow optimization",
        "Experimental feature development"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: "Globe",
      title: "Global Perspective",
      description: "Nairobi-based with international standards and aspirations, building solutions for worldwide audiences.",
      examples: [
        "Cross-cultural user experience design",
        "International accessibility standards",
        "Multi-timezone application support",
        "Global market understanding"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10"
    },
    {
      icon: "Target",
      title: "Impact-Driven",
      description: "Focus on measurable outcomes and real-world value creation that drives business growth and user satisfaction.",
      examples: [
        "ROI-focused development approach",
        "User engagement optimization",
        "Business metric improvements",
        "Conversion rate enhancements"
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: "TrendingUp",
      title: "Continuous Growth",
      description: "Commitment to learning, sharing knowledge, and community building in the ever-evolving tech landscape.",
      examples: [
        "Regular skill updates and certifications",
        "Knowledge sharing through mentoring",
        "Open source contributions",
        "Community event participation"
      ],
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-500/10"
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
          Core Brand Pillars
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          The fundamental principles that guide my approach to software development and professional growth.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-morphism rounded-2xl p-8 hover-glow transition-smooth group"
          >
            {/* Header */}
            <div className="flex items-start space-x-4 mb-6">
              <div className={`w-16 h-16 rounded-xl ${pillar.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={pillar.icon} size={28} className={`bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>

            {/* Examples */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                Key Examples:
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {pillar.examples.map((example, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.05) }}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-surface/50 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-text-secondary">{example}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Philosophy Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center"
      >
        <div className="glass-morphism rounded-2xl p-8 max-w-4xl mx-auto">
          <Icon name="Quote" size={32} className="text-primary mx-auto mb-4" />
          <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed mb-4">
            "Every line of code I write is guided by these principles - creating solutions that are not just functional, but exceptional, scalable, and impactful."
          </blockquote>
          <cite className="text-text-secondary font-accent text-lg">
            - Brian Cheruiyot
          </cite>
        </div>
      </motion.div>
    </div>
  );
};

export default BrandPillars;