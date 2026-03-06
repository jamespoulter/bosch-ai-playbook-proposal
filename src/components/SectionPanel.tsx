"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const convener = {
  name: "James Poulter",
  region: "UK",
  title: "Programme Convener & Chair",
  company: "Founder & CEO, ThreePoint Labs",
  bio: "James is one of the world's most sought-after voices on AI strategy and enterprise transformation. Formerly Head of Emerging Platforms at The LEGO Group (launched LEGO Life to 2m+ users) and CEO of Vixen Labs — the UK's pioneering voice AI studio, exited to House 337 in 2023. Author of AI @ Work (Bloomsbury, 2026). Currently Fractional Head of AI at Elvis London and Dunham & Company. As Convener, James chairs all panel sessions, shapes the research agenda, and leads the Copenhagen and New York workshops.",
  shortBio: "AI strategist, author, and former CEO of Vixen Labs — the UK's pioneering voice AI studio.",
  photo: "/panelists/james-poulter.jpg",
  credentials: ["Vixen Labs founder", "250+ keynotes", "AI @ Work, Bloomsbury 2026"],
};

const panelists = [
  {
    name: "Romina Pankoke",
    region: "Europe",
    regionColor: "indigo",
    title: "Head of Conversational AI Experience Design",
    company: "Vixen Labs / House 337",
    bio: "One of Europe's leading conversational AI and voice UX designers. Founder of Women in Voice Germany chapter. Certified conversational designer, expert in enterprise voice AI across DACH region.",
    shortBio: "Europe's leading conversational AI and voice UX designer.",
    photo: "/panelists/romina-pankoke.jpg",
    color: "indigo",
  },
  {
    name: "Pete Erickson",
    region: "USA",
    regionColor: "orange",
    title: "Founder, Modev; Creator, VOICE Summit",
    company: "Tech Ecosystem Institute",
    bio: "Creator of VOICE Summit — the world's premier voice technology conference. 12+ years building the global voice AI community. Executive Director, Tech Ecosystem Institute.",
    shortBio: "Creator of VOICE Summit — the world's premier voice tech conference.",
    photo: "/panelists/pete-erickson.jpg",
    color: "orange",
  },
  {
    name: "Noelle Russell",
    region: "USA",
    regionColor: "orange",
    title: "Founder, AI Leadership Institute",
    company: "Five-time Microsoft AI MVP",
    bio: "Led AI teams at Microsoft, Amazon Alexa, AWS, IBM, NPR, Accenture (Global AI Solutions Lead). Multi-award-winning technologist. Founder of WomenIn.AI.",
    shortBio: "Led AI teams at Microsoft, Alexa, AWS. Founder of WomenIn.AI.",
    photo: "/panelists/noelle-russell.jpg",
    color: "lime",
  },
  {
    name: "Susan Westwater",
    region: "USA",
    regionColor: "orange",
    title: "Co-Author, Voice Strategy & Voice Marketing",
    company: "CEO, Pragmatic Digital",
    bio: "Co-author of Voice Strategy (Amazon #1) and Voice Marketing (2023). Advises global brands on voice AI strategy. Background at Leo Burnett and Ricoh USA.",
    shortBio: "Co-author of Voice Strategy (Amazon #1). Voice AI strategist.",
    photo: "/panelists/susan-westwater.png",
    color: "gold",
  },
  {
    name: "Dr. Toby Walsh",
    region: "APAC",
    regionColor: "lime",
    title: "Professor of AI, UNSW Sydney",
    company: "Fellow, Australian Academy of Science",
    bio: "Author of multiple AI books including \"It's Alive!\" and \"2062: The World That AI Made\". Advises governments and enterprises globally. Keynote speaker at major global tech conferences.",
    shortBio: "Author of \"2062: The World That AI Made\". Advises governments globally.",
    photo: "/panelists/toby-walsh.jpg",
    color: "orange",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; borderTop: string }> = {
  orange: { bg: "bg-orange/20", text: "text-orange", border: "border-orange/30", borderTop: "border-t-orange" },
  lime: { bg: "bg-lime/20", text: "text-lime", border: "border-lime/30", borderTop: "border-t-lime" },
  indigo: { bg: "bg-indigo/20", text: "text-indigo", border: "border-indigo/30", borderTop: "border-t-indigo" },
  gold: { bg: "bg-gold/20", text: "text-gold", border: "border-gold/30", borderTop: "border-t-gold" },
};

const regionColors: Record<string, { bg: string; text: string }> = {
  indigo: { bg: "bg-indigo/20", text: "text-indigo" },
  orange: { bg: "bg-orange/20", text: "text-orange" },
  lime: { bg: "bg-lime/20", text: "text-lime" },
};

export default function SectionPanel() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 py-20 sm:py-24 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-lime text-sm font-medium tracking-widest uppercase mb-4 block">
            World-Class Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-cream mb-4 sm:mb-6">
            The Panel
          </h2>
          <p className="text-lg sm:text-xl text-cream/75 font-normal max-w-3xl mx-auto">
            Led by James Poulter as Convener, and supported by five globally recognised
            Voice AI experts from Europe, the US, and APAC.
          </p>
        </div>

        {/* Horizontal divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent mb-10" />

        {/* JP Convener Block - Full Width Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-navy-light border-l-4 border-orange rounded-2xl p-6 sm:p-8 mb-10"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            {/* Large circular photo with orange ring */}
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-orange ring-offset-4 ring-offset-navy-light">
                <Image
                  src={convener.photo}
                  alt={convener.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-cream">
                  {convener.name}
                </h3>
                <span className="inline-flex self-center md:self-auto bg-orange text-navy text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  Programme Convener &amp; Chair
                </span>
              </div>

              <p className="text-cream/70 text-sm sm:text-base mb-2">
                {convener.company}
              </p>

              <p className="text-cream/80 text-sm sm:text-base leading-relaxed mb-4 max-w-3xl">
                {convener.shortBio}
              </p>

              {/* Credential chips */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {convener.credentials.map((credential, i) => (
                  <span
                    key={i}
                    className="bg-orange/10 text-orange/90 text-xs font-medium px-3 py-1.5 rounded-full border border-orange/20"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 5 Panelists - Portrait Cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-5 md:gap-5 md:overflow-visible snap-x snap-mandatory md:snap-none">
          {panelists.map((panelist, index) => {
            const colors = colorClasses[panelist.color];
            const regionStyle = regionColors[panelist.regionColor] || { bg: "bg-orange/20", text: "text-orange" };
            const isExpanded = expandedCard === panelist.name;

            return (
              <motion.div
                key={panelist.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                onClick={() => setExpandedCard(isExpanded ? null : panelist.name)}
                className={`flex-shrink-0 w-[280px] md:w-auto snap-center bg-navy-light rounded-2xl overflow-hidden border border-cream/10 cursor-pointer transition-all duration-300
                  hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20 border-t-4 ${colors.borderTop}
                  ${isExpanded ? "ring-2 ring-orange/50" : ""}`}
              >
                {/* Photo - Square aspect ratio at top */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={panelist.photo}
                    alt={panelist.name}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                  {/* Region badge top-right */}
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm ${regionStyle.bg} ${regionStyle.text}`}>
                      {panelist.region}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-base sm:text-lg font-bold text-cream mb-1">
                    {panelist.name}
                  </h3>
                  <p className={`text-sm font-medium mb-1 ${colors.text}`}>
                    {panelist.title}
                  </p>
                  <p className="text-cream/60 text-xs mb-3">
                    {panelist.company}
                  </p>

                  {/* Bio excerpt or full bio */}
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={isExpanded ? "full" : "short"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-cream/70 text-xs leading-relaxed line-clamp-2"
                    >
                      {isExpanded ? panelist.bio : panelist.shortBio}
                    </motion.p>
                  </AnimatePresence>

                  {/* Expand indicator */}
                  <div className="mt-3 flex items-center justify-center gap-1 text-cream/40">
                    <span className="text-xs">{isExpanded ? "Less" : "More"}</span>
                    <motion.svg
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-indigo/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl" />
    </section>
  );
}
