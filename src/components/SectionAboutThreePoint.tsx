"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const credentials = [
  { label: "250+", detail: "Keynotes delivered globally" },
  { label: "20yrs", detail: "In digital & AI transformation" },
  { label: "£1B+", detail: "Revenue influenced for clients" },
  { label: "Global", detail: "UK · US · Europe · Middle East" },
];

const clients = [
  "Amazon", "Verizon", "Bosch", "Bloomsbury", "Universal Music",
  "LEGO", "Biblica", "Dunham & Company",
];

export default function SectionAboutThreePoint() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex flex-col justify-center relative px-6 py-24 bg-navy"
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />

      <div className="max-w-6xl mx-auto w-full z-10">

        {/* ThreePoint logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src="/threepoint-logo-transparent.png"
            alt="ThreePoint Labs"
            width={160}
            height={46}
            className="h-10 w-auto opacity-90"
          />
        </motion.div>

        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-orange text-sm font-medium tracking-widest uppercase mb-4 block"
        >
          Your Partner
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-cream mb-6 max-w-3xl"
        >
          About ThreePoint
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-cream/75 max-w-3xl mb-16"
        >
          ThreePoint Labs is a specialist AI transformation consultancy. We help
          the world&apos;s leading organisations cut through the hype, build practical
          AI strategies, and embed lasting change — with clarity, rigour, and
          genuine expertise.
        </motion.p>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Left — James Poulter bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-start gap-5">
              {/* JP photo placeholder — orange initial circle */}
              <div className="w-20 h-20 rounded-full border-2 border-orange/40 flex-shrink-0 overflow-hidden">
                <Image
                  src="/panelists/james-poulter.jpg"
                  alt="James Poulter"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-cream font-bold text-xl mb-0.5">James Poulter</h3>
                <p className="text-orange text-sm font-medium">Founder & CEO, ThreePoint Labs</p>
                <p className="text-cream/50 text-sm">Programme Convener & Chair</p>
              </div>
            </div>

            <p className="text-cream/70 leading-relaxed">
              James is one of the world&apos;s most sought-after voices on AI strategy and enterprise
              transformation. With over 20 years in digital leadership, he has delivered more than
              250 keynotes at events including CES, Forbes Conferences, and NRB — advising
              boards, leadership teams, and global brands on practical AI adoption.
            </p>

            <p className="text-cream/70 leading-relaxed">
              Formerly Head of Emerging Platforms at <span className="text-cream font-medium">The LEGO Group</span>,
              where he launched LEGO Life to over 2 million users, and CEO of{" "}
              <span className="text-cream font-medium">Vixen Labs</span> — the pioneering voice AI
              studio he founded and exited to House 337 in 2023 — James brings rare depth in
              both strategic advisory and the practical mechanics of voice AI deployment.
            </p>

            <p className="text-cream/70 leading-relaxed">
              He currently serves as Fractional Head of AI at{" "}
              <span className="text-cream font-medium">Elvis London</span> and{" "}
              <span className="text-cream font-medium">Dunham &amp; Company (Dallas)</span>, sits on
              the board of <span className="text-cream font-medium">Christian Aid</span>, and
              advises the <span className="text-cream font-medium">Church of England&apos;s digital board</span>{" "}
              on AI ethics. His book,{" "}
              <span className="text-lime italic">AI @ Work: Rewire Your Team and Yourself for the AI Revolution</span>,
              publishes with Bloomsbury in August 2026.
            </p>

            <p className="text-cream/70 leading-relaxed">
              As Programme Convener, James will chair all panel sessions, shape the research
              agenda, facilitate the Copenhagen and New York workshops, and serve as the
              strategic lead throughout the engagement.
            </p>
          </motion.div>

          {/* Right — ThreePoint credentials + clients */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            {/* What we do */}
            <div className="bg-navy-light rounded-2xl p-8 border border-cream/10">
              <h4 className="text-cream font-bold text-lg mb-4">What ThreePoint Does</h4>
              <ul className="space-y-3 text-cream/70 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-orange mt-0.5 flex-shrink-0">▸</span>
                  <span><span className="text-cream font-medium">AI Strategy &amp; Transformation</span> — helping organisations move from AI ambition to embedded, measurable change</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange mt-0.5 flex-shrink-0">▸</span>
                  <span><span className="text-cream font-medium">Research &amp; Intelligence</span> — market research programmes, landscape analysis, and expert panel facilitation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange mt-0.5 flex-shrink-0">▸</span>
                  <span><span className="text-cream font-medium">Executive Education &amp; Keynotes</span> — equipping leadership teams with the frameworks to lead AI confidently</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange mt-0.5 flex-shrink-0">▸</span>
                  <span><span className="text-cream font-medium">Ethics &amp; Governance</span> — developing robust AI policies grounded in human values and practical rigour</span>
                </li>
              </ul>
            </div>

            {/* Why ThreePoint for this programme */}
            <div className="bg-navy-light rounded-2xl p-8 border border-cream/10">
              <h4 className="text-cream font-bold text-lg mb-4">Why ThreePoint for This Programme</h4>
              <ul className="space-y-3 text-cream/70 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-lime mt-0.5 flex-shrink-0">✓</span>
                  <span>Deep roots in the voice AI ecosystem — James co-founded Vixen Labs, the UK&apos;s leading voice AI studio</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime mt-0.5 flex-shrink-0">✓</span>
                  <span>Existing relationships with the global voice AI expert community — the panel isn&apos;t assembled cold</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime mt-0.5 flex-shrink-0">✓</span>
                  <span>Independent and agenda-free — we are not a hardware or software vendor; our only interest is rigorous insight</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime mt-0.5 flex-shrink-0">✓</span>
                  <span>Track record with enterprise clients at the intersection of AI strategy and communications</span>
                </li>
              </ul>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="bg-navy-light rounded-xl p-5 border border-cream/10 text-center"
                >
                  <div className="text-2xl font-bold text-orange mb-1">{c.label}</div>
                  <div className="text-cream/60 text-xs leading-snug">{c.detail}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-cream/10 pt-10"
        >
          <p className="text-cream/40 text-xs tracking-widest uppercase mb-8 text-center">Trusted by</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-items-center">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center h-12 px-4 border border-cream/10 rounded-lg bg-navy-light/50 hover:border-cream/30 hover:bg-navy-light transition-all group"
              >
                <span className="text-cream/70 font-semibold text-sm uppercase tracking-wide group-hover:text-cream transition-colors whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent" />
    </section>
  );
}
