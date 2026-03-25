import React, { useEffect } from "react";
import Header from "../../components/ui/Header";
import PortfolioProjectsSection from "./components/PortfolioProjectsSection";

const ProjectsPage = () => {
  useEffect(() => {
    document.title = "Projects | Brian Cheruiyot";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-24 pt-10">
        <PortfolioProjectsSection />
      </main>
    </div>
  );
};

export default ProjectsPage;
