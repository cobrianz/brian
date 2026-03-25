import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import Button from "../../components/ui/Button";
import Icon from "../../components/AppIcon";

const featuredProjects = [
  {
    title: "Edubora Management System",
    summary:
      "A school management platform designed around real administrative workflows, role-based access, and reliable day-to-day operations.",
    stack: ["Next.js", "Tailwind CSS", "Django REST API", "MongoDB"],
    liveUrl: "https://edubora.netlify.app/",
    codeUrl: "https://github.com/cobrianz/edubora",
  },
  {
    title: "IB Bank Liberia",
    summary:
      "A banking experience built for secure account flows, responsive interfaces, and clear customer interactions across devices.",
    stack: ["React", "TypeScript", "Node.js", "Express"],
    liveUrl: "https://ib-bankliberia.netlify.app/",
    codeUrl: "https://github.com/cobrianz/Ib-bank",
  },
  {
    title: "Actinova AI Tutor",
    summary:
      "An AI-powered learning product focused on usable interaction design, guided content, and modern frontend execution.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://actinovaraitutor.netlify.app/",
    codeUrl: "https://github.com/cobrianz/actinova-ai-tutor",
  },
];

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Brian Cheruiyot | Full-Stack Developer";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Brian Cheruiyot is a full-stack developer building polished React and Node.js products with a strong focus on usability, performance, and business value."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <HeroSection />

        <section className="relative overflow-hidden py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">Selected work</p>
                <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
                  Projects that show product range and implementation quality.
                </h2>
              </div>
              <Link to="/projects" className="text-sm font-medium text-primary">
                View all projects
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="portfolio-panel flex h-full flex-col p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-primary">
                      Featured
                    </span>
                    <Icon name="ArrowUpRight" size={18} className="text-text-secondary" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-foreground">{project.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-text-secondary">{project.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-background/75 px-3 py-1 text-sm text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-3">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <Button className="rounded-full" iconName="ExternalLink" iconPosition="right">
                        Live
                      </Button>
                    </a>
                    <a href={project.codeUrl} target="_blank" rel="noreferrer">
                      <Button variant="outline" className="rounded-full" iconName="Github" iconPosition="left">
                        Code
                      </Button>
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden pb-24 pt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[24px] border border-border bg-[#f4fff5] px-6 py-10 lg:px-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">Open to opportunities</p>
                  <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">If you need polished execution, strong frontend work, and dependable follow-through, let's talk.</h2>
                  <p className="mt-4 text-base leading-7 text-text-secondary">
                    Available for product teams, contract work, and roles where frontend quality matters.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="rounded-[18px] px-7"
                      iconName="MessageCircle"
                      iconPosition="left"
                    >
                      Start a conversation
                    </Button>
                  </Link>
                  <Link to="/resume">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-[18px] border-border bg-background/70 px-7 text-foreground hover:bg-background"
                    >
                      View resume
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
