import React, { useEffect } from "react";
import Header from "../../components/ui/Header";
import Button from "../../components/ui/Button";
import resume from "../../assets/Brian_Cheruiyot_Resume.pdf";

const experience = [
  {
    role: "Fullstack Developer",
    company: "Freelance Web Developer",
    period: "2022 – Present",
    points: [
      "Developed and delivered custom web applications for clients using modern frameworks and tools.",
      "Built responsive applications with the MERN stack and Tailwind CSS, consistently meeting client specifications.",
      "Collaborated with clients to gather requirements, implement features, and ensure timely project delivery.",
    ],
  },
  {
    role: "ICT Intern",
    company: "Judiciary Law Courts",
    period: "Jan 2024 – Apr 2024",
    points: [
      "Supported IT operations and system maintenance in a professional environment.",
      "Assisted in software installations, application deployment, and system troubleshooting.",
      "Worked with IT teams to resolve technical issues, enhancing system reliability and user satisfaction.",
    ],
  },
];

const projectHighlights = [
  {
    name: "Actirova AI Tutor",
    detail: "AI-driven educational platform using React, Tailwind CSS, LangChain, Gemini API, OpenAI GPT. Personalizes learning by analyzing individual student needs and learning styles.",
  },
  {
    name: "Edubora Management System",
    detail: "Comprehensive educational platform with automated student enrollment, course scheduling, grade tracking, and communication tools using MERN Stack.",
  },
  {
    name: "Medcore Hospital System",
    detail: "Scalable hospital management system for patient care, appointment scheduling, and medical record management using MERN Stack, TypeScript, Tailwind CSS.",
  },
  {
    name: "Personal Portfolio Website",
    detail: "Portfolio website using React, Tailwind CSS, Framer Motion, TypeScript, Vite showcasing design projects and coding samples.",
  },
];

const skillGroups = [
  {
    label: "Languages",
    value: "Java, Python, JavaScript, TypeScript, PHP",
  },
  {
    label: "Frontend",
    value: "React, Next.js, Tailwind CSS, Material UI, Framer Motion",
  },
  {
    label: "Backend",
    value: "Node.js, Express.js, Laravel, Django, RESTful APIs",
  },
  {
    label: "Database",
    value: "MySQL, MongoDB, PostgreSQL",
  },
  {
    label: "Tools & Cloud",
    value: "Git, GitHub, VS Code, Google Cloud, AWS (Foundational)",
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

          <section className="relative overflow-hidden rounded-[20px] border border-border bg-card p-8 md:p-10">
            <header className="border-b border-border pb-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-foreground">Brian Kipkemoi Cheruiyot</h1>
                  <p className="mt-2 text-lg font-medium text-primary">Fullstack Developer</p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary">
                    Results-driven Computer Science graduate from Maseno University specializing in software engineering, with expertise in scalable web and cross-platform applications and AI solutions.
                  </p>
                </div>

                <div className="space-y-2 text-sm text-text-secondary md:text-right">
                  <div>Nairobi, Kenya</div>
                  <div>briancheruiyot022@gmail.com</div>
                  <div>+254 702 764 907</div>
                  <div>briankcheruiyot.netlify.app</div>
                  <div>linkedin.com/in/cheruiyotbrian</div>
                  <div>github.com/cobrianz</div>
                </div>
              </div>
            </header>

            <div className="relative grid gap-10 pt-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-8">
                <section>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Professional Summary</h2>
                  <p className="mt-4 text-sm leading-8 text-foreground">
                    Results-driven Computer Science graduate from Maseno University specializing in software engineering, with expertise in scalable web and cross-platform applications and AI solutions. Proficient in the MERN stack (MongoDB, Express.js, React, Node.js), JavaScript, and Python for dynamic user interfaces. Experienced in designing RESTful APIs, conducting unit testing, and applying agile methodologies to enhance project workflows. Completed freelance projects and an ICT internship, collaborating with cross-functional teams to deliver innovative software solutions. Recognized for strong analytical and problem-solving skills, ready to contribute to forward-thinking software development teams.
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
                      <div key={item} className="rounded-[14px] border border-border bg-surface px-4 py-3 text-sm text-foreground">
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Education</h2>
                  <div className="mt-5 text-sm leading-7 text-foreground">
                    <p className="font-semibold">Bachelor of Science in Computer Science</p>
                    <p className="text-text-secondary">Maseno University | Sep 2021 - Nov 2025</p>
                  </div>
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
