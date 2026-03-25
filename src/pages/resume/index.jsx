import React, { useEffect } from "react";
import Header from "../../components/ui/Header";
import Button from "../../components/ui/Button";
import resume from "../../assets/Brian_Cheruiyot_Resume.pdf";

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Independent Projects and Client Builds",
    period: "2023 - Present",
    points: [
      "Built and shipped modern web applications across education, fintech, AI, and product marketing use cases.",
      "Owned frontend implementation, application structure, API integration, and interface polish for portfolio and client-facing products.",
      "Focused on responsive UI, readable information hierarchy, and delivery quality that supports real business use.",
    ],
  },
  {
    role: "Frontend-Focused Product Developer",
    company: "Freelance and Product Work",
    period: "2021 - 2023",
    points: [
      "Designed and implemented product interfaces using React, Tailwind CSS, and component-driven workflows.",
      "Improved user flows, project presentation, and screen-level clarity across multiple product concepts and demos.",
      "Worked across both design-sensitive frontend tasks and practical backend support when needed.",
    ],
  },
];

const projectHighlights = [
  {
    name: "Edubora Management System",
    detail: "School management platform with role-based dashboards and structured administrative workflows.",
  },
  {
    name: "IB Bank Liberia",
    detail: "Responsive banking interface focused on trust, clarity, and secure account flows.",
  },
  {
    name: "Actinova AI Tutor",
    detail: "AI-assisted learning experience designed around guided lessons and clean product interaction.",
  },
];

const skillGroups = [
  {
    label: "Frontend",
    value: "React, Next.js, TypeScript, JavaScript, Tailwind CSS, responsive UI development",
  },
  {
    label: "Backend",
    value: "Node.js, Express, REST APIs, authentication, MongoDB, application integration",
  },
  {
    label: "Workflow",
    value: "Git, product implementation, component architecture, interface refinement, performance awareness",
  },
];

const ResumePage = () => {
  useEffect(() => {
    document.title = "Resume | Brian Cheruiyot";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <a href={resume} download>
              <Button className="rounded-[18px]" iconName="Download" iconPosition="left">
                Download PDF
              </Button>
            </a>
            <a href={resume} target="_blank" rel="noreferrer">
              <Button variant="outline" className="rounded-[18px]">
                Open PDF
              </Button>
            </a>
          </div>

          <section className="relative overflow-hidden rounded-[20px] border border-border bg-white p-8 md:p-10">
            <header className="border-b border-border pb-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-foreground">Brian Cheruiyot</h1>
                  <p className="mt-2 text-lg font-medium text-primary">Full-Stack Developer</p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary">
                    Full-stack developer with strong frontend execution and product-focused implementation skills. Builds modern web applications that prioritize clarity, responsiveness, and professional presentation.
                  </p>
                </div>

                <div className="space-y-2 text-sm text-text-secondary md:text-right">
                  <div>Nairobi, Kenya</div>
                  <div>briancheruiyot022@gmail.com</div>
                  <div>+254 702 764 907</div>
                  <div>github.com/cobrianz</div>
                </div>
              </div>
            </header>

            <div className="relative grid gap-10 pt-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-8">
                <section>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Professional Summary</h2>
                  <p className="mt-4 text-sm leading-8 text-foreground">
                    Product-minded developer experienced in building interfaces and application flows with React, Next.js, TypeScript, and Node.js. Strongest where clean frontend execution, dependable implementation, and polished delivery all matter. Comfortable working across UI architecture, integration tasks, and end-to-end product refinement.
                  </p>
                </section>

                <section>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Experience</h2>
                  <div className="mt-5 space-y-6">
                    {experience.map((item) => (
                      <article key={`${item.role}-${item.company}`} className="border-l border-primary/25 pl-5">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                            <p className="text-sm text-text-secondary">{item.company}</p>
                          </div>
                          <p className="text-sm text-text-secondary">{item.period}</p>
                        </div>
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-foreground">
                          {item.points.map((point) => (
                            <li key={point} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Selected Projects</h2>
                  <div className="mt-5 space-y-4">
                    {projectHighlights.map((project) => (
                      <article key={project.name}>
                        <h3 className="text-base font-semibold text-foreground">{project.name}</h3>
                        <p className="mt-1 text-sm leading-7 text-text-secondary">{project.detail}</p>
                      </article>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-8">
                <section>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Technical Skills</h2>
                  <div className="mt-5 space-y-4">
                    {skillGroups.map((group) => (
                      <div key={group.label}>
                        <h3 className="text-sm font-semibold text-foreground">{group.label}</h3>
                        <p className="mt-2 text-sm leading-7 text-text-secondary">{group.value}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Core Strengths</h2>
                  <div className="mt-5 space-y-3">
                    {[
                      "Frontend implementation",
                      "Component architecture",
                      "Responsive design execution",
                      "API integration",
                      "Product UI polish",
                      "Professional presentation",
                    ].map((item) => (
                      <div key={item} className="rounded-[14px] border border-border bg-[#f5fff6] px-4 py-3 text-sm text-foreground">
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Education</h2>
                  <div className="mt-5 text-sm leading-7 text-foreground">
                    <p className="font-semibold">Bachelor of Science in Computer Science</p>
                    <p className="text-text-secondary">Maseno University</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Work Preference</h2>
                  <p className="mt-5 text-sm leading-7 text-foreground">
                    Open to remote roles, contract work, and product teams that value clean execution and strong frontend quality.
                  </p>
                </section>
              </aside>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ResumePage;
