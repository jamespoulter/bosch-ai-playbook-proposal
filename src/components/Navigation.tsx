"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Section {
  id: string;
  label: string;
}

interface NavigationProps {
  activeSection: string;
  sections: Section[];
  clientName?: string;
}

export default function Navigation({ activeSection, sections, clientName = "Bosch" }: NavigationProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activeSection]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-navy/50">
        <motion.div
          className="h-full bg-gradient-to-r from-orange to-gold"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Main Navigation */}
      <nav className="fixed top-1 left-0 right-0 z-50">
        <div className="mx-4 mt-2">
          <div className="backdrop-blur-xl bg-navy/80 border border-cream/10 rounded-2xl px-4 py-3 shadow-2xl">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a href="#welcome" className="flex items-center gap-3">
                <Image
                  src="/threepoint-logo-transparent.png"
                  alt="ThreePoint"
                  width={140}
                  height={40}
                  className="h-8 w-auto"
                />
              </a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-orange"
                          : "text-cream/70 hover:text-cream hover:bg-cream/5"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 bg-orange/10 rounded-lg border border-orange/30"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{section.label}</span>
                    </a>
                  );
                })}
              </div>

              {/* Prepared for */}
              <div className="hidden md:flex items-center gap-2 text-sm">
                <span className="text-cream/60">Prepared for</span>
                <span className="text-orange font-semibold">{clientName}</span>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-cream/70 hover:text-cream transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden mx-4 mt-2 relative z-50"
              >
                <div className="backdrop-blur-xl bg-navy/95 border border-cream/10 rounded-2xl p-4 shadow-2xl">
                  <div className="flex flex-col gap-1">
                    {sections.map((section) => {
                      const isActive = activeSection === section.id;
                      return (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`px-4 py-4 rounded-xl text-base font-medium transition-all duration-200 ${
                            isActive
                              ? "text-orange bg-orange/10 border border-orange/30"
                              : "text-cream/70 hover:text-cream hover:bg-cream/5"
                          }`}
                        >
                          {section.label}
                        </a>
                      );
                    })}
                  </div>
                  <div className="mt-4 pt-4 border-t border-cream/10 flex items-center justify-center gap-2 text-sm">
                    <span className="text-cream/60">Prepared for</span>
                    <span className="text-orange font-semibold">{clientName}</span>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
