import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CulturalContext = () => {
  const culturalHighlights = [
    {
      icon: "MapPin",
      title: "Nairobi Tech Hub",
      description: "Based in Kenya's Silicon Savannah, where innovation meets opportunity in Africa's fastest-growing tech ecosystem.",
      stats: "Home to 200+ tech startups"
    },
    {
      icon: "Globe",
      title: "Global Standards",
      description: "Combining local innovation with international best practices to deliver world-class solutions.",
      stats: "International quality standards"
    },
    {
      icon: "Users",
      title: "Community Impact",
      description: "Actively contributing to the growth of Kenya\'s tech community through mentorship and knowledge sharing.",
      stats: "10+ developers mentored"
    },
    {
      icon: "Zap",
      title: "Innovation Heritage",
      description: "Part of a generation that\'s putting African tech talent on the global map through groundbreaking solutions.",
      stats: "Next-gen African talent"
    }
  ];

  const achievements = [
    {
      title: "Local Recognition",
      description: "Featured in Nairobi\'s emerging developer spotlight",
      icon: "Award"
    },
    {
      title: "Community Leadership",
      description: "Organized 5+ local tech meetups and workshops",
      icon: "Users"
    },
    {
      title: "Knowledge Sharing",
      description: "Regular speaker at university tech events",
      icon: "MessageSquare"
    },
    {
      title: "Open Source",
      description: "Contributing to projects that benefit the African tech ecosystem",
      icon: "Code"
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
          Cultural Context & Heritage
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Celebrating my identity as part of the new generation of African tech talent - globally competitive, locally rooted, and future-focused.
        </p>
      </motion.div>

      {/* Hero Section with Map */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass-morphism rounded-2xl p-8 lg:p-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Icon name="MapPin" size={28} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Nairobi, Kenya
              </h3>
            </div>
            
            <p className="text-text-secondary leading-relaxed text-lg">
              Operating from the heart of Kenya's Silicon Savannah, I represent the new wave of African developers who are redefining what's possible in technology. Nairobi's vibrant tech ecosystem has shaped my approach to innovation, collaboration, and problem-solving.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={20} className="text-conversion-accent" />
                <span className="text-foreground">GMT+3 (EAT) - Perfect overlap with European and Asian markets</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Wifi" size={20} className="text-conversion-accent" />
                <span className="text-foreground">High-speed fiber connectivity for seamless remote collaboration</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Globe" size={20} className="text-conversion-accent" />
                <span className="text-foreground">English as primary business language</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-80 rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Nairobi, Kenya"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=-1.2921,36.8219&z=12&output=embed"
              className="border-0"
            ></iframe>
            <div className="absolute top-4 left-4 glass-morphism rounded-lg px-3 py-2">
              <span className="text-sm font-medium text-foreground">Nairobi, Kenya</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cultural Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {culturalHighlights.map((highlight, index) => (
          <motion.div
            key={highlight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            className="glass-morphism rounded-xl p-6 hover-glow transition-smooth"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={highlight.icon} size={24} className="text-primary" />
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-foreground">{highlight.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {highlight.description}
                </p>
                <div className="inline-flex items-center space-x-2 bg-surface rounded-full px-3 py-1">
                  <Icon name="TrendingUp" size={14} className="text-conversion-accent" />
                  <span className="text-xs font-medium text-conversion-accent">
                    {highlight.stats}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* African Tech Ecosystem */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
            Part of Africa's Tech Revolution
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Contributing to the narrative that positions Africa as a global technology powerhouse.
          </p>
        </div>

        <div className="glass-morphism rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Statistics */}
            <div className="space-y-6">
              <h4 className="font-bold text-foreground text-lg">African Tech Growth</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Startup Funding 2024</span>
                  <span className="font-bold text-conversion-accent">$2.4B+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Tech Hubs</span>
                  <span className="font-bold text-primary">600+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Developers</span>
                  <span className="font-bold text-accent">2M+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Kenya's Rank</span>
                  <span className="font-bold text-cta-primary">#1 in East Africa</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="font-bold text-foreground text-lg">Community Contributions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    className="bg-surface rounded-lg p-4 hover:bg-surface/80 transition-colors duration-200"
                  >
                    <div className="flex items-start space-x-3">
                      <Icon name={achievement.icon} size={20} className="text-primary mt-1" />
                      <div className="space-y-1">
                        <h5 className="font-semibold text-foreground text-sm">
                          {achievement.title}
                        </h5>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Vision Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="text-center"
      >
        <div className="glass-morphism rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Image
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=60&h=40&fit=crop"
              alt="Kenya Flag"
              className="w-12 h-8 rounded object-cover"
            />
            <Icon name="Heart" size={24} className="text-red-500" />
            <Icon name="Code" size={24} className="text-primary" />
          </div>
          
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Representing Excellence
          </h3>
          
          <blockquote className="text-xl font-medium text-foreground leading-relaxed mb-6">
            "I'm proud to represent the new generation of African developers who are not just participating in the global tech economy, but actively shaping its future. Every project I work on carries the responsibility of showcasing the incredible talent and innovation that Africa has to offer."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
            <div className="flex items-center space-x-2">
              <Icon name="Flag" size={16} className="text-primary" />
              <span>Proudly Kenyan</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Globe" size={16} className="text-conversion-accent" />
              <span>Globally Minded</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={16} className="text-cta-primary" />
              <span>Future Focused</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CulturalContext;