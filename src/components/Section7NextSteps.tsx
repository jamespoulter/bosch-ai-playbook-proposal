"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section7NextSteps() {
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
        className="text-center max-w-4xl z-10"
      >
        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-6xl text-orange/30 font-serif leading-none mb-4">&ldquo;</div>
          <blockquote className="text-2xl md:text-4xl font-light text-cream leading-relaxed mb-6">
            This programme does not just report on the Voice AI market
            <span className="text-orange"> — it positions Jabra to lead it.</span>
          </blockquote>
          <div className="text-6xl text-orange/30 font-serif leading-none rotate-180">&ldquo;</div>
        </motion.div>

        {/* Next Steps header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <span className="text-lime text-sm font-medium tracking-widest uppercase mb-4 block">
            Ready to Begin?
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-cream mb-4">
            Next Steps
          </h2>
          <p className="text-xl text-cream/75 font-normal max-w-2xl mx-auto">
            Let&apos;s discuss how this programme can accelerate Jabra&apos;s Voice AI leadership.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="mailto:jp@threepoint.io?subject=Jabra%20Voice%20AI%20Research%20Programme"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-orange hover:bg-orange/90 text-navy font-bold text-lg px-10 py-5 rounded-xl transition-all shadow-lg shadow-orange/25 hover:shadow-xl hover:shadow-orange/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange/50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Start the Conversation</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
          <motion.a
            href="mailto:jemma@poulterventures.com?subject=Jabra%20Voice%20AI%20Programme%20%E2%80%94%20Meeting%20Request&body=Hi%20Jemma%2C%0A%0AI%27d%20like%20to%20schedule%20a%20call%20to%20discuss%20the%20ThreePoint%20Voice%20AI%20Research%20Programme%20for%20Jabra.%0A%0AAvailable%20times%3A%0A%0AName%3A%0ACompany%3A"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-transparent border-2 border-cream/30 hover:border-cream/50 text-cream font-bold text-lg px-10 py-5 rounded-xl transition-all hover:bg-cream/5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cream/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Schedule a Call</span>
          </motion.a>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-cream/60">
            <a
              href="mailto:jp@threepoint.io"
              className="flex items-center gap-2 hover:text-orange transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              jp@threepoint.io
            </a>
            <a
              href="https://threepoint.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              threepoint.io
            </a>
          </div>

          <div className="pt-8 border-t border-cream/10">
            <div className="flex items-center justify-center gap-2 text-cream/60 text-sm">
              <span>James Poulter</span>
              <span>|</span>
              <span className="text-orange">ThreePoint Labs</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Background geometric accents */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-orange/10 rotate-45" />
      <div className="absolute bottom-32 right-20 w-48 h-48 border border-lime/10 rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold rounded-full" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-orange rounded-full" />

      {/* Gradient overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}
