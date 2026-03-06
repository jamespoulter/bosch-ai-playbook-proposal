"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const tiers = [
  {
    id: "bronze",
    name: "Bronze",
    subtitle: "Foundation",
    price: "£95,000",
    duration: "3 months",
    color: "cream",
    recommended: false,
    deliverables: [
      "Expert panel assembly (5 global experts)",
      "Baseline landscape report",
      "3× executive interviews",
      "Quarterly newsletter",
      "Access to panel insights",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    subtitle: "Growth",
    price: "£215,000",
    duration: "12 months",
    color: "cream",
    recommended: false,
    deliverables: [
      "All Bronze benefits, plus:",
      "Copenhagen workshop (May 2026)",
      "Quarterly tracker study (2 markets)",
      "Interim report (6 months)",
      "2× panel sessions",
      "Strategic advisory calls (monthly)",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    subtitle: "Full Programme",
    price: "£419,500",
    duration: "12 months",
    color: "gold",
    recommended: true,
    deliverables: [
      "All Silver benefits, plus:",
      "Quarterly tracker study (5 markets via Delineate)",
      "New York follow-up summit (Nov 2026)",
      "Annual major study publication",
      "3× update reports",
      "Ongoing advisory panel access",
      "Exclusive research access",
    ],
  },
];

export default function Section6PricingTiers() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [selectedTier, setSelectedTier] = useState<string | null>("gold");

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 bg-navy-light"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-6xl z-10"
      >
        <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
          Investment Options
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
          Choose Your Level
        </h2>
        <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto mb-16">
          Three tiers designed to match your strategic ambitions and budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => {
            const isSelected = selectedTier === tier.id;
            const isGold = tier.id === "gold";

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                onClick={() => setSelectedTier(tier.id)}
                className={`relative rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? isGold
                      ? "border-gold bg-gradient-to-b from-gold/20 to-navy scale-[1.02]"
                      : "border-orange bg-navy scale-[1.02]"
                    : "border-cream/10 bg-navy hover:border-cream/30"
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-navy text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider animate-pulse shadow-lg shadow-gold/30">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="mb-6 pt-4">
                  <h3 className={`text-2xl font-bold ${isGold && isSelected ? "text-gold" : "text-cream"}`}>
                    {tier.name}
                  </h3>
                  <p className="text-cream/60 text-sm">{tier.subtitle}</p>
                </div>

                <div className="mb-6">
                  <div className={`text-4xl font-bold ${isGold && isSelected ? "text-gold" : "text-orange"}`}>
                    {tier.price}
                  </div>
                  <div className="text-cream/60 text-sm">{tier.duration}</div>
                </div>

                {/* Deliverables always visible */}
                <div className="border-t border-cream/10 pt-6">
                  <ul className="space-y-3 text-left">
                    {tier.deliverables.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                        className="flex items-start gap-2 text-sm"
                      >
                        <svg
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isGold ? "text-gold" : "text-orange"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-cream/80">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <div className={`text-xs ${isSelected ? (isGold ? "text-gold" : "text-orange") : "text-cream/50"}`}>
                    {isSelected ? "Selected" : "Click to select"}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 w-full max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold text-cream mb-6 text-center">Quick Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-cream/70 text-sm font-medium p-4 border-b border-cream/10">Feature</th>
                  <th className="text-center text-cream/70 text-sm font-medium p-4 border-b border-cream/10">Bronze</th>
                  <th className="text-center text-cream/70 text-sm font-medium p-4 border-b border-cream/10">Silver</th>
                  <th className="text-center text-sm font-medium p-4 border-b border-cream/10 bg-orange/10 text-orange rounded-t-lg">Gold</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-cream/80 text-sm p-4 border-b border-cream/10">Duration</td>
                  <td className="text-cream/60 text-sm p-4 border-b border-cream/10 text-center">3 months</td>
                  <td className="text-cream/60 text-sm p-4 border-b border-cream/10 text-center">12 months</td>
                  <td className="text-cream text-sm p-4 border-b border-cream/10 text-center bg-orange/5 font-medium">12 months</td>
                </tr>
                <tr>
                  <td className="text-cream/80 text-sm p-4 border-b border-cream/10">Markets</td>
                  <td className="text-cream/40 text-sm p-4 border-b border-cream/10 text-center">—</td>
                  <td className="text-cream/60 text-sm p-4 border-b border-cream/10 text-center">2 markets</td>
                  <td className="text-cream text-sm p-4 border-b border-cream/10 text-center bg-orange/5 font-medium">5 markets</td>
                </tr>
                <tr>
                  <td className="text-cream/80 text-sm p-4 border-b border-cream/10">Workshops</td>
                  <td className="text-cream/40 text-sm p-4 border-b border-cream/10 text-center">—</td>
                  <td className="text-cream/60 text-sm p-4 border-b border-cream/10 text-center">Copenhagen</td>
                  <td className="text-cream text-sm p-4 border-b border-cream/10 text-center bg-orange/5 font-medium">Copenhagen + New York</td>
                </tr>
                <tr>
                  <td className="text-cream/80 text-sm p-4">Reports</td>
                  <td className="text-cream/60 text-sm p-4 text-center">1 baseline</td>
                  <td className="text-cream/60 text-sm p-4 text-center">1 interim</td>
                  <td className="text-cream text-sm p-4 text-center bg-orange/5 rounded-b-lg font-medium">Annual + 3 updates</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Forward CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#next"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-navy font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-orange/20 hover:shadow-orange/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange/50"
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
          transition={{ delay: 0.8 }}
          className="text-cream/60 text-sm mt-8"
        >
          All prices exclude VAT. Custom packages available on request.
        </motion.p>
      </motion.div>

      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-orange/5 rounded-full blur-3xl" />
    </section>
  );
}
