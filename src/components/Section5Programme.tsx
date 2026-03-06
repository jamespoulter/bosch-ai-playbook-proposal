"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactElement } from "react";
import Image from "next/image";

const phases = [
  {
    id: 1,
    name: "Foundation",
    timeline: "Months 1–3",
    color: "gold",
    icon: "foundation",
    deliverables: [
      "Expert panel assembly: recruit and onboard 5 global voice AI specialists",
      "Baseline landscape report: current state of Voice AI in enterprise — market sizing, competitor mapping, emerging technology audit",
      "3 executive interviews with Jabra leadership (CMO, Product, Strategy)",
      "Panel kick-off session: facilitated virtual workshop, agenda set for year",
      "Quarterly newsletter #1: distributed to Jabra leadership team",
      "Research brief development: scoping the annual major study",
    ],
  },
  {
    id: 2,
    name: "Insight",
    timeline: "Months 4–9",
    color: "orange",
    icon: "insight",
    deliverables: [
      "Quarterly tracker study launch: Wave 1 + Wave 2 across 5 markets (UK, US, DACH, Nordics, APAC) via Delineate",
      "Copenhagen Workshop (May 2026): 2-day facilitated expert session at Jabra HQ; outputs — strategic recommendations, product feedback, market positioning insights",
      "Interim report (Month 6): mid-year synthesis of tracker data + panel insights + executive interviews",
      "Panel Session 2: review of interim findings, forward agenda",
      "Quarterly newsletters #2 + #3",
      "12 executive interviews (Jabra customers + prospects + industry leaders)",
    ],
  },
  {
    id: 3,
    name: "Leadership",
    timeline: "Months 10–12",
    color: "lime",
    icon: "leadership",
    deliverables: [
      "Wave 3 + Wave 4 tracker study: completing annual cycle across all 5 markets",
      "Annual major study: full publication-ready research report, designed for external release and PR amplification",
      "3 update reports: focused deep-dives on AI agents in enterprise, voice hardware evolution, workforce adoption trends",
      "New York Summit (Nov 2026): 1-day event bringing together panel, Jabra leadership, key customers and press",
      "Final panel session: year-end debrief, recommendations for Year 2",
      "Briefing pack for investor + analyst relations use",
      "Ongoing advisory access through year end",
    ],
  },
];

function PhaseIcon({ type, className }: { type: string; className?: string }) {
  const icons: Record<string, ReactElement> = {
    foundation: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
    insight: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
    leadership: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  };
  return icons[type] || null;
}

const colorClasses: Record<string, { bg: string; text: string; border: string; node: string; glow: string }> = {
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/40", node: "bg-gold", glow: "shadow-gold/30" },
  orange: { bg: "bg-orange/10", text: "text-orange", border: "border-orange/40", node: "bg-orange", glow: "shadow-orange/30" },
  lime: { bg: "bg-lime/10", text: "text-lime", border: "border-lime/40", node: "bg-lime", glow: "shadow-lime/30" },
};

