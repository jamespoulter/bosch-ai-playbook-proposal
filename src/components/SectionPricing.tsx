"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const tiers = [
  {
    id: "foundation",
    name: "Foundation",
    subtitle: "AI Readiness Sprint",
    price: "$30,000",
    duration: "6 weeks",
    color: "cream",
    recommended: false,
    description: "Fast-track AI readiness assessment and strategy foundations for Bosch leadership.",
    deliverables: [
      "AI maturity audit (2 business units)",
      "Executive AI literacy workshop (half-day)",
      "AI Opportunities Map",
      "Starter governance & ethics framework",
      "90-day AI action plan",
      "Programme lead advisory (10 hrs)",
    ],
  },
  {
    id: "accelerator",
    name: "Accelerator",
    subtitle: "Full AI Playbook",
    price: "$60,000",
    duration: "12 weeks",
    color: "orange",
    recommended: true,
    description: "The complete AI Playbook programme — strategy, training, governance, and pilot delivery.",
    deliverables: [
      "All Foundation deliverables, plus:",
      "Organisation-wide AI training (3 cohorts)",
      "Full AI Ethics & Governance Policy",
      "2× Workflow Transformation Labs",
      "AI Champion Programme launch",
      "ROI measurement framework",
      "Pilot use case design & feasibility",
      "Monthly advisory sessions (3 months)",
    ],
  },
  {
    id: "transformation",
    name: "Transformation",
    subtitle: "Enterprise-Wide Scale",
    price: "$90,000",
    duration: "20 weeks",
    color: "gold",
    recommended: false,
    description: "End-to-end transformation engagement — embedding AI across the full Bosch enterprise.",
    deliverables: [
      "All Accelerator deliverables, plus:",
      "Unlimited business unit scope",
      "AI Innovation Sprint (2-day facilitated)",
      "Leadership coaching circle (6 sessions)",
      "AI Champions network (20+ champions)",
      "Vendor evaluation & tool selection support",
      "Quarterly review & roadmap refresh",
      "Executive keynote & board presentation",
    ],
  },
];

export default function SectionPricing() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<string>("accelerator");

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 bg-navy-light overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full border border-gold/[0.05] pointer-events-none" />
      <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full bg-orange/[0.025] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl z-10"
      >
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
            Investment Options
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
            Choose Your Level
          </h2>
          <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto">
            Three tiers designed to match Bosch&apos;s strategic ambitions and timeline.
            All prices in USD, exclusive of applicable taxes.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, index) => {
            const isSelected = selected === tier.id;
            const isAccelerator = tier.id === "accelerator";
            const isTransformation = tier.id === "transformation";

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                onClick={() => setSelected(tier.id)}
                className={`relative rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? isAccelerator
                      ? "border-orange bg-gradient-to-b from-orange/15 to-navy scale-[1.02]"
                      : isTransformation
                      ? "border-gold bg-gradient-to-b from-gold/15 to-navy scale-[1.02]"
                      : "border-cream/40 bg-navy scale-[1.02]"
                    : "border-cream/10 bg-navy hover:border-cream/30"
                }`}
              >
                {/* Recommended badge */}
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-orange text-navy text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-orange/30 animate-pulse">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="mb-5 pt-4">
                  <h3 className={`text-2xl font-bold mb-1 ${isSelected && isAccelerator ? "text-orange" : isSelected && isTransformation ? "text-gold" : "text-cream"}`}>
                    {tier.name}
                  </h3>
                  <p className="text-cream/60 text-sm">{tier.subtitle}</p>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className={`text-4xl font-bold ${isSelected && isAccelerator ? "text-orange" : isSelected && isTransformation ? "text-gold" : "text-orange"}`}>
                    {tier.price}
                  </div>
                  <div className="text-cream/50 text-sm mt-1">{tier.duration} programme</div>
                </div>

                <p className="text-cream/70 text-sm mb-5 leading-relaxed">{tier.description}</p>

                {/* Deliverables */}
                <div className="border-t border-cream/10 pt-5">
                  <ul className="space-y-2.5">
                    {tier.deliverables.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 + i * 0.04 }}
                        className="flex items-start gap-2 text-sm"
                      >
                        <svg
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isAccelerator || isSelected ? "text-orange" : "text-gold"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`${item.startsWith("All") ? "text-cream font-medium" : "text-cream/80"}`}>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <div className={`text-xs ${isSelected ? "text-orange" : "text-cream/50"}`}>
                    {isSelected ? "✓ Selected" : "Click to select"}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
        >
          <a
            href="#nextsteps"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-navy font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-orange/20"
          >
            Discuss this programme
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <span className="text-cream/60 text-sm">or scroll to see next steps</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-cream/50 text-xs text-center mt-6"
        >
          All prices in USD. Custom enterprise packages available on request. Flexible payment terms available.
        </motion.p>
      </motion.div>

      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-orange/5 rounded-full blur-3xl" />
    </section>
  );
}
