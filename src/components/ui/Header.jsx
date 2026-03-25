import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

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
    <header className="sticky top-0 left-0 right-0 z-50 bg-transparent px-3 pt-3 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6 rounded-[24px] border border-white/70 bg-[#eef1ff]/90 px-4 backdrop-blur-xl sm:h-[72px] sm:px-5">
          <Link
            to="/"
            className="shrink-0"
          >
            <div className="font-heading text-2xl font-bold tracking-[-0.05em] text-foreground sm:text-[2rem]">
              Brian
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/70 bg-white/45 p-1.5 backdrop-blur">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-[18px] px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActivePath(item.path)
                    ? "bg-[#f2fff2] text-foreground"
                    : "text-text-secondary hover:bg-white/60 hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link to="/contact">
              <Button
                size="sm"
                className="rounded-full bg-[#bdf5c8] px-5 text-foreground hover:bg-[#a8efb6]"
                iconName="ArrowUpRight"
                iconPosition="right"
              >
                Hire Me
              </Button>
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="rounded-full bg-white/65 p-2 transition-colors duration-300 lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="text-foreground"
            />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-3 rounded-[24px] border border-white/70 bg-[#eef1ff]/95 px-4 py-4 backdrop-blur-xl">
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActivePath(item.path)
                    ? "bg-[#f2fff2] text-foreground"
                    : "text-foreground hover:bg-white/70"
                }`}
              >
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-border space-y-3">
              <Link to="/contact" className="block">
                <Button
                  fullWidth
                  className="rounded-full bg-[#bdf5c8] text-foreground hover:bg-[#a8efb6]"
                  iconName="ArrowUpRight"
                  iconPosition="right"
                >
                  Hire Me
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
