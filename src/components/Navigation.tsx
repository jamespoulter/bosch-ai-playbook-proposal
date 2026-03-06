"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface NavigationProps {
  activeSection: string;
}

const sections = [
  { id: "welcome", label: "Welcome" },
  { id: "market", label: "Market" },
  { id: "gap", label: "The Gap" },
  { id: "delivers", label: "Delivers" },
  { id: "programme", label: "Programme" },
  { id: "panel", label: "Panel" },
  { id: "pricing", label: "Tiers" },
  { id: "about", label: "ThreePoint" },
  { id: "next", label: "Next Steps" },
];

export default function Navigation({ activeSection }: NavigationProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPdfToast, setShowPdfToast] = useState(false);

  const handlePdfDownload = () => {
    setShowPdfToast(true);
    setTimeout(() => setShowPdfToast(false), 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when section changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activeSection]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-navy/50">
        <motion.div
          className="h-full bg-gradient-to-r from-orange to-lime"
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

              {/* PDF Download + Prepared for Jabra */}
              <div className="hidden md:flex items-center gap-4">
                <button
                  onClick={handlePdfDownload}
                  className="hidden lg:flex items-center gap-2 px-3 py-2 text-sm font-medium text-cream/70 hover:text-cream hover:bg-cream/5 rounded-lg transition-all"
                  title="Download PDF"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>PDF</span>
                </button>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-cream/60">Prepared for</span>
                  <span className="text-orange font-semibold">Jabra</span>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-cream/70 hover:text-cream transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
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
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-hidden="true"
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
                  <span className="text-orange font-semibold">Jabra</span>
                </div>
              </div>
            </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* PDF Toast Notification */}
      <AnimatePresence>
        {showPdfToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-navy-light border border-cream/20 rounded-xl px-6 py-4 shadow-2xl flex items-center gap-3"
          >
            <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-cream text-sm">PDF download coming soon</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
