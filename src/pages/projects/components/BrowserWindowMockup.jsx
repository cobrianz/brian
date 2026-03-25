import React from "react";
import { motion } from "framer-motion";

const chartHeights = [58, 82, 64, 96, 72, 88, 68];
const sparklineHeights = [22, 30, 18, 34, 26, 38, 28, 36];

const typeStyles = {
  dashboard: {
    glowA: "bg-primary/12",
    glowB: "bg-[#D2D7F8]/55",
    accent: "bg-primary/18",
    accentSoft: "bg-[#dcfce7]",
  },
  landing: {
    glowA: "bg-[#d9f99d]/35",
    glowB: "bg-[#D2D7F8]/55",
    accent: "bg-[#ecfccb]",
    accentSoft: "bg-primary/15",
  },
  mobile: {
    glowA: "bg-[#bbf7d0]/40",
    glowB: "bg-[#D2D7F8]/50",
    accent: "bg-primary/18",
    accentSoft: "bg-[#dcfce7]",
  },
  analytics: {
    glowA: "bg-primary/10",
    glowB: "bg-[#c7d2fe]/50",
    accent: "bg-[#D2D7F8]/70",
    accentSoft: "bg-primary/12",
  },
  storefront: {
    glowA: "bg-[#dcfce7]/45",
    glowB: "bg-[#D2D7F8]/50",
    accent: "bg-[#f0fdf4]",
    accentSoft: "bg-primary/15",
  },
};

const Surface = ({ children, className = "" }) => (
  <div className={`rounded-[18px] border border-primary/30 bg-white/60 p-4 backdrop-blur-xl ${className}`}>
    {children}
  </div>
);

const TinyText = ({ className = "" }) => (
  <div className={`h-2.5 rounded-full bg-foreground/10 ${className}`} />
);

const AnimatedBars = ({ values = chartHeights, colors = ["bg-primary/20", "bg-[#D2D7F8]/70"] }) => (
  <div className="flex h-28 items-end gap-2">
    {values.map((height, index) => (
      <motion.div
        key={index}
        className={`flex-1 rounded-t-[10px] ${colors[index % colors.length]}`}
        initial={{ height: 0, opacity: 0.65 }}
        whileInView={{ height: `${height}%`, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: index * 0.04 }}
      />
    ))}
  </div>
);

const AnimatedSparkline = () => (
  <div className="flex h-10 items-end gap-1">
    {sparklineHeights.map((height, index) => (
      <motion.div
        key={index}
        className={`${index % 3 === 0 ? "bg-[#D2D7F8]" : "bg-primary/25"} w-2 rounded-full`}
        initial={{ height: 0 }}
        whileInView={{ height }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.03 }}
      />
    ))}
  </div>
);

const StatusPill = ({ text, tone = "primary" }) => (
  <div
    className={`rounded-full px-2 py-1 text-[10px] ${
      tone === "secondary" ? "bg-[#D2D7F8]/75 text-foreground" : "bg-primary/12 text-primary"
    }`}
  >
    {text}
  </div>
);

const BrowserWindowMockup = ({ type = "dashboard", title }) => {
  const palette = typeStyles[type] || typeStyles.dashboard;

  const renderDashboard = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-[0.78fr_1.22fr] gap-3">
        <Surface className="p-3">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[11px] font-medium text-foreground">Workspace</div>
            <StatusPill text="Live" />
          </div>
          <div className="space-y-2.5">
            {["Overview", "Revenue", "Teams", "Automations", "Settings"].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ x: 3 }}
                className={`flex items-center gap-2 rounded-[14px] px-2 py-2 ${
                  index === 1 ? "bg-primary/10" : "bg-white/60"
                }`}
              >
                <div className={`h-7 w-7 rounded-[10px] ${index % 2 === 0 ? "bg-[#D2D7F8]/75" : "bg-primary/16"}`} />
                <div className="flex-1">
                  <TinyText className="w-16" />
                </div>
              </motion.div>
            ))}
          </div>
        </Surface>

        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Revenue", value: "$48.2k", tint: "bg-[#ecfccb]" },
              { label: "Teams", value: "124", tint: "bg-[#D2D7F8]/65" },
              { label: "Growth", value: "+18%", tint: "bg-[#dcfce7]" },
            ].map((item, index) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.06 }}>
                <Surface className="p-3">
                  <div className={`h-8 w-8 rounded-[12px] ${item.tint}`} />
                  <div className="mt-3 text-[11px] text-text-secondary">{item.label}</div>
                  <div className="mt-1 text-lg font-semibold text-foreground">{item.value}</div>
                  <div className="mt-3">
                    <AnimatedSparkline />
                  </div>
                </Surface>
              </motion.div>
            ))}
          </div>

          <Surface className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-foreground">Performance</div>
                <div className="text-[11px] text-text-secondary">Quarterly breakdown</div>
              </div>
              <StatusPill text="Q2" tone="secondary" />
            </div>
            <AnimatedBars />
          </Surface>
        </div>
      </div>

      <div className="grid grid-cols-[1.15fr_0.85fr] gap-3">
        <Surface className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-medium text-foreground">Team activity</div>
            <div className="h-7 w-20 rounded-full bg-primary/12" />
          </div>
          <div className="space-y-3">
            {[72, 58, 88].map((value, index) => (
              <div key={index}>
                <div className="mb-1 flex items-center justify-between text-[11px] text-text-secondary">
                  <span>Workspace {index + 1}</span>
                  <span>{value}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/80">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={`h-2 rounded-full ${index === 1 ? "bg-[#D2D7F8]" : "bg-primary/70"}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Surface>

        <Surface className="p-4">
          <div className="mb-3 text-sm font-medium text-foreground">Status cards</div>
          <div className="space-y-3">
            {[
              { title: "Deploy", value: "Healthy", tone: "bg-[#dcfce7]" },
              { title: "Errors", value: "0 critical", tone: "bg-[#D2D7F8]/70" },
              { title: "Tickets", value: "4 pending", tone: "bg-[#ecfccb]" },
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.06 }} className={`rounded-[14px] ${item.tone} p-3`}>
                <div className="text-[11px] text-text-secondary">{item.title}</div>
                <div className="mt-1 text-sm font-semibold text-foreground">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </Surface>
      </div>
    </div>
  );

  const renderLanding = () => (
    <div className="space-y-3">
      <Surface className="overflow-hidden p-0">
        <div className="border-b border-primary/20 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="h-4 w-24 rounded-full bg-[#D2D7F8]/75" />
            <div className="flex gap-2">
              <div className="h-3 w-10 rounded-full bg-white/80" />
              <div className="h-3 w-10 rounded-full bg-white/80" />
              <div className="h-3 w-10 rounded-full bg-white/80" />
            </div>
          </div>
        </div>
        <div className="grid gap-4 px-4 py-4 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="h-7 w-4/5 rounded-full bg-foreground/10" />
            <div className="mt-2 h-7 w-2/3 rounded-full bg-foreground/10" />
            <div className="mt-4 space-y-2">
              <TinyText className="w-full" />
              <TinyText className="w-5/6" />
              <TinyText className="w-2/3" />
            </div>
            <div className="mt-4 flex gap-3">
              <motion.div whileHover={{ y: -2 }} className="h-9 w-24 rounded-full bg-primary/18" />
              <motion.div whileHover={{ y: -2 }} className="h-9 w-24 rounded-full bg-[#D2D7F8]/65" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {[["12k", "#ecfccb"], ["28%", "#D2D7F8"], ["4.8", "#dcfce7"]].map(([value, color], index) => (
                <motion.div key={value} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }} className="rounded-[14px] p-3" style={{ backgroundColor: color }}>
                  <div className="text-[10px] text-text-secondary">Metric</div>
                  <div className="mt-1 text-sm font-semibold text-foreground">{value}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="rounded-[18px] bg-[#D2D7F8]/55 p-3">
            <div className="rounded-[16px] bg-white/75 p-3">
              <div className="h-24 rounded-[14px] bg-primary/12" />
              <div className="mt-3 space-y-2">
                <TinyText className="w-4/5" />
                <TinyText className="w-2/3" />
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div key={item} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.04 }} className={`rounded-[14px] p-3 ${index % 2 === 0 ? "bg-white/80" : "bg-primary/10"}`}>
                  <div className="h-10 rounded-[12px] bg-white/75" />
                  <div className="mt-2 h-2.5 rounded-full bg-foreground/10" />
                  <div className="mt-2 h-2.5 w-3/4 rounded-full bg-foreground/10" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Surface>

      <div className="grid grid-cols-3 gap-3">
        {["Hero", "Proof", "CTA"].map((item, index) => (
          <Surface key={item} className="p-3">
            <div className={`h-20 rounded-[14px] ${index === 1 ? "bg-primary/14" : "bg-[#D2D7F8]/60"}`} />
            <div className="mt-3 text-[11px] text-text-secondary">{item}</div>
            <div className="mt-2 space-y-2">
              <TinyText className="w-full" />
              <TinyText className="w-2/3" />
            </div>
          </Surface>
        ))}
      </div>
    </div>
  );

  const renderDesktopApp = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-[0.9fr_1.1fr] gap-3">
        <Surface className="p-3">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[11px] font-medium text-foreground">Learning paths</div>
            <StatusPill text="Active" />
          </div>
          <div className="space-y-2.5">
            {["Biology", "Math", "History", "Chemistry"].map((item, index) => (
              <div key={item} className={`rounded-[14px] p-3 ${index === 0 ? "bg-primary/10" : "bg-white/70"}`}>
                <div className="flex items-center gap-2">
                  <div className={`h-8 w-8 rounded-[10px] ${index % 2 === 0 ? "bg-[#D2D7F8]/70" : "bg-primary/14"}`} />
                  <div className="flex-1">
                    <TinyText className="w-16" />
                    <TinyText className="mt-2 w-10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Surface>

        <Surface className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-foreground">Tutor workspace</div>
              <div className="text-[11px] text-text-secondary">Adaptive lesson generation</div>
            </div>
            <StatusPill text="AI tutor" tone="secondary" />
          </div>
          <div className="rounded-[16px] bg-[#D2D7F8]/60 p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-semibold text-foreground">Photosynthesis guide</div>
                <div className="mt-1 text-[11px] text-text-secondary">Module 4 of 7</div>
              </div>
              <div className="h-8 w-8 rounded-[10px] bg-white/75" />
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/80">
              <motion.div initial={{ width: 0 }} whileInView={{ width: "66%" }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="h-2 rounded-full bg-primary/70" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item, index) => (
                <div key={item} className={`rounded-[12px] p-2 ${index === 1 ? "bg-primary/14" : "bg-white/75"}`}>
                  <div className="h-7 rounded-[10px] bg-white/80" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-[14px] bg-white/80 p-3">
              <div className="text-[11px] text-text-secondary">Quiz performance</div>
              <div className="mt-2">
                <AnimatedSparkline />
              </div>
            </div>
            <div className="rounded-[14px] bg-primary/10 p-3">
              <div className="text-[11px] text-text-secondary">Completion</div>
              <div className="mt-2 text-lg font-semibold text-foreground">84%</div>
            </div>
          </div>
        </Surface>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-[0.9fr_1.1fr] gap-3">
        <Surface className="p-4">
          <div className="text-sm font-medium text-foreground">Signal score</div>
          <div className="mt-3 text-3xl font-semibold text-foreground">87%</div>
          <div className="mt-3 h-2 rounded-full bg-white/80">
            <motion.div initial={{ width: 0 }} whileInView={{ width: "87%" }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="h-2 rounded-full bg-primary/70" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-[12px] bg-[#dcfce7] p-2">
              <div className="text-[10px] text-text-secondary">Trend</div>
              <div className="mt-1 text-sm font-semibold text-foreground">+14%</div>
            </div>
            <div className="rounded-[12px] bg-[#D2D7F8]/70 p-2">
              <div className="text-[10px] text-text-secondary">Alerts</div>
              <div className="mt-1 text-sm font-semibold text-foreground">3</div>
            </div>
          </div>
        </Surface>

        <Surface className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm font-medium text-foreground">Channel analysis</div>
            <StatusPill text="Weekly" tone="secondary" />
          </div>
          <div className="grid grid-cols-5 items-end gap-2">
            {chartHeights.slice(0, 5).map((height, index) => (
              <motion.div
                key={index}
                className={`rounded-t-[10px] ${index % 2 === 0 ? "bg-[#D2D7F8]" : "bg-primary/18"}`}
                initial={{ height: 0 }}
                whileInView={{ height: `${height + 24}px` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              />
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-[10px] text-text-secondary">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </Surface>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {["Traffic", "Retention", "Revenue"].map((item, index) => (
          <Surface key={item} className="p-3">
            <div className="text-[11px] text-text-secondary">{item}</div>
            <div className="mt-1 text-lg font-semibold text-foreground">
              {index === 0 ? "148k" : index === 1 ? "68%" : "$12.4k"}
            </div>
            <div className={`mt-3 rounded-[14px] p-3 ${index === 1 ? "bg-[#D2D7F8]/70" : "bg-primary/12"}`}>
              <div className="h-8 rounded-[10px] bg-white/80" />
              <div className="mt-2 h-2.5 rounded-full bg-white/80" />
              <div className="mt-2 h-2.5 w-3/4 rounded-full bg-white/80" />
            </div>
          </Surface>
        ))}
      </div>
    </div>
  );

  const renderStorefront = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-[1.05fr_0.95fr] gap-3">
        <Surface className="overflow-hidden p-0">
          <div className="border-b border-primary/20 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="h-4 w-20 rounded-full bg-primary/16" />
              <div className="flex gap-2">
                <div className="h-3 w-8 rounded-full bg-white/80" />
                <div className="h-3 w-8 rounded-full bg-white/80" />
                <div className="h-3 w-8 rounded-full bg-white/80" />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-3">
              {[1, 2].map((item, index) => (
                <div key={item} className="rounded-[16px] bg-white/80 p-3">
                  <div className={`h-24 rounded-[12px] ${index === 0 ? "bg-[#D2D7F8]/62" : "bg-primary/14"}`} />
                  <div className="mt-3 space-y-2">
                    <TinyText className="w-full" />
                    <TinyText className="w-2/3" />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="h-7 w-16 rounded-full bg-[#ecfccb]" />
                    <div className="h-7 w-7 rounded-full bg-primary/12" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Surface>

        <Surface className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-medium text-foreground">Cart summary</div>
            <StatusPill text="3 items" />
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((item, index) => (
              <motion.div key={item} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.05 }} className="flex items-center gap-3 rounded-[14px] bg-white/80 p-3">
                <div className={`h-10 w-10 rounded-[10px] ${index === 1 ? "bg-[#D2D7F8]/70" : "bg-primary/14"}`} />
                <div className="flex-1">
                  <TinyText className="w-4/5" />
                  <TinyText className="mt-2 w-1/2" />
                </div>
                <div className="h-7 w-12 rounded-full bg-[#ecfccb]" />
              </motion.div>
            ))}
          </div>
        </Surface>
      </div>

      <Surface className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm font-medium text-foreground">Featured products</div>
          <StatusPill text="Updated" tone="secondary" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((item, index) => (
            <motion.div key={item} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.04 }} className="rounded-[14px] bg-white/80 p-3">
              <div className={`h-16 rounded-[10px] ${index === 2 ? "bg-primary/14" : "bg-[#D2D7F8]/55"}`} />
              <div className="mt-3 space-y-2">
                <TinyText className="w-full" />
                <TinyText className="w-2/3" />
              </div>
            </motion.div>
          ))}
        </div>
      </Surface>
    </div>
  );

  const renderContent = () => {
    switch (type) {
      case "dashboard":
        return renderDashboard();
      case "landing":
        return renderLanding();
      case "mobile":
        return renderDesktopApp();
      case "analytics":
        return renderAnalytics();
      case "storefront":
      default:
        return renderStorefront();
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6, rotateX: -3, rotateY: 4 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="relative perspective-[1000px]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className={`absolute -left-6 top-12 h-28 w-28 rounded-full ${palette.glowA} blur-3xl`} />
      <div className={`absolute -right-4 bottom-8 h-32 w-32 rounded-full ${palette.glowB} blur-3xl`} />
      <div className="rounded-[22px] border border-primary/30 bg-white/58 p-4 backdrop-blur-xl">
        <div className="mb-4 flex items-center justify-between border-b border-primary/20 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#dcfce7]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#D2D7F8]" />
            <span className={`h-2.5 w-2.5 rounded-full ${palette.accent}`} />
          </div>
          <div className="text-[11px] text-text-secondary">{title}</div>
          <div className={`h-7 w-16 rounded-full ${palette.accentSoft}`} />
        </div>
        {renderContent()}
      </div>
    </motion.div>
  );
};

export default BrowserWindowMockup;
