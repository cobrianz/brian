import React from "react";
import { motion } from "framer-motion";
import Button from "../../../components/ui/Button";
import BrowserWindowMockup from "./BrowserWindowMockup";

const projectData = [
  {
    id: 1,
    title: "Edubora Management System",
    category: "Education Platform",
    description:
      "Edubora is a school operations product built for real academic and administrative workflows. It supports role-based access, structured dashboards, and reliable day-to-day management for staff, students, and guardians.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    metrics: ["1.2k users", "MVP launched in 3 weeks", "31% faster admin tasks"],
    liveUrl: "https://edubora.netlify.app/",
    githubUrl: "https://github.com/cobrianz/edubora",
    mockupType: "dashboard",
  },
  {
    id: 2,
    title: "IB Bank Liberia",
    category: "Banking Experience",
    description:
      "A customer-facing banking platform focused on trust, account clarity, and responsive flows across devices. The product balances clear visual hierarchy with practical transaction and account management journeys.",
    stack: ["React", "TypeScript", "Express", "MongoDB"],
    metrics: ["32% more conversions", "4 core flows redesigned", "99.9% uptime target"],
    liveUrl: "https://ib-bankliberia.netlify.app/",
    githubUrl: "https://github.com/cobrianz/Ib-bank",
    mockupType: "landing",
  },
  {
    id: 3,
    title: "Actinova AI Tutor",
    category: "AI Learning Product",
    description:
      "An AI-assisted tutoring product built around guided learning, lightweight interaction, and a modern visual system. The experience was shaped to feel approachable while still carrying clear structure and depth.",
    stack: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    metrics: ["MVP launched in 2 weeks", "5 guided learning flows", "Higher session depth"],
    liveUrl: "https://actinovaraitutor.netlify.app/",
    githubUrl: "https://github.com/cobrianz/actinova-ai-tutor",
    mockupType: "mobile",
  },
  {
    id: 4,
    title: "Analytics Insight Panel",
    category: "Internal Tool",
    description:
      "A data-heavy internal interface for surfacing activity, performance, and reporting signals in one place. The design direction prioritized fast scanning and visual clarity without crowding the screen.",
    stack: ["Next.js", "TypeScript", "Recharts", "Supabase"],
    metrics: ["42% faster reporting", "8 analytics modules", "Live KPI monitoring"],
    liveUrl: "https://example.com/analytics-panel",
    githubUrl: "https://github.com/cobrianz",
    mockupType: "analytics",
  },
  {
    id: 5,
    title: "GreenCart Storefront",
    category: "E-commerce Build",
    description:
      "A storefront concept built to test lightweight commerce flows, product discovery, and checkout clarity. The interface uses soft surfaces and structured content to keep browsing and buying friction low.",
    stack: ["React", "TypeScript", "Stripe", "Framer Motion"],
    metrics: ["28% checkout lift", "3-step purchase flow", "Responsive from day one"],
    liveUrl: "https://example.com/greencart",
    githubUrl: "https://github.com/cobrianz",
    mockupType: "storefront",
  },
];

const PortfolioProjectsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#fbfffb] py-16 lg:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[8%] top-24 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[10%] top-[30%] h-48 w-48 rounded-full bg-[#D2D7F8]/60 blur-3xl" />
        <div className="absolute bottom-24 left-[18%] h-36 w-36 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">Projects</p>
          <h1 className="mt-4 text-4xl font-bold text-foreground lg:text-5xl">Selected Projects</h1>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            A curated sequence of real products, experiments, and client-style builds. Each one is presented as a compact case study with the core story, stack, outcomes, and a visual product preview.
          </p>
        </div>

        <div className="mt-16 space-y-16 lg:space-y-20">
          {projectData.map((project, index) => {
            const reverse = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
                className={`flex flex-col gap-10 lg:items-center ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 24 : -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.08 }}
                  className="w-full lg:w-[46%]"
                >
                  <div className="rounded-[24px] border border-white/50 bg-white/68 p-7 backdrop-blur-xl">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">
                      Case Study {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl">{project.title}</h2>
                    <p className="mt-3 text-sm font-medium text-text-secondary">{project.category}</p>
                    <p className="mt-6 text-base leading-8 text-text-secondary">{project.description}</p>

                    <motion.div
                      className="mt-6 flex flex-wrap gap-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.05 } },
                      }}
                    >
                      {project.stack.map((item) => (
                        <motion.span
                          key={item}
                          variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                          className="rounded-full border border-white/40 bg-white/70 px-3 py-1 text-sm text-foreground"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div
                      className="mt-6 flex flex-wrap gap-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
                      }}
                    >
                      {project.metrics.map((item) => (
                        <motion.span
                          key={item}
                          variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                          className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </motion.div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        <Button className="rounded-[18px]" iconName="ExternalLink" iconPosition="right">
                          View Project
                        </Button>
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        <Button variant="outline" className="rounded-[18px] bg-white/70" iconName="Github" iconPosition="left">
                          Source Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: reverse ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.12 }}
                  className="w-full lg:w-[54%]"
                >
                  <BrowserWindowMockup type={project.mockupType} title={project.title} />
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjectsSection;
