import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalSkills = ({ isInteractiveView, onSkillFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: 'Monitor',
      skills: [
        { name: 'React.js', level: 95, experience: '4 years', projects: 20 },
        { name: 'JavaScript/ES6+', level: 92, experience: '4 years', projects: 25 },
        { name: 'TypeScript', level: 88, experience: '3 years', projects: 15 },
        { name: 'HTML5/CSS3', level: 95, experience: '4 years', projects: 25 },
        { name: 'Tailwind CSS', level: 90, experience: '3 years', projects: 18 },
        { name: 'Next.js', level: 85, experience: '2 years', projects: 12 }
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: 'Server',
      skills: [
        { name: 'Node.js', level: 90, experience: '4 years', projects: 22 },
        { name: 'Express.js', level: 88, experience: '3 years', projects: 18 },
        { name: 'MongoDB', level: 85, experience: '3 years', projects: 16 },
        { name: 'PostgreSQL', level: 82, experience: '2 years', projects: 10 },
        { name: 'REST APIs', level: 92, experience: '4 years', projects: 24 },
        { name: 'GraphQL', level: 75, experience: '1 year', projects: 6 }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & DevOps',
      icon: 'Settings',
      skills: [
        { name: 'Git/GitHub', level: 95, experience: '4 years', projects: 25 },
        { name: 'Docker', level: 80, experience: '2 years', projects: 12 },
        { name: 'AWS', level: 78, experience: '2 years', projects: 10 },
        { name: 'Vercel', level: 85, experience: '3 years', projects: 15 },
        { name: 'Jest/Testing', level: 82, experience: '2 years', projects: 14 },
        { name: 'Webpack/Vite', level: 80, experience: '2 years', projects: 16 }
      ]
    }
  ];

  const handleSkillClick = (skillName) => {
    if (isInteractiveView && onSkillFilter) {
      onSkillFilter(skillName);
    }
  };

  const filteredCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="bg-card rounded-xl p-6 shadow-premium">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Icon name="Code" size={20} className="mr-2 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Technical Skills</h2>
        </div>
        
        {isInteractiveView && (
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-lg text-sm transition-colors duration-300 ${
                selectedCategory === 'all' ?'bg-primary text-primary-foreground' :'bg-surface text-text-secondary hover:text-foreground'
              }`}
            >
              All
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1 rounded-lg text-sm transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-surface text-text-secondary hover:text-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <div className="space-y-6">
        {filteredCategories.map((category) => (
          <div key={category.id}>
            <div className="flex items-center mb-4">
              <Icon name={category.icon} size={18} className="mr-2 text-accent" />
              <h3 className="text-lg font-medium text-foreground">{category.name}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  onClick={() => handleSkillClick(skill.name)}
                  className={`p-4 rounded-lg bg-surface transition-all duration-300 ${
                    isInteractiveView 
                      ? 'hover:bg-muted hover:scale-105 cursor-pointer hover:shadow-glow' 
                      : ''
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-brand h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  
                  {isInteractiveView && (
                    <div className="flex justify-between text-xs text-text-secondary">
                      <span>{skill.experience}</span>
                      <span>{skill.projects} projects</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;