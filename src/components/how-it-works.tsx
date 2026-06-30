"use client";

import { motion } from "framer-motion";
import { Search, BarChart2, Home, ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Search",
    description:
      "Enter your city, budget, and preferences. Filter by gender, meals, furnishing, and more.",
  },
  {
    number: "02",
    icon: BarChart2,
    title: "Compare",
    description:
      "View verified photos, real reviews, and transparent pricing. No hidden fees, ever.",
  },
  {
    number: "03",
    icon: Home,
    title: "Move In",
    description:
      "Connect directly with owners. Schedule visits, sign agreements, and move in stress-free.",
  },
];

export function HowItWorks() {
  return (
    <section className="hiw-section" id="how-it-works">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">How It Works</span>
          <h2 style={{ marginTop: 12 }}>Three steps to your new home</h2>
          <p style={{ marginTop: 16 }}>
            From search to settled — we make finding your next place
            simple, fast, and completely broker-free.
          </p>
        </motion.div>
      </div>

      <div className="hiw-steps">
        {STEPS.map(({ number, icon: Icon, title, description }, i) => (
          <>
            <motion.div
              key={title}
              className="hiw-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="hiw-step-number">{number}</div>
              <motion.div
                className="hiw-step-icon"
                whileHover={{ scale: 1.08, rotate: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Icon size={32} />
              </motion.div>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.div>

            {i < STEPS.length - 1 && (
              <div key={`conn-${i}`} className="hiw-connector">
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                >
                  <ArrowRight size={28} />
                </motion.div>
              </div>
            )}
          </>
        ))}
      </div>
    </section>
  );
}
