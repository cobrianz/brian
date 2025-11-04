import React, { useState } from "react";
import Icon from "../../../components/AppIcon";

const ProfessionalExperience = ({ isInteractiveView }) => {
  const [expandedJob, setExpandedJob] = useState(null);

  const experiences = [
    {
      id: 1,
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      duration: "2023 - Present",
      type: "Freelance",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      achievements: [
        "Developed and deployed 5+ custom web applications for clients, achieving 95% client satisfaction",
        "Reduced project delivery time by 25% through efficient requirement gathering and agile practices",
        "Built responsive, scalable applications using the MERN stack, improving user engagement by 30%",
        "Integrated RESTful APIs and modern UI frameworks, enhancing application functionality",
        "Maintained high code quality with unit testing, reducing post-deployment bugs by 40%",
      ],
      responsibilities: [
        "Collaborate with clients to define project requirements and deliver tailored solutions",
        "Design and develop full-stack web applications using React, Node.js, and MongoDB",
        "Implement responsive designs with Tailwind CSS for cross-device compatibility",
        "Conduct thorough testing and debugging to ensure robust application performance",
        "Manage project timelines and communicate progress updates to clients",
      ],
    },
    {
      id: 2,
      title: "ICT Intern",
      company: "Judiciary Law Courts",
      location: "Nakuru, Kenya",
      duration: "Jan 2024 - Apr 2024",
      type: "Internship",
      technologies: ["JavaScript", "PHP", "MySQL", "HTML5", "CSS3"],
      achievements: [
        "Assisted in deploying 3 internal applications, improving court system efficiency by 20%",
        "Resolved 50+ technical issues, increasing system uptime by 15%",
        "Supported software installations across 10+ workstations, ensuring seamless operations",
        "Collaborated with IT team to streamline maintenance processes, reducing downtime by 10%",
        "Contributed to user training sessions, enhancing staff adoption of new systems",
      ],
      responsibilities: [
        "Assist in software installations and system maintenance for court applications",
        "Diagnose and resolve technical issues in collaboration with IT teams",
        "Support deployment of internal applications and ensure system reliability",
        "Perform routine system updates and backups to maintain data integrity",
        "Document technical processes and assist in user support tasks",
      ],
    },
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
        <h2 className="text-xl font-semibold text-foreground">
          Professional Experience
        </h2>
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
                <Icon
                  name="Building"
                  size={20}
                  className="text-primary-foreground"
                />
              </div>

              {/* Job content */}
              <div className="flex-1">
                <div
                  className={`p-4 rounded-lg bg-surface transition-all duration-300 ${
                    isInteractiveView ? "hover:bg-muted cursor-pointer" : ""
                  }`}
                  onClick={() => toggleExpanded(job.id)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {job.title}
                      </h3>
                      <p className="text-primary font-medium">{job.company}</p>
                      <p className="text-sm text-text-secondary">
                        {job.location}
                      </p>
                    </div>
                    <div className="text-right mt-2 lg:mt-0">
                      <p className="text-sm font-medium text-foreground">
                        {job.duration}
                      </p>
                      <p className="text-xs text-text-secondary">{job.type}</p>
                      {isInteractiveView && (
                        <Icon
                          name={
                            expandedJob === job.id ? "ChevronUp" : "ChevronDown"
                          }
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
                    <h4 className="text-sm font-medium text-foreground">
                      Key Achievements:
                    </h4>
                    {job.achievements
                      .slice(
                        0,
                        isInteractiveView && expandedJob === job.id
                          ? job.achievements.length
                          : 3
                      )
                      .map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-text-secondary">
                            {achievement}
                          </p>
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
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Responsibilities:
                      </h4>
                      <div className="space-y-2">
                        {job.responsibilities.map(
                          (responsibility, respIndex) => (
                            <div
                              key={respIndex}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-sm text-text-secondary">
                                {responsibility}
                              </p>
                            </div>
                          )
                        )}
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
