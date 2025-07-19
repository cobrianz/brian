import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/homepage" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const isActivePath = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "" : "bg-transparent"
      }`}
      style={{ backdropFilter: scrolled ? "blur(10px)" : "none" }}
    >
      <div className="max-w-[1600px] mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            to="/homepage"
            className="flex items-center space-x-3 hover-scale group"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center">
              <span
                className="font-bold text-lg lg:text-xl bg-gradient-brand bg-clip-text text-transparent"
                style={{ color: "#ffffff" }}
              >
                BC
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs lg:text-sm text-text-secondary font-accent">
                Brian Cheruiyot
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="glass-morphism shadow-premium p-2 rounded-full hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 transition-all duration-300 text-foreground hover:bg-glass-hover hover:text-primary ${
                  isActivePath(item.path)
                    ? "rounded-full glass-morphism shadow-premium"
                    : "rounded-lg"
                }`}
              >
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact" aria-label="Contact">
              <div
                className={`w-12 h-12 rounded-full shadow-premium hover:shadow-premium-strong transition-all duration-300 flex items-center justify-center bg-gradient-brand text-white`}
              >
                <Icon name="MessageSquare" size={24} />
              </div>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            style={{ backgroundColor: "#2d3748" }}
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="text-white"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="glass-morphism border-t border-border px-4 py-4"
          style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActivePath(item.path)
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-foreground hover:bg-surface hover:text-primary"
                }`}
              >
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-border space-y-3">
              <Button
                variant="outline"
                fullWidth
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Download Resume
              </Button>
                 <Button
                                variant="ghost"
                                size="lg"
                                className="w-full text-xs sm:text-sm bg-[#1c421c] text-green-500 rounded-full px-5 py-2.5 flex items-center gap-2 transition duration-300 hover:brightness-110 shadow-inner border border-green-900/10 hover:bg-[#265226]"
                                iconName="MessageCircle"
                                iconPosition="left"
                              >
                                Reach Out
                              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
