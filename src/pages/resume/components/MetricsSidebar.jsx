import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricsSidebar = () => {
  const metrics = [
    {
      icon: "Calendar",
      label: "Experience",
      value: "4+",
      unit: "Years",
      color: "text-primary"
    },
    {
      icon: "Briefcase",
      label: "Projects",
      value: "25+",
      unit: "Completed",
      color: "text-success"
    },
    {
      icon: "Code",
      label: "Technologies",
      value: "15+",
      unit: "Mastered",
      color: "text-accent"
    },
    {
      icon: "Star",
      label: "Client Rating",
      value: "4.9",
      unit: "/5.0",
      color: "text-warning"
    },
    {
      icon: "Users",
      label: "Team Projects",
      value: "12+",
      unit: "Led",
      color: "text-conversion-accent"
    },
    {
      icon: "Award",
      label: "Certifications",
      value: "8",
      unit: "Active",
      color: "text-cta-primary"
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-premium sticky top-24">
      <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
        <Icon name="BarChart3" size={20} className="mr-2 text-primary" />
        Key Metrics
      </h3>
      
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface transition-colors duration-300">
            <div className={`w-10 h-10 rounded-lg bg-surface flex items-center justify-center ${metric.color}`}>
              <Icon name={metric.icon} size={18} />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline space-x-1">
                <span className={`text-xl font-bold ${metric.color}`}>{metric.value}</span>
                <span className="text-sm text-text-secondary">{metric.unit}</span>
              </div>
              <p className="text-sm text-text-secondary">{metric.label}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-border">
        <div className="text-center">
          <p className="text-sm text-text-secondary mb-2">Last Updated</p>
          <p className="text-sm font-medium text-foreground">July 2025</p>
        </div>
      </div>
    </div>
  );
};

export default MetricsSidebar;