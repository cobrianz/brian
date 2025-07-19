import React from 'react';

import Button from '../../../components/ui/Button';

const ResumeHeader = ({ onDownloadPDF, onDownloadText, onToggleView, isInteractiveView }) => {
  return (
    <div className="bg-card rounded-xl p-6 mb-8 shadow-premium">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center shadow-brand">
            <span className="text-white font-bold text-2xl">BC</span>
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Brian Cheruiyot</h1>
            <p className="text-lg text-primary font-medium">Full-Stack Developer</p>
            <p className="text-sm text-text-secondary">Nairobi, Kenya • Available for Remote Work</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={onToggleView}
            iconName={isInteractiveView ? "FileText" : "Monitor"}
            iconPosition="left"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {isInteractiveView ? "ATS View" : "Interactive View"}
          </Button>
          
          <Button
            variant="secondary"
            onClick={onDownloadText}
            iconName="Download"
            iconPosition="left"
          >
            Download TXT
          </Button>
          
          <Button
            variant="default"
            onClick={onDownloadPDF}
            iconName="Download"
            iconPosition="left"
            className="bg-cta-primary hover:bg-cta-primary/90"
          >
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;