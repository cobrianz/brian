import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../../components/ui/Header";
import Button from "../../components/ui/Button";
import Icon from "../../components/AppIcon";

const contactMethods = [
  {
    label: "Email",
    value: "briancheruiyot022@gmail.com",
    detail: "Best for roles, project briefs, and formal inquiries",
    href: "mailto:briancheruiyot022@gmail.com",
    icon: "Mail",
  },
  {
    label: "Phone",
    value: "+254 702 764 907",
    detail: "Available for direct discussion when scheduled in advance",
    href: "tel:+254702764907",
    icon: "Phone",
  },
  {
    label: "GitHub",
    value: "github.com/cobrianz",
    detail: "Code samples, portfolio projects, and implementation references",
    href: "https://github.com/cobrianz",
    icon: "Github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/brian-cheruiyot",
    detail: "Professional background and career-focused contact",
    href: "https://linkedin.com/in/brian-cheruiyot",
    icon: "Linkedin",
  },
];

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact | Brian Cheruiyot";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <section className="relative overflow-hidden rounded-[20px] border border-border bg-white p-8 md:p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="border-b border-border pb-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Contact</p>
                    <h1 className="mt-4 text-4xl font-bold text-foreground">Professional inquiries and project conversations.</h1>
                    <p className="mt-5 text-sm leading-8 text-text-secondary">
                      Available for remote roles, contract work, and product-focused frontend or full-stack opportunities. The best outreach is direct, clear, and specific about the role or project scope.
                    </p>
                  </div>

                  <div className="space-y-2 text-sm text-text-secondary lg:text-right">
                    <div>Nairobi, Kenya</div>
                    <div>Remote and contract friendly</div>
                    <div>Typical response: within 24 hours</div>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 pt-8 lg:grid-cols-[1.1fr_0.9fr]">
                <section>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Direct Contact Methods</h2>
                  <div className="mt-5 space-y-4">
                    {contactMethods.map((method, index) => (
                      <motion.a
                        key={method.label}
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.05 }}
                        className="block rounded-[16px] border border-border bg-background/60 p-5 transition-colors hover:border-primary/40"
                      >
                        <div className="flex items-start gap-4">
                          <div className="rounded-[14px] bg-primary/12 p-3 text-primary">
                            <Icon name={method.icon} size={18} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-sm font-semibold text-foreground">{method.label}</p>
                              <Icon name="ArrowUpRight" size={16} className="text-text-secondary" />
                            </div>
                            <p className="mt-2 break-all text-base font-medium text-foreground">{method.value}</p>
                            <p className="mt-2 text-sm leading-7 text-text-secondary">{method.detail}</p>
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </section>

                <aside className="space-y-8">
                  <section>
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Best First Message</h2>
                    <div className="mt-5 rounded-[16px] border border-border bg-[#f5fff6] p-5">
                      <p className="text-sm leading-7 text-foreground">
                        Include the role or project type, timeline, expected responsibilities, and whether the need is full-time, freelance, or short-term contract.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Availability</h2>
                    <div className="mt-5 space-y-3">
                      {[
                        "Open to remote opportunities",
                        "Available for contract and project work",
                        "Frontend-heavy roles are the best fit",
                        "Can support full-stack implementation where needed",
                      ].map((item) => (
                        <div key={item} className="flex gap-3 rounded-[16px] border border-border bg-white px-4 py-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                          <span className="text-sm leading-7 text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">Preferred Contact</h2>
                    <div className="mt-5 flex flex-col gap-3">
                      <a href="mailto:briancheruiyot022@gmail.com">
                        <Button className="w-full rounded-[18px]" iconName="Mail" iconPosition="left">
                          Email Directly
                        </Button>
                      </a>
                      <a href="https://linkedin.com/in/brian-cheruiyot" target="_blank" rel="noreferrer">
                        <Button variant="outline" className="w-full rounded-[18px]" iconName="Linkedin" iconPosition="left">
                          Message on LinkedIn
                        </Button>
                      </a>
                    </div>
                  </section>
                </aside>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
