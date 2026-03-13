"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, BarChart3, ShieldCheck, Workflow, GraduationCap, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "AI Strategy Mapping",
    body: "A bespoke AI roadmap for Bosch — aligned to business priorities, risk appetite, and competitive context. From vision to 90-day execution plan.",
    color: "orange",
  },
  {
    icon: GraduationCap,
    title: "Organisation-Wide Training",
    body: "Modular, role-based AI literacy programmes across all staff levels — from board to frontline. Practical, engaging, and immediately applicable.",
    color: "gold",
  },
  {
    icon: ShieldCheck,
    title: "AI Ethics & Governance Framework",
    body: "A clear, actionable policy framework covering responsible AI use, EU AI Act compliance, risk categorisation, and accountability structures.",
    color: "orange",
  },
  {
    icon: Workflow,
    title: "Workflow Transformation Labs",
    body: "Hands-on working sessions with business units to redesign workflows using AI — identifying the highest-value automation and augmentation opportunities.",
    color: "gold",
  },
  {
    icon: BarChart3,
    title: "ROI & Impact Measurement",
    body: "Custom dashboards and KPI frameworks to track AI adoption, measure productivity gains, and build the data story for continued investment.",
    color: "orange",
  },
  {
    icon: Lightbulb,
    title: "AI Innovation Sprints",
    body: "Facilitated innovation sessions using proven creative methodologies to surface and pilot AI use cases with the highest business impact.",
    color: "gold",
  },
];

export default function SectionPlatform() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl z-10"
      >
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
            Our Solution
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
            The Platform
          </h2>
          <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto">
            ThreePoint&apos;s AI Playbook Programme is a comprehensive, end-to-end transformation
            platform — combining strategy, training, governance, and hands-on delivery into
            one cohesive engagement.
          </p>
        </div>

        {/* 6 Feature Cards using Lucide icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isOrange = feature.color === "orange";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                className="bg-navy-light border border-cream/10 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${isOrange ? "bg-orange/15" : "bg-gold/15"} group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${isOrange ? "text-orange" : "text-gold"}`} />
                </div>
                <h3 className="text-cream font-bold mb-3 text-lg">{feature.title}</h3>
                <p className="text-cream/65 text-sm leading-relaxed">{feature.body}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Platform summary band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-navy-light border border-orange/20 rounded-2xl p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange mb-2">3</div>
              <div className="text-cream/70 text-sm">Transformation Phases</div>
              <div className="text-cream/50 text-xs mt-1">Awakening → Wrestling → Transformation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">6</div>
              <div className="text-cream/70 text-sm">Core Capability Areas</div>
              <div className="text-cream/50 text-xs mt-1">Strategy to measurement, end-to-end</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">100%</div>
              <div className="text-cream/70 text-sm">Tailored to Bosch</div>
              <div className="text-cream/50 text-xs mt-1">No off-the-shelf programmes here</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute top-1/3 right-0 w-80 h-80 bg-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
