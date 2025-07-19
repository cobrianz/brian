import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProfessionalExperience = ({ isInteractiveView }) => {
  const [expandedJob, setExpandedJob] = useState(null);

  const experiences = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      company: "TechFlow Solutions",
      location: "Nairobi, Kenya (Remote)",
      duration: "Jan 2023 - Present",
      type: "Full-time",
      technologies: ["React.js", "Node.js", "MongoDB", "AWS", "TypeScript"],
      achievements: [
        "Led development of 8 web applications serving 10,000+ users with 99.9% uptime",
        "Improved application performance by 40% through code optimization and caching strategies",
        "Mentored 3 junior developers and established coding standards for the team",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with cross-functional teams to deliver projects 20% ahead of schedule"
      ],
      responsibilities: [
        "Design and develop scalable web applications using React.js and Node.js",
        "Architect database schemas and optimize queries for improved performance",
        "Implement responsive designs and ensure cross-browser compatibility",
        "Conduct code reviews and maintain high code quality standards",
        "Participate in agile ceremonies and contribute to sprint planning"
      ]
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "Digital Innovations Ltd",
      location: "Nairobi, Kenya",
      duration: "Mar 2022 - Dec 2022",
      type: "Full-time",
      technologies: ["React.js", "Express.js", "PostgreSQL", "Docker", "JavaScript"],
      achievements: [
        "Developed 12 client projects with average 95% client satisfaction rating",
        "Reduced bug reports by 50% through implementation of comprehensive testing",
        "Optimized database queries resulting in 35% faster page load times",
        "Successfully migrated legacy applications to modern tech stack",
        "Contributed to open-source projects gaining 500+ GitHub stars"
      ],
      responsibilities: [
        "Build and maintain web applications for diverse client requirements",
        "Collaborate with designers to implement pixel-perfect UI/UX designs",
        "Integrate third-party APIs and services for enhanced functionality",
        "Debug and resolve technical issues in production environments",
        "Document code and create technical specifications for projects"
      ]
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "StartupHub Kenya",
      location: "Nairobi, Kenya",
      duration: "Jun 2021 - Feb 2022",
      type: "Full-time",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      achievements: [
        "Built 5 responsive websites from scratch with modern design principles",
        "Improved website loading speed by 45% through image optimization",
        "Learned React.js and Node.js through self-study and internal training",
        "Contributed to team knowledge sharing sessions on web development trends",
        "Received \'Rising Star\' award for exceptional learning and contribution"
      ],
      responsibilities: [
        "Develop responsive websites using HTML, CSS, and JavaScript",
        "Assist senior developers in building complex web applications",
        "Perform website maintenance and content updates for clients",
        "Test websites across different browsers and devices",
        "Learn new technologies and frameworks to expand skill set"
      ]
    }
  ];

  const toggleExpanded = (jobId) => {
    if (isInteractiveView) {
      setExpandedJob(expandedJob === jobId ? null : jobId);
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-premium">
      <div className="flex items-center mb-6">
        <Icon name="Briefcase" size={20} className="mr-2 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Professional Experience</h2>
      </div>
      
      <div className="space-y-6">
        {experiences.map((job, index) => (
          <div key={job.id} className="relative">
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-full bg-border"></div>
            )}
            
            <div className="flex space-x-4">
              {/* Timeline dot */}
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-glow">
                <Icon name="Building" size={20} className="text-primary-foreground" />
              </div>
              
              {/* Job content */}
              <div className="flex-1">
                <div 
                  className={`p-4 rounded-lg bg-surface transition-all duration-300 ${
                    isInteractiveView ? 'hover:bg-muted cursor-pointer' : ''
                  }`}
                  onClick={() => toggleExpanded(job.id)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                      <p className="text-sm text-text-secondary">{job.location}</p>
                    </div>
                    <div className="text-right mt-2 lg:mt-0">
                      <p className="text-sm font-medium text-foreground">{job.duration}</p>
                      <p className="text-xs text-text-secondary">{job.type}</p>
                      {isInteractiveView && (
                        <Icon 
                          name={expandedJob === job.id ? "ChevronUp" : "ChevronDown"} 
                          size={16} 
                          className="text-text-secondary mt-1 ml-auto" 
                        />
                      )}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {job.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-xs font-medium text-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Key achievements - always visible */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Key Achievements:</h4>
                    {job.achievements.slice(0, isInteractiveView && expandedJob === job.id ? job.achievements.length : 3).map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-text-secondary">{achievement}</p>
                      </div>
                    ))}
                    
                    {!isInteractiveView && job.achievements.length > 3 && (
                      <p className="text-xs text-text-secondary italic">
                        +{job.achievements.length - 3} more achievements
                      </p>
                    )}
                  </div>
                  
                  {/* Expanded content - only in interactive view */}
                  {isInteractiveView && expandedJob === job.id && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <h4 className="text-sm font-medium text-foreground mb-2">Responsibilities:</h4>
                      <div className="space-y-2">
                        {job.responsibilities.map((responsibility, respIndex) => (
                          <div key={respIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-text-secondary">{responsibility}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalExperience;