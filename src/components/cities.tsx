"use client";

import { motion } from "framer-motion";

const CITIES = [
  { name: "Delhi NCR", emoji: "🏛️", status: "Coming Soon" },
  { name: "Bangalore", emoji: "🌳", status: "Launching First" },
  { name: "Mumbai", emoji: "🌊", status: "Coming Soon" },
  { name: "Hyderabad", emoji: "💎", status: "Coming Soon" },
  { name: "Pune", emoji: "🎓", status: "Coming Soon" },
  { name: "Chandigarh", emoji: "🌸", status: "Coming Soon" },
  { name: "Noida", emoji: "🏙️", status: "Coming Soon" },
  { name: "Gurgaon", emoji: "⚡", status: "Coming Soon" },
];

const EASE = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 16 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function Cities() {
  return (
    <section className="cities-section section--surface" id="cities">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Coverage</span>
          <h2 style={{ marginTop: 12 }}>Launching across India&apos;s top cities</h2>
          <p style={{ marginTop: 16 }}>
            Starting with Bangalore, then expanding rapidly.
            Join the waitlist and be first in your city.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="cities-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        {CITIES.map(({ name, emoji, status }) => (
          <motion.div key={name} className="city-card" variants={cardVariants}>
            <div className="city-card-glow" />
            <div className="city-card-inner">
              <span className="city-emoji">{emoji}</span>
              <div className="city-name">{name}</div>
              <div className="city-status">
                {status === "Launching First" ? (
                  <>
                    <div className="city-live-dot" />
                    <span style={{ color: "#22c55e", fontWeight: 600 }}>Launching First</span>
                  </>
                ) : (
                  <>
                    <span style={{ fontSize: 10 }}>🔜</span>
                    <span>{status}</span>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="cities-more"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        + More cities coming soon. Stay tuned.
      </motion.p>
    </section>
  );
}
