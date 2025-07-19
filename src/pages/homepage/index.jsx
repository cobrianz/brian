import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';
import FeaturedProjects from './components/FeaturedProjects';
import AvailabilityStatus from './components/AvailabilityStatus';

const HomepagePremiumDeveloperPortfolio = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Brian Cheruiyot - Premium Developer Portfolio | Full-Stack Developer';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Brian Cheruiyot - Globally competitive African tech talent specializing in React, Node.js, and modern web technologies. Building scalable solutions that drive real business impact.');
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Preview Section */}
        <ServicesPreview />

        {/* Featured Projects Section */}
        <FeaturedProjects />

        {/* Availability Status Section */}
        <AvailabilityStatus />

        {/* Footer */}
        <footer className="bg-muted border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Brand */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">BC</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Brian Cheruiyot</h3>
                    <p className="text-sm text-text-secondary font-accent">Portfolio Pro</p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary max-w-xs mx-auto md:mx-0">
                  Building the future of web development, one project at a time.
                </p>
              </div>

              {/* Quick Links */}
              <div className="text-center">
                <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <div className="text-sm text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer">
                    About Me
                  </div>
                  <div className="text-sm text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer">
                    Services
                  </div>
                  <div className="text-sm text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer">
                    Projects
                  </div>
                  <div className="text-sm text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer">
                    Contact
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-center md:text-right">
                <h4 className="font-medium text-foreground mb-4">Get In Touch</h4>
                <div className="space-y-2">
                  <div className="text-sm text-text-secondary">brian@portfolio.dev</div>
                  <div className="text-sm text-text-secondary">+254 702 764 907</div>
                  <div className="text-sm text-text-secondary">Nairobi, Kenya</div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-text-secondary mb-4 md:mb-0">
                © {new Date().getFullYear()} Brian Cheruiyot. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <div className="text-sm text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer">
                  Privacy Policy
                </div>
                <div className="text-sm text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer">
                  Terms of Service
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </motion.div>
  );
};

export default HomepagePremiumDeveloperPortfolio;