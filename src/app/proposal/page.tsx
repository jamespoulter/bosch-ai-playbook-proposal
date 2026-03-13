"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import SectionWelcome from "@/components/SectionWelcome";
import SectionMoment from "@/components/SectionMoment";
import SectionChallenge from "@/components/SectionChallenge";
import SectionPlatform from "@/components/SectionPlatform";
import SectionApproach from "@/components/SectionApproach";
import SectionTeam from "@/components/SectionTeam";
import SectionPricing from "@/components/SectionPricing";
import SectionThreePoint from "@/components/SectionThreePoint";
import SectionNextSteps from "@/components/SectionNextSteps";

const sections = [
  { id: "welcome", label: "Welcome" },
  { id: "moment", label: "Moment" },
  { id: "challenge", label: "Challenge" },
  { id: "platform", label: "Platform" },
  { id: "approach", label: "Approach" },
  { id: "team", label: "Team" },
  { id: "pricing", label: "Pricing" },
  { id: "threepoint", label: "ThreePoint" },
  { id: "nextsteps", label: "Next Steps" },
];

export default function ProposalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("welcome");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = sessionStorage.getItem("bosch-auth");
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
      <Navigation activeSection={activeSection} sections={sections} clientName="Bosch" />

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

      <div id="welcome"><SectionWelcome /></div>
      <div id="moment"><SectionMoment /></div>
      <div id="challenge"><SectionChallenge /></div>
      <div id="platform"><SectionPlatform /></div>
      <div id="approach"><SectionApproach /></div>
      <div id="team"><SectionTeam /></div>
      <div id="pricing"><SectionPricing /></div>
      <div id="threepoint"><SectionThreePoint /></div>
      <div id="nextsteps"><SectionNextSteps /></div>

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
              <span className="text-cream/40 text-sm">Confidential proposal prepared for Bosch</span>
            </div>
            <p className="text-cream/30 text-sm">&copy; {new Date().getFullYear()} ThreePoint Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-orange hover:bg-orange/90 rounded-full flex items-center justify-center shadow-lg shadow-orange/25 transition-all"
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
