"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Schedule a Discovery Call",
    body: "A 45-minute conversation with James Poulter to align on Bosch's specific context, priorities, and the right programme tier for your needs.",
    cta: { label: "Book a call", href: "mailto:jp@threepoint.io?subject=Bosch AI Playbook - Discovery Call" },
    color: "orange",
  },
  {
    number: "02",
    title: "Confirm Scope & Terms",
    body: "We'll produce a tailored Statement of Work confirming the programme scope, timeline, team, and commercial terms within 5 working days of the discovery call.",
    cta: null,
    color: "gold",
  },
  {
    number: "03",
    title: "Kick Off in Week One",
    body: "Once signed, we move fast. Week one is dedicated to stakeholder introductions, discovery sessions, and setting the foundations for a high-impact programme.",
    cta: null,
    color: "orange",
  },
];

export default function SectionNextSteps() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 bg-navy-light overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/60 to-navy" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl z-10"
      >
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
            Let&apos;s Begin
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
            Next Steps
          </h2>
          <p className="text-xl text-cream/75 font-normal max-w-2xl mx-auto">
            The AI Playbook Programme is ready to launch. Here&apos;s how we get started —
            fast, clear, and with no unnecessary complexity.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-16">
          {steps.map((step, index) => {
            const isOrange = step.color === "orange";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                className={`bg-navy rounded-2xl border-l-4 ${isOrange ? "border-orange" : "border-gold"} p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start`}
              >
                <div className={`text-6xl font-bold leading-none ${isOrange ? "text-orange/20" : "text-gold/20"} flex-shrink-0 md:w-20 text-center`}>
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-cream font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-cream/70 text-sm leading-relaxed mb-4">{step.body}</p>
                  {step.cta && (
                    <a
                      href={step.cta.href}
                      className="inline-flex items-center gap-2 bg-orange text-navy font-bold text-sm px-6 py-3 rounded-xl hover:bg-orange/90 transition-colors"
                    >
                      {step.cta.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-navy border border-orange/30 rounded-2xl p-8 md:p-10 text-center"
        >
          <h3 className="text-cream font-bold text-2xl mb-2">Ready to talk?</h3>
          <p className="text-cream/70 mb-6">James Poulter is the direct point of contact for this engagement.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:jp@threepoint.io"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-navy font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-orange/20 w-full sm:w-auto justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              jp@threepoint.io
            </a>
            <a
              href="https://threepoint.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy-light border border-cream/20 hover:border-orange/30 text-cream font-medium px-8 py-4 rounded-xl transition-colors w-full sm:w-auto justify-center"
            >
              <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
              threepoint.io
            </a>
          </div>
        </motion.div>

        {/* Closing quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-cream/40 text-sm mt-10 max-w-xl mx-auto"
        >
          This proposal is confidential and prepared exclusively for Bosch. Please direct any questions
          to <a href="mailto:jp@threepoint.io" className="text-orange hover:underline">jp@threepoint.io</a>.
        </motion.p>
      </motion.div>

      <div className="absolute top-1/4 right-0 w-80 h-80 bg-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
