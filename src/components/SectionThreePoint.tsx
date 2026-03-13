"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const credentials = [
  { label: "Clients", value: "50+", sub: "Global enterprise clients" },
  { label: "Keynotes", value: "250+", sub: "Delivered worldwide" },
  { label: "Founded", value: "2023", sub: "Born from 20 years of practice" },
  { label: "Book", value: "2026", sub: "AI @ Work, Bloomsbury" },
];

const clients = ["Amazon", "Verizon", "Bosch", "Bloomsbury", "Universal Music", "LEGO", "House 337", "Dunham & Company", "Biblica", "Stewardship UK"];

const why = [
  {
    title: "Practitioners, Not Theorists",
    body: "ThreePoint was built by people who have actually led AI transformation at scale — inside global enterprises, agencies, and startups. We don't teach from textbooks.",
  },
  {
    title: "Human-First Philosophy",
    body: "We believe AI transformation succeeds when it starts with people. Every programme we design puts culture, capability, and change management at the centre.",
  },
  {
    title: "Ethical by Design",
    body: "As advisors to the Church of England's digital board and contributors to global AI policy discourse, we bring an unusual depth of ethical rigour to our commercial work.",
  },
  {
    title: "Outcomes, Not Outputs",
    body: "We measure success by what changes inside your organisation — not by how many slides we produce. Our goal is always lasting capability, not dependency.",
  },
];

export default function SectionThreePoint() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy-light/50 via-navy to-navy" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl z-10"
      >
        <div className="text-center mb-16">
          <span className="text-orange text-sm font-medium tracking-widest uppercase mb-4 block">
            About Us
          </span>
          <div className="flex justify-center mb-6">
            <Image
              src="/threepoint-logo-transparent.png"
              alt="ThreePoint"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
            Why ThreePoint?
          </h2>
          <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto">
            We are the AI transformation partner for organisations that want to move fast and move well.
            Strategy, training, governance, and delivery — all under one roof, with one point of accountability.
          </p>
        </div>

        {/* Credentials strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="bg-navy-light border border-cream/10 rounded-2xl p-5 text-center"
            >
              <div className="text-3xl font-bold text-orange mb-1">{cred.value}</div>
              <div className="text-cream font-medium text-sm mb-0.5">{cred.label}</div>
              <div className="text-cream/50 text-xs">{cred.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Why cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {why.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-navy-light border border-cream/10 rounded-2xl p-6"
            >
              <div className="w-1 h-8 bg-orange rounded-full mb-4" />
              <h3 className="text-cream font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-cream/70 text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-cream/40 text-sm uppercase tracking-widest mb-6">Trusted by</p>
          <div className="flex flex-wrap justify-center gap-3">
            {clients.map((client, i) => (
              <span
                key={i}
                className="bg-navy-light border border-cream/10 text-cream/60 text-sm px-4 py-2 rounded-full hover:text-cream hover:border-orange/30 transition-colors"
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute top-1/4 right-0 w-80 h-80 bg-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
