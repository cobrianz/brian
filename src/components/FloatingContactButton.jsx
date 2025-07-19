import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './AppIcon';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      name: 'Email',
      icon: 'Mail',
      href: 'mailto:briancheruiyot022@gmail.com',
      color: 'bg-blue-500 hover:bg-blue-600',
      label: 'Send Email'
    },
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      href: 'https://wa.me/254702764907',
      color: 'bg-green-500 hover:bg-green-600',
      label: 'WhatsApp Chat'
    },
    {
      name: 'GitHub',
      icon: 'Github',
      href: 'https://github.com/cobrianz',
      color: 'bg-gray-800 hover:bg-gray-900',
      label: 'View GitHub'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      href: 'https://x.com/_afcguy',
      color: 'bg-sky-500 hover:bg-sky-600',
      label: 'Follow on Twitter'
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleContactClick = (href) => {
    window.open(href, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 lg:bottom-8 right-4 lg:right-8 z-40">
      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 flex flex-col gap-3 mb-2"
          >
            {contactOptions.map((option, index) => (
              <motion.button
                key={option.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                onClick={() => handleContactClick(option.href)}
                className={`${option.color} text-white p-3 rounded-full shadow-premium hover:shadow-premium-strong transition-all duration-300 group relative`}
                title={option.label}
              >
                <Icon name={option.icon} size={20} />
                
                {/* Tooltip */}
                <div className="absolute right-14 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-background border border-border rounded-lg px-3 py-2 text-foreground text-sm whitespace-nowrap shadow-premium">
                    {option.label}
                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-background border-r border-b border-border rotate-45"></div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMenu}
        className={`w-14 h-14 rounded-full shadow-premium hover:shadow-premium-strong transition-all duration-300 flex items-center justify-center ${
          isOpen 
            ? 'bg-error text-white rotate-45' :'bg-gradient-brand text-white'
        }`}
        title={isOpen ? 'Close' : 'Contact Options'}
      >
        <Icon 
          name={isOpen ? 'X' : 'Mail'} 
          size={24} 
          className="transition-transform duration-300"
        />
      </motion.button>

      {/* Background Overlay for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden -z-10"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingContactButton;