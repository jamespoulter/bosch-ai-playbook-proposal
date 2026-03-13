"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    number: "01",
    phase: "Awakening",
    title: "Discover & Diagnose",
    duration: "Weeks 1–4",
    color: "orange",
    steps: [
      "Deep-dive discovery sessions with Bosch leadership",
      "AI maturity audit across business units",
      "Competitive landscape and benchmarking analysis",
      "Stakeholder interviews and employee sentiment mapping",
      "Current-state AI inventory and governance review",
    ],
    outcome: "A clear picture of where Bosch stands, where the gaps are, and where the greatest opportunities lie.",
  },
  {
    number: "02",
    phase: "Wrestling",
    title: "Design & Build",
    duration: "Weeks 5–12",
    color: "gold",
    steps: [
      "Co-creation of the Bosch AI Playbook with key stakeholders",
      "AI ethics policy and governance framework development",
      "Role-based training programme design and delivery",
      "Workflow transformation labs with selected business units",
      "Pilot AI use case identification and feasibility assessment",
    ],
    outcome: "A living AI Playbook, trained teams, and 2–3 validated AI pilots ready for scale.",
  },
  {
    number: "03",
    phase: "Transformation",
    title: "Embed & Scale",
    duration: "Weeks 13–20",
    color: "orange",
    steps: [
      "Playbook rollout across the wider organisation",
      "AI Champions programme — internal advocates and enablers",
      "ROI measurement framework implementation",
      "Ongoing coaching and advisory for AI leadership team",
      "Innovation sprint to surface next-horizon opportunities",
    ],
    outcome: "AI is no longer an experiment — it's embedded in how Bosch operates, competes, and grows.",
  },
];

export default function SectionApproach() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 bg-navy-light overflow-hidden"
    >
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange/[0.03] rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl z-10"
      >
        <div className="text-center mb-16">
          <span className="text-orange text-sm font-medium tracking-widest uppercase mb-4 block">
            How We Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
            Our Approach
          </h2>
          <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto">
            ThreePoint&apos;s three-phase methodology mirrors the natural journey every organisation
            takes with AI — from awakening to wrestling to transformation. We meet you where you are
            and guide you to where you need to be.
          </p>
        </div>

        {/* Timeline phases */}
        <div className="space-y-6">
          {phases.map((phase, index) => {
            const isOrange = phase.color === "orange";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                className={`bg-navy rounded-2xl border-l-4 ${isOrange ? "border-orange" : "border-gold"} overflow-hidden`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Phase header */}
                    <div className="md:w-48 flex-shrink-0">
                      <div className={`text-6xl font-bold ${isOrange ? "text-orange/20" : "text-gold/20"} leading-none mb-2`}>
                        {phase.number}
                      </div>
                      <div className={`text-sm font-bold uppercase tracking-widest ${isOrange ? "text-orange" : "text-gold"} mb-1`}>
                        {phase.phase}
                      </div>
                      <div className="text-cream font-bold text-lg mb-1">{phase.title}</div>
                      <div className="text-cream/50 text-sm">{phase.duration}</div>
                    </div>

                    {/* Divider */}
                    <div className={`hidden md:block w-px ${isOrange ? "bg-orange/20" : "bg-gold/20"}`} />

                    {/* Steps */}
                    <div className="flex-1">
                      <ul className="space-y-2 mb-4">
                        {phase.steps.map((step, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 + index * 0.15 + i * 0.04 }}
                            className="flex items-start gap-2 text-sm text-cream/80"
                          >
                            <svg
                              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isOrange ? "text-orange" : "text-gold"}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {step}
                          </motion.li>
                        ))}
                      </ul>
                      <div className={`text-sm font-medium ${isOrange ? "text-orange" : "text-gold"} italic`}>
                        → {phase.outcome}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-orange">20 weeks</div>
            <div className="text-cream/60 text-sm">Full programme duration</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-cream/20" />
          <div>
            <div className="text-3xl font-bold text-gold">Bespoke</div>
            <div className="text-cream/60 text-sm">Adapted to Bosch's pace and context</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-cream/20" />
          <div>
            <div className="text-3xl font-bold text-orange">Embedded</div>
            <div className="text-cream/60 text-sm">Capability stays inside Bosch, not in a consultant's deck</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
