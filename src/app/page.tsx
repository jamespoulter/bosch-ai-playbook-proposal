"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("bosch-auth");
    if (isAuthenticated === "true") {
      router.push("/proposal");
    } else {
      setIsChecking(false);
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "bosch2026") {
      sessionStorage.setItem("bosch-auth", "true");
      router.push("/proposal");
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-orange border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-navy px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Confidential Proposal
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            AI Playbook
            <span className="block text-orange">Programme</span>
          </h1>
          <p className="text-cream/60 text-lg">
            Prepared for Bosch by ThreePoint
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-cream/80 text-sm mb-2">
              Enter access code
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-4 bg-navy-light border-2 rounded-lg text-cream placeholder-cream/40 focus:outline-none transition-colors ${
                error
                  ? "border-red-500"
                  : "border-cream/20 focus:border-orange"
              }`}
              placeholder="Enter password"
              autoFocus
            />
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-2"
              >
                Invalid access code
              </motion.p>
            )}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-orange text-navy font-semibold rounded-lg hover:bg-orange/90 transition-colors"
          >
            Access Proposal
          </motion.button>
        </form>

        <p className="text-center text-cream/40 text-sm mt-8">
          Contact <a href="mailto:jp@threepoint.io" className="text-orange hover:underline">jp@threepoint.io</a> for access
        </p>
      </motion.div>

      {/* Geometric accents */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </main>
  );
}
