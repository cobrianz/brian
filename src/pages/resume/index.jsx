import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ResumeHeader from './components/ResumeHeader';
import MetricsSidebar from './components/MetricsSidebar';
import ProfessionalSummary from './components/ProfessionalSummary';
import TechnicalSkills from './components/TechnicalSkills';
import ProfessionalExperience from './components/ProfessionalExperience';
import EducationCertifications from './components/EducationCertifications';
import NotableProjects from './components/NotableProjects';
import resume from "../../assets/Brian_Cheruiyot_Resume.pdf"

const ResumeATSOptimizedCareerDocumentation = () => {
  const [isInteractiveView, setIsInteractiveView] = useState(true);
  const [filteredSkill, setFilteredSkill] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const handleDownloadPDF = () => {
  const link = document.createElement("a");
  link.href = resume;
  link.download = "Brian_Cheruiyot_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const handleDownloadText = () => {
    // Mock TXT download functionality
    const resumeText = `
BRIAN CHERUIYOT
Full-Stack Developer
Nairobi, Kenya | Available for Remote Work
Email: briancheruiyot022@gmail.com | Phone: +254 702 764 907
LinkedIn: linkedin.com/in/briancheruiyot | GitHub: github.com/briancheruiyot

PROFESSIONAL SUMMARY
Passionate Full-Stack Developer with 4+ years of experience building scalable web applications using React.js, Node.js, and modern JavaScript technologies. Proven track record of delivering high-performance solutions that drive business growth and enhance user experience.

TECHNICAL SKILLS
Frontend: React.js, JavaScript/ES6+, TypeScript, HTML5/CSS3, Tailwind CSS, Next.js
Backend: Node.js, Express.js, MongoDB, PostgreSQL, REST APIs, GraphQL
Tools & DevOps: Git/GitHub, Docker, AWS, Vercel, Jest/Testing, Webpack/Vite

PROFESSIONAL EXPERIENCE
Senior Full-Stack Developer | TechFlow Solutions | Jan 2023 - Present
- Led development of 8 web applications serving 10,000+ users with 99.9% uptime
- Improved application performance by 40% through code optimization
- Mentored 3 junior developers and established coding standards

Full-Stack Developer | Digital Innovations Ltd | Mar 2022 - Dec 2022
- Developed 12 client projects with average 95% client satisfaction rating
- Reduced bug reports by 50% through comprehensive testing implementation

Junior Web Developer | StartupHub Kenya | Jun 2021 - Feb 2022
- Built 5 responsive websites from scratch with modern design principles
- Improved website loading speed by 45% through optimization

EDUCATION
Bachelor of Science in Computer Science |Maseno University | 2021 - 2025
Second Class Honours (Upper Division)

CERTIFICATIONS
- AWS Certified Developer - Associate (March 2024)
- React Developer Certification - Meta (January 2024)
- Node.js Application Development - IBM (November 2023)
- JavaScript Algorithms and Data Structures - freeCodeCamp (August 2023)
`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Brian_Cheruiyot_Resume_ATS.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };

  const handleToggleView = () => {
    setIsInteractiveView(!isInteractiveView);
    setFilteredSkill(null); // Clear any skill filters when switching views
  };

  const handleSkillFilter = (skillName) => {
    setFilteredSkill(skillName);
    // Scroll to projects section
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Resume - ATS-Optimized Career Documentation | Brian Cheruiyot</title>
        <meta 
          name="description" 
          content="Comprehensive resume and career documentation for Brian Cheruiyot, Full-Stack Developer. Download PDF, ATS-compatible text version, or explore interactive resume with detailed project information." 
        />
        <meta name="keywords" content="Brian Cheruiyot, Resume, Full-Stack Developer, React Developer, Node.js, JavaScript, Career Documentation, ATS Resume" />
        <meta property="og:title" content="Resume - ATS-Optimized Career Documentation | Brian Cheruiyot" />
        <meta property="og:description" content="Explore Brian Cheruiyot's professional resume with interactive features, downloadable formats, and comprehensive career documentation." />
        <meta property="og:type" content="profile" />
        <link rel="canonical" href="/resume-ats-optimized-career-documentation" />
      </Helmet>

      <div className="min-h-screen bg-background pt-20 pb-16">
        <Header />
        
        <main className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Resume Header */}
            <ResumeHeader
              onDownloadPDF={handleDownloadPDF}
              onDownloadText={handleDownloadText}
              onToggleView={handleToggleView}
              isInteractiveView={isInteractiveView}
            />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-8">
                {/* Professional Summary */}
                <ProfessionalSummary isInteractiveView={isInteractiveView} />

                {/* Technical Skills */}
                <TechnicalSkills 
                  isInteractiveView={isInteractiveView}
                  onSkillFilter={handleSkillFilter}
                />

                {/* Professional Experience */}
                <ProfessionalExperience isInteractiveView={isInteractiveView} />

                {/* Education & Certifications */}
                <EducationCertifications isInteractiveView={isInteractiveView} />

                {/* Notable Projects */}
                <div id="projects-section">
                  <NotableProjects 
                    isInteractiveView={isInteractiveView}
                    filteredSkill={filteredSkill}
                  />
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <MetricsSidebar />
              </div>
            </div>

            {/* ATS-Optimized Footer */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="text-center">
                <p className="text-sm text-text-secondary mb-4">
                  This resume is optimized for Applicant Tracking Systems (ATS) and human readers
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-text-secondary">
                  <span>Last Updated: July 2025</span>
                  <span>•</span>
                  <span>Available for Remote Work</span>
                  <span>•</span>
                  <span>Open to Relocation</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ResumeATSOptimizedCareerDocumentation;