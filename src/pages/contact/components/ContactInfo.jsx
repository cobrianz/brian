import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'briancheruiyot022@gmail.com',
      description: 'Primary contact for all inquiries',
      href: 'mailto:briancheruiyot022@gmail.com'
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '+254 712 345 678',
      description: 'Available Mon-Fri, 9AM-6PM EAT',
      href: 'tel:+254712345678'
    },
    {
      icon: 'MapPin',
      label: 'Location',
      value: 'Nairobi, Kenya',
      description: 'GMT+3 (East Africa Time)',
      href: null
    },
    {
      icon: 'Clock',
      label: 'Response Time',
      value: '< 24 hours',
      description: 'Typical response for new inquiries',
      href: null
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 lg:p-8 shadow-premium">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
          <Icon name="User" size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
          <p className="text-sm text-text-secondary">Get in touch directly</p>
        </div>
      </div>

      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <div key={index} className="group">
            {detail.href ? (
              <a
                href={detail.href}
                className="flex items-start space-x-4 p-3 rounded-lg hover:bg-surface transition-colors duration-300"
              >
                <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon name={detail.icon} size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-text-secondary">{detail.label}</span>
                  </div>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                    {detail.value}
                  </p>
                  <p className="text-xs text-text-secondary mt-1">{detail.description}</p>
                </div>
              </a>
            ) : (
              <div className="flex items-start space-x-4 p-3 rounded-lg">
                <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center">
                  <Icon name={detail.icon} size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-text-secondary">{detail.label}</span>
                  </div>
                  <p className="text-foreground font-medium">{detail.value}</p>
                  <p className="text-xs text-text-secondary mt-1">{detail.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;