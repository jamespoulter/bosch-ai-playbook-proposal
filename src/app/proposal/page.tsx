"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Section1Welcome from "@/components/Section1Welcome";
import Section2MarketMoment from "@/components/Section2MarketMoment";
import Section3TheGap from "@/components/Section3TheGap";
import Section4WhatDelivers from "@/components/Section4WhatDelivers";
import Section5Programme from "@/components/Section5Programme";
import SectionPanel from "@/components/SectionPanel";
import Section6PricingTiers from "@/components/Section6PricingTiers";
import SectionAboutThreePoint from "@/components/SectionAboutThreePoint";
import Section7NextSteps from "@/components/Section7NextSteps";

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

export default function ProposalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("welcome");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = sessionStorage.getItem("jabra-auth");
    if (auth !== "true") {
      router.push("/");
    } else {
      setIsAuthenticated(true);
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const handleScroll = () => {
      const sectionElements = sections.map((s) => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }

      // Show back-to-top button after scrolling 500px
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAuthenticated]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-orange border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className="relative bg-navy">
      {/* Top Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Side Navigation dots */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center gap-3"
            title={section.label}
          >
            <span className="opacity-0 group-hover:opacity-100 text-cream/60 text-xs transition-opacity">
              {section.label}
            </span>
            <motion.div
              animate={{
                scale: activeSection === section.id ? 1.5 : 1,
                backgroundColor: activeSection === section.id ? "#f46c42" : "rgba(239, 214, 189, 0.3)",
              }}
              className="w-2 h-2 rounded-full"
            />
          </a>
        ))}
      </nav>

      {/* Section 1: Welcome */}
      <div id="welcome">
        <Section1Welcome />
      </div>

      {/* Section 2: The Market Moment */}
      <div id="market">
        <Section2MarketMoment />
      </div>

      {/* Section 3: The Gap */}
      <div id="gap">
        <Section3TheGap />
      </div>

      {/* Section 4: What This Delivers */}
      <div id="delivers">
        <Section4WhatDelivers />
      </div>

      {/* Section 5: The Programme */}
      <div id="programme">
        <Section5Programme />
      </div>

      {/* Section 6: The Panel */}
      <div id="panel">
        <SectionPanel />
      </div>

      {/* Section 7: Choose Your Level */}
      <div id="pricing">
        <Section6PricingTiers />
      </div>

      {/* Section 8: About ThreePoint */}
      <div id="about">
        <SectionAboutThreePoint />
      </div>

      {/* Section 9: Next Steps */}
      <div id="next">
        <Section7NextSteps />
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/threepoint-logo-transparent.png"
                alt="ThreePoint Labs"
                width={120}
                height={35}
                className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
              />
              <span className="text-cream/30 text-sm">|</span>
              <span className="text-cream/40 text-sm">Confidential proposal prepared for Jabra / GN Audio</span>
            </div>
            <p className="text-cream/30 text-sm">&copy; {new Date().getFullYear()} ThreePoint Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-orange hover:bg-orange/90 rounded-full flex items-center justify-center shadow-lg shadow-orange/25 hover:shadow-xl hover:shadow-orange/30 transition-all"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
