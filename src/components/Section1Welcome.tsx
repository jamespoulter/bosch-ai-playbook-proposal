"use client";

import { motion } from "framer-motion";

export default function Section1Welcome() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-24 md:pt-20">
      {/* Geometric accent shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 border border-orange/20 rounded-full animate-pulse hidden sm:block" />
      <div className="absolute bottom-32 left-16 w-48 h-48 border border-lime/20 rotate-45 hidden sm:block" />
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-orange rounded-full hidden sm:block" />
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-lime rounded-full hidden sm:block" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl z-10"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-block text-lime text-sm font-medium tracking-widest uppercase mb-6"
        >
          Confidential Proposal
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-[1.05]"
        >
          Voice AI
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="block text-orange"
          >
            Research Programme
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-cream/80 font-normal mb-12"
        >
          A strategic research initiative to position Jabra
          <br className="hidden md:block" /> as the authority on Voice AI in the workplace
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-cream/60 text-sm uppercase tracking-wider">Prepared for Jabra by</span>
          <span className="text-orange text-lg font-semibold">James Poulter / ThreePoint</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream/60 text-xs uppercase tracking-wider">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-orange rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
