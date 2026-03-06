"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

/*
 * Panelist photos: All 5 panelists now have real photos
 */
const panelists = [
  {
    name: "James Poulter",
    region: "UK",
    regionColor: "orange",
    title: "Programme Convener & Chair",
    company: "Founder & CEO, ThreePoint Labs",
    bio: "James is one of the world's most sought-after voices on AI strategy and enterprise transformation. Formerly Head of Emerging Platforms at The LEGO Group (launched LEGO Life to 2m+ users) and CEO of Vixen Labs — the UK's pioneering voice AI studio, exited to House 337 in 2023. Author of AI @ Work (Bloomsbury, 2026). Currently Fractional Head of AI at Elvis London and Dunham & Company. As Convener, James chairs all panel sessions, shapes the research agenda, and leads the Copenhagen and New York workshops.",
    shortBio: "AI strategist, author, and former CEO of Vixen Labs — the UK's pioneering voice AI studio. Convener & Chair of this programme.",
    photo: "/panelists/james-poulter.jpg",
    color: "orange",
    isConvener: true,
  },
  {
    name: "Romina Pankoke",
    region: "Europe",
    regionColor: "indigo",
    title: "Head of Conversational AI Experience Design",
    company: "Vixen Labs / House 337",
    bio: "One of Europe's leading conversational AI and voice UX designers. Founder of Women in Voice Germany chapter. Certified conversational designer, expert in enterprise voice AI across DACH region.",
    shortBio: "Europe's leading conversational AI and voice UX designer. Founder of Women in Voice Germany.",
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
    shortBio: "Creator of VOICE Summit — the world's premier voice technology conference.",
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
    shortBio: "Led AI teams at Microsoft, Amazon Alexa, AWS. Founder of WomenIn.AI.",
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
    shortBio: "Co-author of Voice Strategy (Amazon #1). Advises global brands on voice AI.",
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

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  orange: { bg: "bg-orange/20", text: "text-orange", border: "border-orange/30" },
  lime: { bg: "bg-lime/20", text: "text-lime", border: "border-lime/30" },
  indigo: { bg: "bg-indigo/20", text: "text-indigo", border: "border-indigo/30" },
  gold: { bg: "bg-gold/20", text: "text-gold", border: "border-gold/30" },
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
        className="text-center max-w-7xl z-10"
      >
        <span className="text-lime text-sm font-medium tracking-widest uppercase mb-4 block">
          World-Class Expertise
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-cream mb-4 sm:mb-6">
          The Panel
        </h2>
        <p className="text-lg sm:text-xl text-cream/75 font-normal max-w-3xl mx-auto mb-12 sm:mb-16">
          Led by James Poulter as Convener, and supported by five globally recognised
          Voice AI experts from Europe, the US, and APAC — bringing deep industry experience,
          research credibility, and strategic insight to the programme.
        </p>

        {/* 6-column grid: JP first (full-width or featured), then 5 panelists */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
          {panelists.map((panelist, index) => {
            const colors = colorClasses[panelist.color];
            const regionStyle = regionColors[panelist.regionColor] || { bg: "bg-orange/20", text: "text-orange" };
            const isExpanded = expandedCard === panelist.name;
            const isConvener = (panelist as { isConvener?: boolean }).isConvener;

            return (
              <motion.div
                key={panelist.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                onClick={() => setExpandedCard(isExpanded ? null : panelist.name)}
                className={`relative bg-navy-light rounded-2xl p-4 sm:p-5 border transition-all duration-300 cursor-pointer
                  hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20
                  ${isConvener
                    ? "border-orange/40 hover:border-orange/60 ring-1 ring-orange/20 lg:col-span-2"
                    : "border-cream/10 hover:border-cream/20"}
                  ${isExpanded ? "ring-2 ring-orange/50" : ""}`}
              >
                {/* Convener badge */}
                {isConvener && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-orange text-navy text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      Programme Convener &amp; Chair
                    </span>
                  </div>
                )}
                {/* Region badge */}
                <div className="absolute top-3 right-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${regionStyle.bg} ${regionStyle.text}`}>
                    {panelist.region}
                  </span>
                </div>

                {/* Photo */}
                <div className="flex justify-center mb-4">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-2 ring-cream/20">
                    <Image
                      src={panelist.photo}
                      alt={panelist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-cream mb-1">
                    {panelist.name}
                  </h3>
                  <p className="text-cream/70 text-xs sm:text-sm leading-snug">
                    {panelist.title}
                  </p>
                  <p className={`text-xs sm:text-sm font-medium mt-1 ${colors.text}`}>
                    {panelist.company}
                  </p>
                </div>

                {/* Bio excerpt or full bio */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={isExpanded ? "full" : "short"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-cream/60 text-xs sm:text-sm text-center leading-relaxed"
                  >
                    {isExpanded ? panelist.bio : panelist.shortBio}
                  </motion.p>
                </AnimatePresence>

                {/* Expand hint */}
                <div className="mt-3 text-center">
                  <span className="text-cream/50 text-xs">
                    {isExpanded ? "Click to collapse" : "Click for more"}
                  </span>
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
