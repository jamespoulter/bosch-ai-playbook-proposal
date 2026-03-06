"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const beforeItems = [
  "Market position based on hardware excellence alone",
  "Reactive to Voice AI developments",
  "Limited proprietary research & insights",
  "Competitor narratives shaping the conversation",
  "Missed opportunities in adjacent markets",
];

const afterItems = [
  "Recognised thought leader in Voice AI workplace solutions",
  "Proactive strategy backed by exclusive research",
  "Proprietary data informing product roadmap",
  "Owning the narrative with C-suite audiences",
  "First-mover advantage in new revenue streams",
];

export default function Section3TheGap() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-6xl z-10"
      >
        <span className="text-lime text-sm font-medium tracking-widest uppercase mb-4 block">
          The Strategic Imperative
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
          The Gap
        </h2>
        <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto mb-16">
          The distance between where Jabra is today and where this programme takes you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
          {/* Before Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-navy-light rounded-2xl p-8 border border-cream/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-cream/40 rounded-full" />
              <h3 className="text-2xl font-bold text-cream/60">Where Jabra is today</h3>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 text-left"
                >
                  <span className="text-cream/50 mt-1">—</span>
                  <span className="text-cream/60">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-orange/10 to-navy-light rounded-2xl p-8 border border-orange/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-orange rounded-full animate-pulse" />
              <h3 className="text-2xl font-bold text-orange">Where this programme takes you</h3>
            </div>
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 text-left"
                >
                  <span className="text-orange mt-1">+</span>
                  <span className="text-cream">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Arrow indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        >
          <div className="w-16 h-16 bg-navy rounded-full border-2 border-orange flex items-center justify-center">
            <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
