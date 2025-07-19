import React from 'react';
import Icon from '../../../components/AppIcon';

const ProfessionalSummary = ({ isInteractiveView }) => {
  const keyHighlights = [
    "4+ years of full-stack development experience with React.js and Node.js",
    "Led development of 25+ web applications with 99.9% uptime",
    "Expertise in modern JavaScript, TypeScript, and cloud deployment",
    "Strong focus on performance optimization and user experience",
    "Experience with agile methodologies and cross-functional teams"
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-premium">
      <div className="flex items-center mb-4">
        <Icon name="User" size={20} className="mr-2 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Professional Summary</h2>
      </div>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-text-secondary leading-relaxed mb-4">
          Passionate Full-Stack Developer with 4+ years of experience building scalable web applications 
          using React.js, Node.js, and modern JavaScript technologies. Proven track record of delivering 
          high-performance solutions that drive business growth and enhance user experience. Strong 
          expertise in cloud deployment, database optimization, and agile development methodologies.
        </p>
        
        <p className="text-text-secondary leading-relaxed mb-6">
          Experienced in leading cross-functional teams and mentoring junior developers while maintaining 
          a focus on clean code, best practices, and continuous learning. Committed to creating 
          impact-driven solutions that solve real-world problems and deliver measurable results.
        </p>
        
        {isInteractiveView && (
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground mb-3">Key Highlights</h3>
            {keyHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-3 group">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                <p className="text-text-secondary group-hover:text-foreground transition-colors duration-300">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalSummary;