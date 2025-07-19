import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationContext = () => {
  const locationData = {
    city: 'Nairobi',
    country: 'Kenya',
    timezone: 'GMT+3 (East Africa Time)',
    coordinates: { lat: -1.2921, lng: 36.8219 },
    workingHours: 'Mon-Fri, 9:00 AM - 6:00 PM',
    languages: ['English', 'Swahili'],
    currency: 'USD (International) / KES (Local)'
  };

  const techEcosystem = [
    {
      title: 'Growing Tech Hub',
      description: 'Part of Nairobi\'s thriving Silicon Savannah ecosystem',
      icon: 'Building2'
    },
    {
      title: 'Global Connectivity',
      description: 'Excellent internet infrastructure for remote collaboration',
      icon: 'Wifi'
    },
    {
      title: 'Time Zone Advantage',
      description: 'Perfect overlap with European and Asian business hours',
      icon: 'Clock'
    },
    {
      title: 'Cost Effective',
      description: 'Competitive rates with international quality standards',
      icon: 'DollarSign'
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 lg:p-8 shadow-premium">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
          <Icon name="MapPin" size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Location Context</h3>
          <p className="text-sm text-text-secondary">Based in Nairobi's tech ecosystem</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Location Details */}
        <div className="bg-surface rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-lg font-bold text-foreground">{locationData.city}, {locationData.country}</h4>
              <p className="text-sm text-text-secondary">{locationData.timezone}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
              <Icon name="MapPin" size={24} className="text-white" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-text-secondary">Working Hours:</span>
              <p className="text-foreground font-medium">{locationData.workingHours}</p>
            </div>
            <div>
              <span className="text-text-secondary">Languages:</span>
              <p className="text-foreground font-medium">{locationData.languages.join(', ')}</p>
            </div>
            <div className="sm:col-span-2">
              <span className="text-text-secondary">Currency:</span>
              <p className="text-foreground font-medium">{locationData.currency}</p>
            </div>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="bg-surface rounded-lg overflow-hidden">
          <div className="h-48 relative">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Nairobi, Kenya"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${locationData.coordinates.lat},${locationData.coordinates.lng}&z=12&output=embed`}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Tech Ecosystem Advantages */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Why Nairobi?</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {techEcosystem.map((advantage, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 rounded-lg bg-surface hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={advantage.icon} size={16} className="text-primary" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-foreground">{advantage.title}</h5>
                  <p className="text-xs text-text-secondary mt-1">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel & Meeting Info */}
        <div className="bg-surface rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="Plane" size={16} className="text-primary" />
            <span className="text-sm font-medium text-foreground">Travel & Meetings</span>
          </div>
          <div className="text-xs text-text-secondary space-y-1">
            <p>• Available for international travel for major projects</p>
            <p>• Jomo Kenyatta International Airport (NBO) - 1 hour from city</p>
            <p>• Visa-free or visa-on-arrival for most countries</p>
            <p>• Flexible with meeting times across different time zones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationContext;