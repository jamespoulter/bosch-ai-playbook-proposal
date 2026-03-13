"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Users, BookOpen, Shield, Layers, Target } from "lucide-react";

const challenges = [
  {
    icon: Users,
    title: "Uneven AI Literacy Across the Organisation",
    body: "AI capability is concentrated in pockets — tech teams understand tools, but business leaders, HR, and operations staff lack the fluency to unlock real value from AI investments.",
    color: "orange",
  },
  {
    icon: BookOpen,
    title: "No Consistent AI Playbook",
    body: "Teams are experimenting in silos. Without a shared framework, language, and governance model, Bosch risks duplication, missed synergies, and reputational exposure.",
    color: "gold",
  },
  {
    icon: Shield,
    title: "Ethics and Compliance Uncertainty",
    body: "The EU AI Act and global regulatory landscape demand clear governance. Without policy and structured risk frameworks, compliance risk grows with every new AI deployment.",
    color: "orange",
  },
  {
    icon: Layers,
    title: "Fragmented Tool Adoption",
    body: "Dozens of AI tools are in use across business units, often without integration, measurement, or coherent strategy — creating noise rather than transformation.",
    color: "gold",
  },
  {
    icon: Target,
    title: "Unclear ROI Measurement",
    body: "Bosch is investing in AI but lacks the frameworks to measure impact, justify further investment, or build the business case for organisation-wide transformation.",
    color: "orange",
  },
  {
    icon: AlertTriangle,
    title: "Speed vs. Responsibility Tension",
    body: "Pressure to move fast conflicts with the need to move responsibly. Without a structured approach, teams default to either paralysis or reckless experimentation.",
    color: "gold",
  },
];

export default function SectionChallenge() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 bg-navy-light overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-orange/[0.07] pointer-events-none" />
      <div className="absolute -bottom-48 -left-48 w-[400px] h-[400px] rounded-full bg-gold/[0.02] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl z-10"
      >
        <div className="text-center mb-16">
          <span className="text-orange text-sm font-medium tracking-widest uppercase mb-4 block">
            The Landscape
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
            The Challenge
          </h2>
          <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto">
            Bosch is a world-class organisation with the ambition to lead in the AI era.
            But like every enterprise at this scale, the path from aspiration to transformation
            is littered with specific, addressable barriers.
          </p>
        </div>

        {/* Challenge cards — 3x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            const isOrange = challenge.color === "orange";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                className="bg-navy border border-cream/10 rounded-2xl p-6 hover:border-orange/30 transition-colors group"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${isOrange ? "bg-orange/10" : "bg-gold/10"}`}>
                  <Icon className={`w-5 h-5 ${isOrange ? "text-orange" : "text-gold"}`} />
                </div>
                <h3 className="text-cream font-semibold mb-3 leading-snug">{challenge.title}</h3>
                <p className="text-cream/65 text-sm leading-relaxed">{challenge.body}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bridge statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-orange/10 border border-orange/30 rounded-2xl px-8 py-5 max-w-2xl">
            <p className="text-cream/90 text-lg font-medium">
              These aren&apos;t failures — they&apos;re the predictable friction of an organisation at the frontier.{" "}
              <span className="text-orange">ThreePoint exists to resolve them.</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
