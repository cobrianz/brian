import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import ProfessionalPortrait from './components/ProfessionalPortrait';
import ProfessionalStory from './components/ProfessionalStory';
import InteractiveTimeline from './components/InteractiveTimeline';
import BrandPillars from './components/BrandPillars';
import SkillsMatrix from './components/SkillsMatrix';
import ProfessionalPhilosophy from './components/ProfessionalPhilosophy';
import CulturalContext from './components/CulturalContext';
import TestimonialsSection from './components/TestimonialsSection';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About - Brian Cheruiyot | Professional Story & Brand Identity';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              About <span className="bg-gradient-brand bg-clip-text text-transparent">Brian</span>
            </h1>
            <p className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Transforming ideas into exceptional digital experiences through technical excellence, 
              innovation, and a deep commitment to measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Professional Portrait */}
            <div className="lg:col-span-1">
              <ProfessionalPortrait />
            </div>

            {/* Professional Story */}
            <div className="lg:col-span-2">
              <ProfessionalStory />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveTimeline />
        </div>
      </section>

      {/* Brand Pillars Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BrandPillars />
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkillsMatrix />
        </div>
      </section>

      {/* Professional Philosophy Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProfessionalPhilosophy />
        </div>
      </section>

      {/* Cultural Context Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CulturalContext />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-text-secondary">
              © {new Date().getFullYear()} Brian Cheruiyot. All rights reserved.
            </p>
            <p className="text-sm text-text-secondary">
              Built with React, Tailwind CSS, and passion for exceptional user experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;