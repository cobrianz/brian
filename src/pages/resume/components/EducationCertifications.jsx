import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const EducationCertifications = ({ isInteractiveView }) => {
  const [activeTab, setActiveTab] = useState('education');

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "Maseno University",
      location: "Nairobi, Kenya",
      duration: "2021 - 2025",
      grade: "Second Class Honours (Upper Division)",
      relevantCourses: [
        "Data Structures and Algorithms",
        "Software Engineering",
        "Database Systems",
        "Web Development",
        "Computer Networks",
        "Object-Oriented Programming"
      ],
      projects: [
        "Final Year Project: E-commerce Platform using React and Node.js",
        "Database Management System for Library Operations",
        "Mobile App Development using React Native"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "March 2024",
      expiry: "March 2027",
      credentialId: "AWS-CDA-2024-BC789",
      skills: ["AWS Lambda", "DynamoDB", "S3", "CloudFormation", "API Gateway"],
      status: "Active"
    },
    {
      id: 2,
      name: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "January 2024",
      expiry: "January 2026",
      credentialId: "META-REACT-2024-456",
      skills: ["React.js", "Redux", "React Router", "Testing", "Performance"],
      status: "Active"
    },
    {
      id: 3,
      name: "Node.js Application Development",
      issuer: "IBM",
      date: "November 2023",
      expiry: "November 2025",
      credentialId: "IBM-NODE-2023-123",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"],
      status: "Active"
    },
    {
      id: 4,
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "August 2023",
      expiry: "Lifetime",
      credentialId: "FCC-JS-2023-789",
      skills: ["JavaScript", "ES6+", "Algorithms", "Data Structures", "Problem Solving"],
      status: "Active"
    },
    {
      id: 5,
      name: "MongoDB Developer Path",
      issuer: "MongoDB University",
      date: "June 2023",
      expiry: "June 2025",
      credentialId: "MONGO-DEV-2023-456",
      skills: ["MongoDB", "Aggregation", "Indexing", "Schema Design", "Performance"],
      status: "Active"
    },
    {
      id: 6,
      name: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "April 2023",
      expiry: "April 2025",
      credentialId: "DOCKER-CA-2023-321",
      skills: ["Docker", "Containerization", "Docker Compose", "Orchestration", "DevOps"],
      status: "Active"
    },
    {
      id: 7,
      name: "Git and GitHub Essentials",
      issuer: "GitHub",
      date: "February 2023",
      expiry: "Lifetime",
      credentialId: "GITHUB-ESS-2023-654",
      skills: ["Git", "GitHub", "Version Control", "Collaboration", "CI/CD"],
      status: "Active"
    },
    {
      id: 8,
      name: "Agile Development Practices",
      issuer: "Scrum Alliance",
      date: "December 2022",
      expiry: "December 2024",
      credentialId: "SCRUM-ADP-2022-987",
      skills: ["Scrum", "Agile", "Sprint Planning", "Team Collaboration", "Project Management"],
      status: "Active"
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-premium">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Icon name="GraduationCap" size={20} className="mr-2 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Education & Certifications</h2>
        </div>
        
        {isInteractiveView && (
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 rounded-lg text-sm transition-colors duration-300 ${
                activeTab === 'education' ?'bg-primary text-primary-foreground' :'bg-surface text-text-secondary hover:text-foreground'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-4 py-2 rounded-lg text-sm transition-colors duration-300 ${
                activeTab === 'certifications'
                  ? 'bg-primary text-primary-foreground' :'bg-surface text-text-secondary hover:text-foreground'
              }`}
            >
              Certifications
            </button>
          </div>
        )}
      </div>
      
      {/* Education Section */}
      {(!isInteractiveView || activeTab === 'education') && (
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-foreground flex items-center">
            <Icon name="School" size={18} className="mr-2 text-accent" />
            Education
          </h3>
          
          {education.map((edu) => (
            <div key={edu.id} className="p-4 rounded-lg bg-surface">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-sm text-text-secondary">{edu.location}</p>
                </div>
                <div className="text-right mt-2 lg:mt-0">
                  <p className="text-sm font-medium text-foreground">{edu.duration}</p>
                  <p className="text-sm text-success">{edu.grade}</p>
                </div>
              </div>
              
              {isInteractiveView && (
                <>
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-foreground mb-2">Relevant Courses:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-muted text-xs font-medium text-foreground rounded-md"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-2">Notable Projects:</h5>
                    <div className="space-y-1">
                      {edu.projects.map((project, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-text-secondary">{project}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
      
      {/* Certifications Section */}
      {(!isInteractiveView || activeTab === 'certifications') && (
        <div className={`space-y-6 ${!isInteractiveView && 'mt-8'}`}>
          <h3 className="text-lg font-medium text-foreground flex items-center">
            <Icon name="Award" size={18} className="mr-2 text-accent" />
            Certifications ({certifications.length} Active)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="p-4 rounded-lg bg-surface hover:bg-muted transition-colors duration-300">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm">{cert.name}</h4>
                    <p className="text-primary text-sm font-medium">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-xs text-success">{cert.status}</span>
                  </div>
                </div>
                
                <div className="text-xs text-text-secondary mb-3">
                  <p>Issued: {cert.date}</p>
                  <p>Expires: {cert.expiry}</p>
                  {isInteractiveView && (
                    <p className="font-mono">ID: {cert.credentialId}</p>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, isInteractiveView ? cert.skills.length : 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 bg-muted text-xs text-foreground rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                  {!isInteractiveView && cert.skills.length > 3 && (
                    <span className="px-2 py-0.5 text-xs text-text-secondary">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationCertifications;