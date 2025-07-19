import React from 'react';
import Icon from '../../../components/AppIcon';

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/brian-cheruiyot',
      description: 'Professional networking & career updates',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-400/10'
    },
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/brian-cheruiyot',
      description: 'Code repositories & open source contributions',
      color: 'hover:text-gray-400',
      bgColor: 'hover:bg-gray-400/10'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/brian_cheruiyot',
      description: 'Tech insights & industry discussions',
      color: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-500/10'
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      url: 'https://instagram.com/brian.codes',
      description: 'Behind-the-scenes & tech lifestyle',
      color: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-500/10'
    },
    {
      name: 'YouTube',
      icon: 'Youtube',
      url: 'https://youtube.com/@briancheruiyot',
      description: 'Coding tutorials & tech reviews',
      color: 'hover:text-red-500',
      bgColor: 'hover:bg-red-500/10'
    },
    {
      name: 'Discord',
      icon: 'MessageSquare',
      url: 'https://discord.gg/brian-dev',
      description: 'Community discussions & live coding',
      color: 'hover:text-indigo-500',
      bgColor: 'hover:bg-indigo-500/10'
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 lg:p-8 shadow-premium">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
          <Icon name="Share2" size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Social Connections</h3>
          <p className="text-sm text-text-secondary">Connect across platforms</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socialPlatforms.map((platform, index) => (
          <a
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-start space-x-4 p-4 rounded-lg border border-border transition-all duration-300 hover:border-primary/50 ${platform.bgColor}`}
          >
            <div className={`w-10 h-10 bg-surface rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${platform.color}`}>
              <Icon name={platform.icon} size={20} />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                {platform.name}
              </h4>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                {platform.description}
              </p>
            </div>
            <Icon 
              name="ExternalLink" 
              size={16} 
              className="text-text-secondary group-hover:text-primary transition-colors duration-300" 
            />
          </a>
        ))}
      </div>

      <div className="mt-6 p-4 bg-surface rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="MessageCircle" size={16} className="text-primary" />
          <span className="text-sm font-medium text-foreground">Preferred Platforms</span>
        </div>
        <div className="text-xs text-text-secondary space-y-1">
          <p>• <strong>LinkedIn:</strong> Professional inquiries & job opportunities</p>
          <p>• <strong>GitHub:</strong> Code reviews & technical discussions</p>
          <p>• <strong>Email:</strong> Formal project proposals & contracts</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;