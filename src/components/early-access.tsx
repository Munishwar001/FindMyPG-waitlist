"use client";

import { motion } from "framer-motion";

const BENEFITS = [
  {
    emoji: "🚀",
    title: "Priority Access",
    description: "Be the first to explore verified listings the moment we launch in your city.",
  },
  {
    emoji: "🏷️",
    title: "Launch Discounts",
    description: "Exclusive early-bird pricing for waitlist members. Lock in the best rates.",
  },
  {
    emoji: "🏆",
    title: "Founder Badge",
    description: "A permanent founder badge on your profile, forever marking you as an OG.",
  },
  {
    emoji: "📬",
    title: "Exclusive Updates",
    description: "Insider product updates, feature previews, and city launch announcements.",
  },
  {
    emoji: "✨",
    title: "Premium Features",
    description: "Early access to premium tools like advanced filters and flatmate matching.",
  },
];

const EASE = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function EarlyAccess() {
  function scrollToWaitlist() {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <section className="early-access-section">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Early Access</span>
          <h2 style={{ marginTop: 12 }}>Join now. Benefit forever.</h2>
          <p style={{ marginTop: 16 }}>
            Being early has its perks. Here&apos;s what waitlist members unlock —
            perks that won&apos;t be available after launch.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="benefits-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        {BENEFITS.map(({ emoji, title, description }) => (
          <motion.div key={title} className="benefit-card" variants={cardVariants}>
            <div className="benefit-icon">{emoji}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        style={{ textAlign: "center", marginTop: 56 }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <button className="btn-primary btn-primary--lg" onClick={scrollToWaitlist}>
          Claim Your Spot Now
        </button>
        <p style={{ marginTop: 14, fontSize: 13, color: "var(--muted)" }}>
          Free forever · No credit card required
        </p>
      </motion.div>
    </section>
  );
}
