"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Zap, Globe, Brain } from "lucide-react";

const stats = [
  { value: "77%", label: "of executives say AI will be the most transformative technology of our lifetime", color: "text-orange" },
  { value: "3×", label: "faster productivity growth in organisations with structured AI adoption programmes", color: "text-gold" },
  { value: "$4.4T", label: "projected annual value AI could add to the global economy by 2030", color: "text-orange" },
  { value: "2026", label: "is the tipping point — companies acting now will define the next decade", color: "text-gold" },
];

const signals = [
  {
    icon: TrendingUp,
    title: "The Competitive Gap is Widening",
    body: "Early AI adopters are pulling ahead. Organisations without a clear AI strategy are already losing ground — in talent, efficiency, and customer experience.",
  },
  {
    icon: Zap,
    title: "Generative AI Has Crossed the Chasm",
    body: "LLMs and agentic AI are no longer experimental. They are production-ready and being deployed at scale across product, operations, HR, and finance.",
  },
  {
    icon: Globe,
    title: "Global Standards Are Being Set Now",
    body: "EU AI Act, ISO 42001, and emerging global frameworks mean that organisations who build ethical, governed AI today will shape the standards of tomorrow.",
  },
  {
    icon: Brain,
    title: "The Human Layer Is the Differentiator",
    body: "Technology is no longer the bottleneck. The organisations that win are those that invest in people — building AI fluency, judgment, and cross-functional capability.",
  },
];

export default function SectionMoment() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/30 to-navy" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl z-10"
      >
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
            Why Now
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
            The AI Moment
          </h2>
          <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto">
            We are at an inflection point. The organisations that build robust AI capability now will
            define their industries for the next decade. The window to lead is open — but not for long.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-navy-light border border-cream/10 rounded-2xl p-6 text-center"
            >
              <div className={`text-4xl md:text-5xl font-bold mb-3 ${stat.color}`}>{stat.value}</div>
              <p className="text-cream/70 text-sm leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Signal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {signals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-navy-light border border-cream/10 rounded-2xl p-6 flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-orange/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <h3 className="text-cream font-semibold mb-2">{signal.title}</h3>
                  <p className="text-cream/70 text-sm leading-relaxed">{signal.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 border-l-4 border-orange pl-6 max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-cream/90 italic leading-relaxed">
            &ldquo;The question is no longer whether to adopt AI — it&apos;s whether you have the strategy,
            the people, and the playbook to do it well.&rdquo;
          </p>
          <footer className="mt-4 text-orange font-semibold">James Poulter, ThreePoint</footer>
        </motion.blockquote>
      </motion.div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
