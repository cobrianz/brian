import React from "react";
import { motion } from "framer-motion";
import Image from "../../../components/AppImage";
import profile from "../../../assets/about.jpg";

const ProfessionalPortrait = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="relative w-full max-w-md mx-auto">
        {/* Main Portrait */}
        <div className="relative overflow-hidden rounded-2xl shadow-premium-strong">
          <Image
            src={profile}
            alt="Brian Cheruiyot - Professional Portrait"
            className="w-full h-[500px] object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

          {/* Floating Dot with Glow */}
          <div className="absolute top-4 right-4 glass-morphism rounded-full p-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full animate-ping bg-conversion-accent opacity-30" />
              <div className="w-3 h-3 bg-conversion-accent rounded-full animate-pulse relative z-10" />
            </div>
          </div>

          {/* Availability Label */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 backdrop-blur-sm bg-background/60 glass-morphism rounded-lg px-4 py-2 flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full animate-ping bg-conversion-accent opacity-30" />
              <div className="w-2.5 h-2.5 bg-conversion-accent rounded-full animate-pulse relative z-10" />
            </div>
            <p className="text-sm text-nowrap font-medium text-foreground">
              Available for opportunities
            </p>
          </div>
        </div>

        {/* Decorative Rotating Borders */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-4 -right-4 w-16 h-16 border-2 border-primary/30 rounded-full shadow-[0_0_12px_2px_rgba(0,212,255,0.2)]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-accent/30 rounded-full shadow-[0_0_12px_2px_rgba(255,0,150,0.2)]"
        />
      </div>

      {/* Professional Stats - Animated on Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 grid grid-cols-3 gap-4"
      >
        <div className="text-center glass-morphism rounded-lg p-4">
          <div className="text-2xl font-bold text-primary">3+</div>
          <div className="text-sm text-text-secondary">Years Experience</div>
        </div>
        <div className="text-center glass-morphism rounded-lg p-4">
          <div className="text-2xl font-bold text-conversion-accent">50+</div>
          <div className="text-sm text-text-secondary">Projects Completed</div>
        </div>
        <div className="text-center glass-morphism rounded-lg p-4">
          <div className="text-2xl font-bold text-cta-primary">15+</div>
          <div className="text-sm text-text-secondary">Technologies</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProfessionalPortrait;
