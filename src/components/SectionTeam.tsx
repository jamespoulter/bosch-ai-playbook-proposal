"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const lead = {
  name: "James Poulter",
  title: "Programme Lead & Strategist",
  company: "Founder & CEO, ThreePoint Labs",
  bio: "James is one of the world's most sought-after voices on AI strategy and enterprise transformation. Formerly Head of Emerging Platforms at The LEGO Group — where he launched LEGO Life to 2m+ users — and CEO of Vixen Labs, the UK's pioneering voice AI studio (exited to House 337 in 2023). Author of AI @ Work (Bloomsbury, 2026). Currently Fractional Head of AI at Elvis London and Dunham & Company. As programme lead, James shapes the strategic agenda, chairs executive workshops, and ensures the Bosch AI Playbook is built to last.",
  shortBio: "Global AI strategist, keynote speaker, and author of AI @ Work (Bloomsbury, 2026).",
  photo: "/team/james-poulter.jpg",
  credentials: ["Bloomsbury Author", "250+ keynotes globally", "Former LEGO Head of Emerging Platforms", "Vixen Labs founder & exit"],
};

const team = [
  {
    name: "Esther Smith",
    title: "AI Transformation Consultant",
    company: "ThreePoint Labs",
    bio: "Esther brings deep expertise in organisational change and AI adoption. She specialises in helping large enterprises navigate the human side of AI transformation — building capability, managing change resistance, and embedding lasting behavioural shifts.",
    shortBio: "Organisational change and AI adoption specialist.",
    photo: "/team/esther-smith.jpg",
    color: "orange",
  },
  {
    name: "Susan Westwater",
    title: "AI Strategy & Voice AI Expert",
    company: "CEO, Pragmatic Digital",
    bio: "Co-author of Voice Strategy (Amazon #1 bestseller) and Voice Marketing. Susan advises global brands on AI strategy with particular depth in conversational AI and enterprise AI product development. Background at Leo Burnett and Ricoh USA.",
    shortBio: "Co-author of Voice Strategy (Amazon #1). Enterprise AI advisor.",
    photo: "/team/susan-westwater.jpg",
    color: "gold",
  },
  {
    name: "Jemma",
    title: "AI Operations & Delivery Lead",
    company: "ThreePoint Labs",
    bio: "Jemma manages programme operations, delivery logistics, and stakeholder coordination — ensuring every phase of the Bosch AI Playbook lands on time, on budget, and to the highest standard.",
    shortBio: "Programme operations and delivery excellence.",
    photo: null,
    color: "orange",
  },
];

const colorMap: Record<string, { text: string; bg: string; borderTop: string }> = {
  orange: { text: "text-orange", bg: "bg-orange/10", borderTop: "border-t-orange" },
  gold: { text: "text-gold", bg: "bg-gold/10", borderTop: "border-t-gold" },
};

function InitialsAvatar({ name, color }: { name: string; color: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  const isOrange = color === "orange";
  return (
    <div className={`w-full h-full flex items-center justify-center ${isOrange ? "bg-orange/20" : "bg-gold/20"}`}>
      <span className={`text-4xl font-bold ${isOrange ? "text-orange" : "text-gold"}`}>{initials}</span>
    </div>
  );
}

export default function SectionTeam() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl z-10"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
            World-Class Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-cream mb-6">
            Your Team
          </h2>
          <p className="text-lg sm:text-xl text-cream/75 font-normal max-w-3xl mx-auto">
            Led by James Poulter and supported by a hand-picked team of AI strategists,
            transformation specialists, and delivery experts.
          </p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent mb-10" />

        {/* Lead card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-navy-light border-l-4 border-orange rounded-2xl p-6 sm:p-8 mb-10"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-orange ring-offset-4 ring-offset-navy-light">
                <Image
                  src={lead.photo}
                  alt={lead.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-cream">{lead.name}</h3>
                <span className="inline-flex self-center md:self-auto bg-orange text-navy text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  Programme Lead
                </span>
              </div>
              <p className="text-cream/70 text-sm sm:text-base mb-2">{lead.company}</p>
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed mb-4 max-w-3xl">{lead.shortBio}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {lead.credentials.map((c, i) => (
                  <span key={i} className="bg-orange/10 text-orange/90 text-xs font-medium px-3 py-1.5 rounded-full border border-orange/20">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team cards */}
        <p className="text-cream/40 text-xs text-center mb-3 md:hidden">← Swipe to see all team members →</p>
        <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible snap-x snap-mandatory md:snap-none [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] md:[mask-image:none]">
          {team.map((member, index) => {
            const colors = colorMap[member.color];
            const isExpanded = expanded === member.name;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                onClick={() => setExpanded(isExpanded ? null : member.name)}
                className={`flex-shrink-0 w-[280px] md:w-auto snap-center bg-navy-light rounded-2xl overflow-hidden border border-cream/10 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 ${colors.borderTop} ${isExpanded ? "ring-2 ring-orange/50" : ""}`}
              >
                {/* Photo */}
                <div className="relative aspect-square overflow-hidden">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <InitialsAvatar name={member.name} color={member.color} />
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-base sm:text-lg font-bold text-cream mb-1">{member.name}</h3>
                  <p className={`text-sm font-medium mb-1 ${colors.text}`}>{member.title}</p>
                  <p className="text-cream/60 text-xs mb-3">{member.company}</p>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={isExpanded ? "full" : "short"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`text-cream/70 text-xs leading-relaxed ${isExpanded ? "" : "line-clamp-2"}`}
                    >
                      {isExpanded ? member.bio : member.shortBio}
                    </motion.p>
                  </AnimatePresence>

                  <div className="mt-3 flex items-center justify-center gap-1 text-cream/60">
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

      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
