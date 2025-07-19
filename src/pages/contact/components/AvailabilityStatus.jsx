import React from 'react';
import Icon from '../../../components/AppIcon';

const AvailabilityStatus = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    timeZone: 'Africa/Nairobi',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const currentDate = new Date().toLocaleDateString('en-US', {
    timeZone: 'Africa/Nairobi',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const availabilityData = {
    status: 'Available',
    statusColor: 'text-success',
    statusBg: 'bg-success/10',
    currentProjects: 2,
    capacity: 'Accepting new projects',
    nextAvailable: 'Immediate start possible',
    workingHours: 'Mon-Fri, 9AM-6PM EAT'
  };

  return (
    <div className="bg-card rounded-xl p-6 lg:p-8 shadow-premium">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
            <Icon name="Calendar" size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Availability Status</h3>
            <p className="text-sm text-text-secondary">Current project capacity</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full ${availabilityData.statusBg} flex items-center space-x-2`}>
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span className={`text-sm font-medium ${availabilityData.statusColor}`}>
            {availabilityData.status}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-surface rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-text-secondary">Current Time (Nairobi)</span>
            <Icon name="Clock" size={16} className="text-text-secondary" />
          </div>
          <p className="text-lg font-bold text-foreground">{currentTime}</p>
          <p className="text-xs text-text-secondary">{currentDate}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-surface rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Briefcase" size={16} className="text-primary" />
              <span className="text-sm font-medium text-text-secondary">Active Projects</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{availabilityData.currentProjects}</p>
            <p className="text-xs text-text-secondary">Currently managing</p>
          </div>

          <div className="bg-surface rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Users" size={16} className="text-primary" />
              <span className="text-sm font-medium text-text-secondary">Capacity</span>
            </div>
            <p className="text-sm font-bold text-success">{availabilityData.capacity}</p>
            <p className="text-xs text-text-secondary">{availabilityData.nextAvailable}</p>
          </div>
        </div>

        <div className="bg-surface rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Clock" size={16} className="text-primary" />
            <span className="text-sm font-medium text-text-secondary">Working Hours</span>
          </div>
          <p className="text-sm font-medium text-foreground">{availabilityData.workingHours}</p>
          <p className="text-xs text-text-secondary">East Africa Time (GMT+3)</p>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityStatus;