import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import ContactInfo from './components/ContactInfo';
import AvailabilityStatus from './components/AvailabilityStatus';
import ContactForm from './components/ContactForm';
import SocialLinks from './components/SocialLinks';
import CalendarIntegration from './components/CalendarIntegration';
import LocationContext from './components/LocationContext';
import Icon from '../../components/AppIcon';

const ContactProfessionalConnectionCenter = () => {
  useEffect(() => {
    document.title = 'Contact - Professional Connection Center | Brian Cheruiyot Portfolio';
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="py-12 lg:py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center shadow-brand">
                  <Icon name="MessageCircle" size={24} className="text-white" />
                </div>
                <h1 className="text-3xl lg:text-5xl font-bold text-foreground">
                  Let's Connect
                </h1>
              </div>
              <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Ready to discuss your next project? I'm here to help bring your ideas to life with 
                cutting-edge technology and creative solutions. Multiple ways to reach out, 
                tailored to your preferred communication style.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { label: 'Response Time', value: '< 24hrs', icon: 'Clock' },
                { label: 'Projects Completed', value: '50+', icon: 'CheckCircle' },
                { label: 'Client Satisfaction', value: '100%', icon: 'Star' },
                { label: 'Time Zone', value: 'GMT+3', icon: 'Globe' }
              ].map((stat, index) => (
                <div key={index} className="bg-card rounded-lg p-4 text-center shadow-premium">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Icon name={stat.icon} size={16} className="text-primary" />
                  </div>
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content Grid */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="pb-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                <motion.div variants={itemVariants}>
                  <ContactInfo />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <AvailabilityStatus />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <SocialLinks />
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <motion.div variants={itemVariants}>
                  <ContactForm />
                </motion.div>
              </div>
            </div>

            {/* Full Width Sections */}
            <div className="mt-12 space-y-8">
              <motion.div variants={itemVariants}>
                <CalendarIntegration />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <LocationContext />
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="mt-16 text-center">
              <div className="bg-gradient-brand rounded-2xl p-8 lg:p-12 shadow-premium-strong">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Ready to Start Your Project?
                  </h2>
                  <p className="text-white/90 text-lg mb-6">
                    Whether you're a startup looking for a technical co-founder, an agency needing 
                    a reliable development partner, or a company seeking to modernize your digital presence, 
                    I'm here to help you succeed.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:briancheruiyot022@gmail.com"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                      <Icon name="Mail" size={20} className="mr-2 " />
                      Send Email
                    </a>
                    <a
                      href="tel:+254712345678"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors duration-300 border border-white/20"
                    >
                      <Icon name="Phone" size={20} className="mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 sm:mb-0">
              <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BC</span>
              </div>
              <span className="text-foreground font-medium">Brian Cheruiyot</span>
            </div>
            <div className="text-sm text-text-secondary">
              © {new Date().getFullYear()} Brian Cheruiyot. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactProfessionalConnectionCenter;