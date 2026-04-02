import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Banknote, Brain, BarChart3, Heart, UserPlus, Calendar, FileText, CreditCard, Receipt, Zap, BookOpen, MessageCircle, TrendingUp, Users, DollarSign, AlertTriangle, XCircle, Clock, Activity } from "lucide-react";

const chartHeights = [58, 82, 64, 96, 72, 88, 68];
const sparklineHeights = [22, 30, 18, 34, 26, 38, 28, 36];

const typeStyles = {
  dashboard: {
    glowA: "bg-primary/12",
    glowB: "bg-secondary/50",
    accent: "bg-accent/20",
    accentSoft: "bg-accent",
  },
  landing: {
    glowA: "bg-accent/35",
    glowB: "bg-secondary/50",
    accent: "bg-accent",
    accentSoft: "bg-primary/15",
  },
  mobile: {
    glowA: "bg-secondary/40",
    glowB: "bg-secondary/50",
    accent: "bg-primary/18",
    accentSoft: "bg-accent",
  },
  analytics: {
    glowA: "bg-primary/10",
    glowB: "bg-secondary/50",
    accent: "bg-secondary/70",
    accentSoft: "bg-primary/12",
  },
  storefront: {
    glowA: "bg-accent/45",
    glowB: "bg-secondary/50",
    accent: "bg-surface",
    accentSoft: "bg-primary/15",
  },
};

