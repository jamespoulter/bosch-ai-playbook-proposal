"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const packageOptions = [
  { id: "bronze", label: "Bronze — Foundation", price: "£95,000" },
  { id: "silver", label: "Silver — Growth", price: "£215,000" },
  { id: "gold", label: "Gold — Full Programme", price: "£419,500", recommended: true },
  { id: "undecided", label: "Not sure yet — let's discuss", price: null },
];

const nextStepOptions = [
  { id: "call", label: "Schedule a discovery call with James" },
  { id: "presentation", label: "Arrange a formal proposal presentation" },
  { id: "info", label: "Send me additional information" },
  { id: "reference", label: "Connect me with a reference client" },
];

export default function Section7NextSteps() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    package: "gold",
    comments: "",
    nextSteps: [] as string[],
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePackageChange = (packageId: string) => {
    setFormData((prev) => ({ ...prev, package: packageId }));
  };

  const handleNextStepToggle = (stepId: string) => {
    setFormData((prev) => ({
      ...prev,
      nextSteps: prev.nextSteps.includes(stepId)
        ? prev.nextSteps.filter((id) => id !== stepId)
        : [...prev.nextSteps, stepId],
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!formData.role.trim()) {
      newErrors.role = "Please enter your role";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Build mailto body
    const selectedPackage = packageOptions.find((p) => p.id === formData.package);
    const selectedSteps = nextStepOptions.filter((s) => formData.nextSteps.includes(s.id));

    const body = `
JABRA VOICE AI PROGRAMME — RESPONSE

Name: ${formData.name}
Role: ${formData.role}

Package Preference: ${selectedPackage?.label}${selectedPackage?.price ? ` (${selectedPackage.price})` : ""}

${formData.comments ? `Comments/Questions:\n${formData.comments}\n` : ""}
Next Steps Requested:
${selectedSteps.length > 0 ? selectedSteps.map((s) => `• ${s.label}`).join("\n") : "• None specified"}

---
Sent from Jabra Voice AI Programme microsite
    `.trim();

    const subject = encodeURIComponent(`Jabra Voice AI Programme — Response from ${formData.name}`);
    const encodedBody = encodeURIComponent(body);

    window.location.href = `mailto:jemma@poulterventures.com?cc=jp@threepoint.io&subject=${subject}&body=${encodedBody}`;

    setIsSubmitted(true);
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl z-10"
      >
        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <div className="text-5xl text-orange/30 font-serif leading-none mb-3">&ldquo;</div>
          <blockquote className="text-xl md:text-3xl font-light text-cream leading-relaxed mb-3">
            This programme does not just report on the Voice AI market
            <span className="text-orange"> — it positions Jabra to lead it.</span>
          </blockquote>
          <div className="text-5xl text-orange/30 font-serif leading-none rotate-180">&ldquo;</div>
        </motion.div>

        {/* Next Steps header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 text-center"
        >
          <span className="text-lime text-sm font-medium tracking-widest uppercase mb-3 block">
            Ready to Begin?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-3">
            Next Steps
          </h2>
          <p className="text-lg text-cream/75 font-normal max-w-2xl mx-auto">
            Share your interest and we&apos;ll be in touch within 24 hours.
          </p>
        </motion.div>

        {/* Feedback Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          {isSubmitted ? (
            <div className="bg-navy-light border border-lime/30 rounded-2xl p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-cream mb-3">Thank you, {formData.name}!</h3>
              <p className="text-cream/70 text-lg">
                Jemma will be in touch within 24 hours to confirm next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-navy-light border border-cream/10 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="text-cream/70 text-sm font-medium mb-2 block">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className={`bg-navy border rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none transition-colors w-full ${
                      errors.name ? "border-red-500 focus:border-red-500" : "border-cream/20 focus:border-orange/60"
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Role / Title */}
                <div>
                  <label htmlFor="role" className="text-cream/70 text-sm font-medium mb-2 block">
                    Role / Title *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    placeholder="Your role at Jabra"
                    className={`bg-navy border rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none transition-colors w-full ${
                      errors.role ? "border-red-500 focus:border-red-500" : "border-cream/20 focus:border-orange/60"
                    }`}
                  />
                  {errors.role && <p className="text-red-400 text-xs mt-1">{errors.role}</p>}
                </div>
              </div>

              {/* Package Preference */}
              <div className="mb-8">
                <label className="text-cream/70 text-sm font-medium mb-3 block">
                  Package Preference
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {packageOptions.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => handlePackageChange(pkg.id)}
                      className={`relative text-left px-4 py-3 rounded-xl border-2 transition-all ${
                        formData.package === pkg.id
                          ? pkg.recommended
                            ? "border-orange bg-orange/10 ring-2 ring-orange/30"
                            : "border-orange bg-orange/10"
                          : "border-cream/20 hover:border-cream/40 bg-navy"
                      }`}
                    >
                      {pkg.recommended && (
                        <span className="absolute -top-2 right-3 bg-orange text-navy text-xs font-bold px-2 py-0.5 rounded-full">
                          Recommended
                        </span>
                      )}
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            formData.package === pkg.id ? "border-orange" : "border-cream/40"
                          }`}
                        >
                          {formData.package === pkg.id && (
                            <div className="w-2.5 h-2.5 bg-orange rounded-full" />
                          )}
                        </div>
                        <div>
                          <span className="text-cream text-sm font-medium">{pkg.label}</span>
                          {pkg.price && (
                            <span className="text-cream/50 text-sm ml-2">({pkg.price})</span>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Comments / Questions */}
              <div className="mb-8">
                <label htmlFor="comments" className="text-cream/70 text-sm font-medium mb-2 block">
                  Comments or Questions
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  placeholder="Anything you'd like us to know, or questions about the programme..."
                  rows={4}
                  className="bg-navy border border-cream/20 rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 focus:border-orange/60 focus:outline-none transition-colors w-full resize-none"
                />
              </div>

              {/* Next Step Preference */}
              <div className="mb-8">
                <label className="text-cream/70 text-sm font-medium mb-3 block">
                  Preferred Next Steps <span className="text-cream/50">(select all that apply)</span>
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {nextStepOptions.map((step) => (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => handleNextStepToggle(step.id)}
                      className={`text-left px-4 py-3 rounded-xl border transition-all flex items-center gap-3 ${
                        formData.nextSteps.includes(step.id)
                          ? "border-orange bg-orange/10"
                          : "border-cream/20 hover:border-cream/40 bg-navy"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center ${
                          formData.nextSteps.includes(step.id)
                            ? "border-orange bg-orange"
                            : "border-cream/40"
                        }`}
                      >
                        {formData.nextSteps.includes(step.id) && (
                          <svg className="w-3 h-3 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-cream text-sm">{step.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-orange hover:bg-orange/90 text-navy font-bold text-lg px-8 py-5 rounded-xl transition-all shadow-lg shadow-orange/25 hover:shadow-xl hover:shadow-orange/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange/50 flex items-center justify-center gap-3"
              >
                <span>Send to ThreePoint</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center space-y-6"
        >
          <p className="text-cream/50 text-sm">Or reach out directly:</p>
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
              href="mailto:jemma@poulterventures.com"
              className="flex items-center gap-2 hover:text-orange transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              jemma@poulterventures.com
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

          <div className="pt-6 border-t border-cream/10">
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
