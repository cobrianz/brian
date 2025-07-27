import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";

// Page components
import Homepage from "pages/homepage";
import Contact from "pages/contact";
import Services from "pages/services";
import Projects from "pages/projects";
import Resume from "pages/resume";
import About from "pages/about";
import NotFound from "pages/NotFound";
import ErrorBoundary from "components/ErrorBoundary";


// Floating Contact Button
import FloatingContactButton from "components/FloatingContactButton";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />

        {/* Floating Button placed outside routes to appear globally */}
        <FloatingContactButton />

        <RouterRoutes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