const Surface = ({ children, className = "" }) => (
  <div className={`rounded-[18px] border border-primary/30 bg-white/5 p-4 backdrop-blur-xl ${className}`}>
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
        className={`${index % 3 === 0 ? "bg-secondary" : "bg-primary/25"} w-2 rounded-full`}
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
      tone === "secondary" ? "bg-secondary/75 text-foreground" : "bg-primary/12 text-primary"
    }`}
  >
    {text}
  </div>
);

const BrowserWindowMockup = ({ type = "dashboard", title }) => {
  const palette = typeStyles[type] || typeStyles.dashboard;

  const renderDashboard = () => (
    <div className="space-y-3">
      {/* School Management Header */}
      <Surface className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-blue-500/20 flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-blue-500" />
            </div>
            <div className="text-sm font-semibold text-foreground">Edubora</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Students", value: "1,247" },
            { label: "Teachers", value: "89" },
            { label: "Classes", value: "156" },
          ].map((item, index) => (
            <div key={item.label} className="rounded-lg bg-surface/50 p-2 text-center">
              <div className="h-4 w-4 mx-auto rounded bg-primary/20 mb-1" />
              <div className="text-[10px] text-text-secondary">{item.label}</div>
              <div className="text-sm font-semibold text-foreground">{item.value}</div>
            </div>
          ))}
        </div>
      </Surface>

      {/* Navigation & Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Surface className="p-3">
          <div className="mb-2 text-xs font-medium text-foreground">Quick Actions</div>
          <div className="space-y-2">
            {[
              { label: "Add Student", icon: UserPlus },
              { label: "Schedule Class", icon: Calendar },
              { label: "Grade Reports", icon: FileText },
            ].map((item, index) => (
              <div key={item.label} className="flex items-center gap-2 rounded bg-surface/50 p-2">
                <item.icon className="h-4 w-4 text-primary/60" />
                <span className="text-xs text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </Surface>

        <Surface className="p-3">
          <div className="mb-2 text-xs font-medium text-foreground">Today's Schedule</div>
          <div className="space-y-1.5">
            {[
              { time: "9:00", subject: "Math 101", room: "A-12" },
              { time: "11:00", subject: "Science", room: "B-08" },
              { time: "2:00", subject: "English", room: "C-15" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between rounded bg-surface/50 p-2">
                <div>
                  <div className="text-xs font-medium text-foreground">{item.time}</div>
                  <div className="text-[10px] text-text-secondary">{item.subject}</div>
                </div>
                <div className="text-[10px] text-text-secondary">{item.room}</div>
              </div>
            ))}
          </div>
        </Surface>
      </div>

      {/* Performance Overview */}
      <Surface className="p-3">
        <div className="mb-2 text-xs font-medium text-foreground">Class Performance</div>
        <div className="h-16 rounded bg-gradient-to-r from-green-400/10 to-blue-500/20 mb-2">
          <AnimatedSparkline />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Avg Grade", value: "B+", color: "text-green-400" },
            { label: "Attendance", value: "94%", color: "text-blue-400" },
            { label: "Completed", value: "87%", color: "text-purple-400" },
          ].map((item, index) => (
            <div key={item.label} className="text-center">
              <div className={`text-sm font-semibold ${item.color}`}>{item.value}</div>
              <div className="text-[9px] text-text-secondary">{item.label}</div>
            </div>
          ))}
        </div>
      </Surface>
    </div>
  );

  const renderLanding = () => (
    <div className="space-y-3">
      {/* Banking Hero */}
      <Surface className="p-3">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-8 w-8 rounded bg-green-500/20 flex items-center justify-center">
              <Banknote className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-lg font-bold text-foreground">IB Bank Liberia</div>
          </div>
          <div className="text-sm text-text-secondary mb-4">Secure Banking Solutions</div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Accounts", value: "12,847" },
              { label: "Transactions", value: "45.2k" },
              { label: "Uptime", value: "99.9%" },
            ].map((item, index) => (
              <div key={item.label} className="rounded bg-surface/50 p-2 text-center">
                <div className="text-[10px] text-text-secondary">{item.label}</div>
                <div className="text-sm font-semibold text-foreground">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </Surface>

      {/* Account Overview */}
      <div className="grid grid-cols-2 gap-3">
        <Surface className="p-3">
          <div className="mb-2 text-xs font-medium text-foreground">Account Balance</div>
          <div className="text-xl font-bold text-foreground mb-1">$2,847.92</div>
          <div className="text-[10px] text-green-400 mb-3">+2.4% this month</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-text-secondary">Checking</span>
              <span className="text-sm font-semibold">$1,247.92</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-text-secondary">Savings</span>
              <span className="text-sm font-semibold">$1,600.00</span>
            </div>
          </div>
        </Surface>

        <Surface className="p-3">
          <div className="mb-2 text-xs font-medium text-foreground">Quick Actions</div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Transfer", icon: CreditCard },
              { label: "Pay Bills", icon: Receipt },
              { label: "Cards", icon: CreditCard },
              { label: "History", icon: Clock },
            ].map((item, index) => (
              <div key={item.label} className="rounded bg-surface/50 p-2 text-center">
                <item.icon className="h-4 w-4 text-primary/60 mb-1 mx-auto" />
                <div className="text-[9px] text-text-secondary">{item.label}</div>
              </div>
            ))}
          </div>
        </Surface>
      </div>

      {/* Recent Transactions */}
      <Surface className="p-3">
        <div className="mb-2 text-xs font-medium text-foreground">Recent Transactions</div>
        <div className="space-y-2">
          {[
            { merchant: "Grocery Store", amount: "-$67.43", time: "2h ago", type: "debit" },
            { merchant: "Salary Deposit", amount: "+$2,500.00", time: "1d ago", type: "credit" },
            { merchant: "Coffee Shop", amount: "-$4.50", time: "2d ago", type: "debit" },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between rounded bg-surface/50 p-2">
              <div>
                <div className="text-xs font-medium text-foreground">{item.merchant}</div>
                <div className="text-[9px] text-text-secondary">{item.time}</div>
              </div>
              <div className={`text-sm font-semibold ${item.type === 'credit' ? 'text-green-400' : 'text-red-400'}`}>
                {item.amount}
              </div>
            </div>
          ))}
        </div>
      </Surface>
    </div>
  );

  const renderDesktopApp = () => (
    <div className="space-y-3">
      {/* AI Learning Header */}
      <Surface className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-purple-500/20 flex items-center justify-center">
              <Brain className="h-4 w-4 text-purple-500" />
            </div>
            <div className="text-sm font-semibold text-foreground">actirova</div>
          </div>
        </div>
        <div className="text-center mb-3">
          <div className="text-sm font-bold text-foreground">AI-Powered Learning</div>
          <div className="text-[10px] text-text-secondary">Personalized Education</div>
        </div>
      </Surface>

      {/* Learning Progress */}
      <div className="grid grid-cols-2 gap-3">
        <Surface className="p-3">
          <div className="mb-2 text-xs font-medium text-foreground">Current Course</div>
          <div className="text-sm font-semibold text-foreground mb-1">Advanced Calculus</div>
          <div className="text-[10px] text-text-secondary mb-2">Chapter 7: Integration</div>
          <div className="h-2 rounded-full bg-surface/50 mb-2">
            <motion.div initial={{ width: 0 }} whileInView={{ width: "73%" }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="h-2 rounded-full bg-purple-500/70" />
          </div>
          <div className="text-[9px] text-purple-400">73% Complete</div>
        </Surface>

        <Surface className="p-3">
          <div className="mb-2 text-xs font-medium text-foreground">AI Tutor</div>
          <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-2 mx-auto">
            <div className="h-6 w-6 rounded bg-purple-500" />
          </div>
          <div className="text-center">
            <div className="text-[10px] text-text-secondary">Available 24/7</div>
            <div className="text-[9px] text-purple-400">Ask me anything!</div>
          </div>
        </Surface>
      </div>

      {/* Learning Modules */}
      <Surface className="p-3">
        <div className="mb-2 text-xs font-medium text-foreground">Today's Learning Path</div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { title: "Video", progress: 100, icon: BookOpen },
            { title: "Quiz", progress: 60, icon: FileText },
            { title: "Practice", progress: 30, icon: Zap },
          ].map((item, index) => (
            <div key={item.title} className="text-center">
              <div className="h-8 w-8 rounded bg-surface/50 flex items-center justify-center mb-1 mx-auto">
                <item.icon className="h-3 w-3 text-primary/60" />
              </div>
              <div className="text-[9px] text-text-secondary">{item.title}</div>
              <div className="h-1 rounded-full bg-surface/50 mt-1">
                <div className="h-1 rounded-full bg-purple-500/70" style={{ width: `${item.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[10px] text-text-secondary">Streak: 15 days</div>
          <div className="text-[10px] text-green-400">+12 XP today</div>
        </div>
      </Surface>

      {/* Quick Actions */}
      <Surface className="p-3">
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: "Learn", icon: BookOpen },
            { label: "Practice", icon: Zap },
            { label: "Chat AI", icon: MessageCircle },
            { label: "Progress", icon: TrendingUp },
          ].map((item, index) => (
            <div key={item.label} className="text-center">
              <div className={`h-8 w-8 rounded flex items-center justify-center mb-1 mx-auto ${index === 2 ? "bg-purple-500/20" : "bg-surface/50"}`}>
                <item.icon className="h-3 w-3 text-primary/60" />
              </div>
              <div className="text-[9px] text-text-secondary">{item.label}</div>
            </div>
          ))}
        </div>
      </Surface>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-3">
      {/* Analytics Header */}
      <Surface className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-orange-500/20 flex items-center justify-center">
              <BarChart3 className="h-4 w-4 text-orange-500" />
            </div>
            <div className="text-sm font-semibold text-foreground">Analytics</div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">87%</div>
          <div className="text-[10px] text-text-secondary">Signal Score</div>
        </div>
      </Surface>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-3">
        <Surface className="p-3">
          <div className="mb-2 text-xs font-medium text-foreground">Weekly Trend</div>
          <div className="h-12 rounded bg-gradient-to-r from-primary/10 to-secondary/20 mb-2">
            <AnimatedSparkline />
          </div>
          <div className="flex justify-between text-[9px] text-text-secondary">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
          </div>
        </Surface>

        <Surface className="p-3">
          <div className="mb-2 text-xs font-medium text-foreground">Channel Analysis</div>
          <div className="flex items-end justify-between h-12 mb-2">
            {[45, 68, 52, 78, 61].map((height, index) => (
              <motion.div
                key={index}
                className="w-4 rounded-t bg-primary/60"
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="text-[9px] text-text-secondary">Peak: 78%</div>
            <div className="text-[9px] text-green-400">+14%</div>
          </div>
        </Surface>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Traffic", value: "148k", icon: Users },
          { label: "Retention", value: "68%", icon: TrendingUp },
          { label: "Revenue", value: "$12.4k", icon: DollarSign },
        ].map((item, index) => (
          <Surface key={item.label} className="p-2">
            <item.icon className="h-4 w-4 text-primary/60 mb-1 mx-auto" />
            <div className="text-[9px] text-text-secondary">{item.label}</div>
            <div className="text-sm font-semibold text-foreground">{item.value}</div>
          </Surface>
        ))}
      </div>

      {/* Bottom Stats */}
      <Surface className="p-3">
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: "Alerts", value: "3", icon: AlertTriangle },
            { label: "Errors", value: "0", icon: XCircle },
            { label: "Uptime", value: "99.9%", icon: Activity },
            { label: "Response", value: "1.2s", icon: Clock },
          ].map((item, index) => (
            <div key={item.label} className="text-center">
              <item.icon className="h-3 w-3 text-primary/60 mb-1 mx-auto" />
              <div className="text-[9px] text-text-secondary">{item.label}</div>
              <div className="text-xs font-semibold text-foreground">{item.value}</div>
            </div>
          ))}
        </div>
      </Surface>
    </div>
  );

  const renderStorefront = () => (
    <div className="space-y-3">
      {/* Healthcare Header */}
      <Surface className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-red-500/20 flex items-center justify-center">
              <Heart className="h-4 w-4 text-red-500" />
            </div>
            <div className="text-sm font-semibold text-foreground">Medicore</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Patients", value: "547", icon: Users },
            { label: "Appointments", value: "23", icon: Calendar },
            { label: "Rooms", value: "12/15", icon: Activity },
          ].map((item, index) => (
            <div key={item.label} className="rounded-lg bg-surface/50 p-2 text-center">
              <item.icon className="h-4 w-4 text-primary/60 mb-1 mx-auto" />
              <div className="text-[10px] text-text-secondary">{item.label}</div>
              <div className="text-sm font-semibold text-foreground">{item.value}</div>
            </div>
          ))}
        </div>
      </Surface>

      {/* Patient Management */}
      <div className="grid grid-cols-2 gap-3">
        <Surface className="p-3">
          <div className="mb-2 text-xs font-medium text-foreground">Today's Appointments</div>
          <div className="space-y-2">
            {[
              { time: "9:00", patient: "John Doe", type: "Check-up" },
              { time: "11:30", patient: "Jane Smith", type: "Consultation" },
              { time: "2:15", patient: "Bob Wilson", type: "Follow-up" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between rounded bg-surface/50 p-2">
                <div>
                  <div className="text-xs font-medium text-foreground">{item.time}</div>
                  <div className="text-[10px] text-text-secondary">{item.patient}</div>
                </div>
                <div className="text-[9px] text-blue-400">{item.type}</div>
              </div>
            ))}
          </div>
        </Surface>

        <Surface className="p-3">
          <div className="mb-2 text-xs font-medium text-foreground">Room Status</div>
          <div className="space-y-2">
            {[
              { room: "101", status: "Occupied", patient: "John D." },
              { room: "102", status: "Available", patient: "" },
              { room: "103", status: "Cleaning", patient: "" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between rounded bg-surface/50 p-2">
                <div>
                  <div className="text-xs font-medium text-foreground">Room {item.room}</div>
                  <div className="text-[10px] text-text-secondary">{item.patient || "Empty"}</div>
                </div>
                <div className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                  item.status === "Occupied" ? "bg-red-400/20 text-red-400" :
                  item.status === "Available" ? "bg-green-400/20 text-green-400" :
                  "bg-yellow-400/20 text-yellow-400"
                }`}>
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </Surface>
      </div>

      {/* Medical Records & Stats */}
      <Surface className="p-3">
        <div className="mb-2 text-xs font-medium text-foreground">Patient Records</div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="rounded bg-surface/50 p-2">
            <div className="text-[10px] text-text-secondary">Recent Admissions</div>
            <div className="text-lg font-semibold text-foreground">12</div>
            <div className="text-[9px] text-green-400">+2 this week</div>
          </div>
          <div className="rounded bg-surface/50 p-2">
            <div className="text-[10px] text-text-secondary">Avg. Stay</div>
            <div className="text-lg font-semibold text-foreground">3.2</div>
            <div className="text-[9px] text-text-secondary">days</div>
          </div>
        </div>
        <div className="h-12 rounded bg-gradient-to-r from-blue-400/10 to-green-500/20">
          <AnimatedSparkline />
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
      <div className="rounded-[22px] border border-primary/30 bg-white/5 p-4 backdrop-blur-xl">
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