const keyEvents = [
  {
    name: "Copenhagen Workshop",
    date: "May 2026",
    location: "Jabra HQ, Denmark",
    description: "2-day facilitated expert session with the full panel",
  },
  {
    name: "New York Summit",
    date: "November 2026",
    location: "New York City, USA",
    description: "1-day event with panel, Jabra leadership, customers and press",
  },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export default function Section5Programme() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-start relative px-4 sm:px-6 py-16 sm:py-24 overflow-hidden"
    >
      {/* World map / global connectivity background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)" }}
      />


      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl z-10 mb-12 sm:mb-16"
      >
        <span className="text-lime text-sm font-medium tracking-widest uppercase mb-4 block">
          12-Month Journey
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-cream mb-4 sm:mb-6">
          The Programme
        </h2>
        <p className="text-lg sm:text-xl text-cream/75 font-normal max-w-3xl mx-auto">
          A 12-month research and intelligence programme in three phases
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="w-full max-w-5xl relative">
        {/* Vertical spine - hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange/30 -translate-x-1/2" />

        {/* Phases */}
        {phases.map((phase, index) => {
          const colors = colorClasses[phase.color];
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative mb-8 sm:mb-12 md:mb-16"
            >
              {/* Timeline node - centered on desktop */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10">
                <div className={`w-5 h-5 rounded-full ${colors.node} shadow-lg ${colors.glow} ring-4 ring-navy`} />
              </div>

              {/* Content wrapper */}
              <div className={`md:grid md:grid-cols-2 md:gap-8 items-start`}>
                {/* Phase label side */}
                <div className={`${isLeft ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"} mb-4 md:mb-0`}>
                  <div className={`inline-flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                    <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <PhaseIcon type={phase.icon} className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <div className={isLeft ? "md:text-right" : ""}>
                      <h3 className={`text-xl sm:text-2xl font-bold ${colors.text}`}>
                        Phase {phase.id}: {phase.name}
                      </h3>
                      <p className="text-cream/60 text-sm">{phase.timeline}</p>
                    </div>
                  </div>
                </div>

                {/* Deliverables side */}
                <div className={`${isLeft ? "md:col-start-2 md:pl-12" : "md:row-start-1 md:pr-12 md:text-right"}`}>
                  <div className={`bg-navy-light rounded-2xl p-5 sm:p-6 border ${colors.border}`}>
                    <ul className="space-y-3">
                      {phase.deliverables.map((deliverable, dIndex) => (
                        <motion.li
                          key={dIndex}
                          initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + index * 0.15 + dIndex * 0.05 }}
                          className={`flex gap-3 ${!isLeft ? "md:flex-row-reverse md:text-left" : ""}`}
                        >
                          <CheckIcon />
                          <span className="text-cream/80 text-sm leading-relaxed">{deliverable}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Key Events */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="w-full max-w-5xl mt-8 sm:mt-16"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-cream mb-6 sm:mb-8 text-center">Key Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {keyEvents.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="bg-gradient-to-br from-orange/10 to-transparent rounded-2xl p-5 sm:p-6 border border-orange/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange/20 flex items-center justify-center text-orange flex-shrink-0">
                  <MapPinIcon />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-orange mb-1">{event.name}</h4>
                  <p className="text-cream font-medium text-sm">{event.date}</p>
                  <p className="text-cream/60 text-sm">{event.location}</p>
                  <p className="text-cream/70 text-sm mt-2">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Research Partners */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="w-full max-w-5xl mt-12 sm:mt-16"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-cream mb-6 sm:mb-8 text-center">Research Partners</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Delineate */}
          <div className="bg-navy-light rounded-2xl p-5 sm:p-6 border border-lime/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white flex items-center justify-center overflow-hidden p-2">
                <Image
                  src="/partners/delineate-logo.png"
                  alt="Delineate"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-lime">Delineate</h4>
                <p className="text-cream/60 text-sm">Primary quantitative research partner</p>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Conducts quarterly tracker study across 5 global markets. Specialist in enterprise
              technology research. Provides statistically robust data underpinning all programme reports.
            </p>
          </div>

          {/* ThreePoint Labs */}
          <div className="bg-navy-light rounded-2xl p-5 sm:p-6 border border-orange/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white flex items-center justify-center overflow-hidden p-2">
                <Image
                  src="/threepoint-logo-transparent.png"
                  alt="ThreePoint Labs"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-orange">ThreePoint Labs</h4>
                <p className="text-cream/60 text-sm">Programme Director</p>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-2">
              James Poulter (jp@threepoint.io) leads the programme. AI transformation consultancy
              with deep enterprise AI expertise.
            </p>
            <p className="text-cream/60 text-xs">
              Trusted by Amazon, Verizon, Bosch, Bloomsbury, Universal Music, LEGO.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-lime/5 rounded-full blur-3xl" />
    </section>
  );
}
