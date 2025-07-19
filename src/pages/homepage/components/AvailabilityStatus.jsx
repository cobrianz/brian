import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const AvailabilityStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextAvailable, setNextAvailable] = useState("");

  // Mock availability data
  const availabilityData = {
    status: "available", // available, busy, away
    currentProject: "EcoTrack Dashboard Enhancement",
    projectProgress: 75,
    nextFreeSlot: "2025-01-25",
    responseTime: "< 2 hours",
    timezone: "GMT+3 (Nairobi)",
    workingHours: "9:00 AM - 6:00 PM EAT",
  };

  const statusConfig = {
    available: {
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      icon: "CheckCircle",
      label: "Available for New Projects",
      description: "Ready to start your project immediately",
    },
    busy: {
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20",
      icon: "Clock",
      label: "Currently Busy",
      description: "Working on existing projects",
    },
    away: {
      color: "text-error",
      bgColor: "bg-error/10",
      borderColor: "border-error/20",
      icon: "XCircle",
      label: "Away",
      description: "Not available for new projects",
    },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Calculate next available date
    const nextDate = new Date(availabilityData.nextFreeSlot);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setNextAvailable(nextDate.toLocaleDateString("en-US", options));

    return () => clearInterval(timer);
  }, []);

  const currentStatus = statusConfig[availabilityData.status];
  const isWorkingHours = () => {
    const hour = currentTime.getHours();
    return hour >= 9 && hour < 18;
  };

  return (
    <section className="py-20 lg:py-32 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,255,136,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Status Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-morphism p-8 rounded-2xl border border-border">
              {/* Current Status */}
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-4 h-4 rounded-full ${currentStatus.bgColor} ${currentStatus.borderColor} border-2 animate-pulse`}
                />
                <div>
                  <h3 className={`text-xl font-bold ${currentStatus.color}`}>
                    {currentStatus.label}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {currentStatus.description}
                  </p>
                </div>
              </div>

              {/* Current Time & Timezone */}
              <div className="flex items-center space-x-3 mb-6 p-4 bg-surface/50 rounded-lg">
                <Icon name="Clock" size={20} className="text-primary" />
                <div>
                  <div className="text-lg font-bold text-foreground">
                    {currentTime.toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {availabilityData.timezone} •{" "}
                    {availabilityData.workingHours}
                  </div>
                </div>
                <div
                  className={`ml-auto px-2 py-1 rounded-full text-xs ${
                    isWorkingHours()
                      ? "bg-success/10 text-success"
                      : "bg-warning/10 text-warning"
                  }`}
                >
                  {isWorkingHours() ? "Working Hours" : "After Hours"}
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg mb-6">
                <div className="flex items-center space-x-3">
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="text-primary"
                  />
                  <div>
                    <div className="font-medium text-foreground">
                      Response Time
                    </div>
                    <div className="text-sm text-text-secondary">
                      Average reply time
                    </div>
                  </div>
                </div>
                <div className="text-lg font-bold text-primary">
                  {availabilityData.responseTime}
                </div>
              </div>

              {/* Current Project Status */}
              {availabilityData.status === "busy" && (
                <div className="p-4 bg-warning/5 border border-warning/20 rounded-lg mb-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name="Code" size={20} className="text-warning" />
                    <div>
                      <div className="font-medium text-foreground">
                        Current Project
                      </div>
                      <div className="text-sm text-text-secondary">
                        {availabilityData.currentProject}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Progress</span>
                      <span className="text-foreground font-medium">
                        {availabilityData.projectProgress}%
                      </span>
                    </div>
                    <div className="w-full bg-surface rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${availabilityData.projectProgress}%`,
                        }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="bg-warning h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Next Available */}
              {availabilityData.status !== "available" && (
                <div className="flex items-center space-x-3 p-4 bg-surface/50 rounded-lg">
                  <Icon name="Calendar" size={20} className="text-accent" />
                  <div>
                    <div className="font-medium text-foreground">
                      Next Available
                    </div>
                    <div className="text-sm text-text-secondary">
                      {nextAvailable}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Content - Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-conversion-accent/10 backdrop-blur-sm border border-conversion-accent/20 rounded-full px-4 py-2 mb-6">
              <Icon name="Zap" size={16} className="text-conversion-accent" />
              <span className="text-sm text-conversion-accent font-medium">
                Ready to Collaborate
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Build Your{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Next Project
              </span>
            </h2>

            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
              Whether you need a complete web application, API development, or
              technical consulting, I'm here to help bring your vision to life
              with cutting-edge technology and proven expertise.
            </p>

            {/* Engagement Options */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-text-secondary">
                <Icon name="Check" size={16} className="text-success" />
                <span>Free initial consultation (30 minutes)</span>
              </div>
              <div className="flex items-center space-x-3 text-text-secondary">
                <Icon name="Check" size={16} className="text-success" />
                <span>Detailed project proposal within 24 hours</span>
              </div>
              <div className="flex items-center space-x-3 text-text-secondary">
                <Icon name="Check" size={16} className="text-success" />
                <span>Flexible engagement models (project/hourly)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact-professional-connection-center">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-[#1c421c] text-green-500 rounded-full px-5 py-2.5 flex items-center gap-2 transition duration-300 hover:brightness-110 shadow-inner border border-green-900/10 hover:bg-[#265226] "
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Message
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Call
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="text-foreground hover:text-primary hover-scale"
                iconName="Download"
                iconPosition="left"
              >
                Download Resume
              </Button>
            </div>

            {/* Contact Methods */}
            <div className="mt-8 p-6 glass-morphism rounded-xl border border-border">
              <h4 className="font-medium text-foreground mb-4">
                Quick Contact Options
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <span>brian@portfolio.dev</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <span>+254 712 345 678</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon
                    name="MessageSquare"
                    size={16}
                    className="text-primary"
                  />
                  <span>WhatsApp Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityStatus;
