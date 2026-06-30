"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  DollarSign,
  Image,
  PhoneOff,
  UserX,
  Clock,
} from "lucide-react";

const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "Fake Listings",
    description:
      "Outdated or fraudulent listings waste your time and erode trust. You show up to a place that doesn't exist.",
  },
  {
    icon: DollarSign,
    title: "High Brokerage",
    description:
      "Brokers charge 1–2 months rent just for introductions. That's money you could spend on your first month.",
  },
  {
    icon: Image,
    title: "Unverified Photos",
    description:
      "Photos from 3 years ago showing a freshly renovated room that is now a disaster. Sound familiar?",
  },
  {
    icon: PhoneOff,
    title: "Endless Phone Calls",
    description:
      "Calling 20 owners to find one available room. Unanswered calls, wrong numbers, and broken promises.",
  },
  {
    icon: UserX,
    title: "Poor Flatmate Matching",
    description:
      "Living with a stranger who has completely opposite habits destroys your peace of mind and sleep.",
  },
  {
    icon: Clock,
    title: "Time Wasted Visiting",
    description:
      "Hours of travel to visit properties that look nothing like the listing. A day gone, nothing found.",
  },
];

const EASE = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function Problems() {
  return (
    <section className="problems-section" id="problems">
      <div className="section-header" style={{ marginBottom: 72 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow section-eyebrow--dark">The Problem</span>
          <h2 className="dark" style={{ marginTop: 12 }}>
            Finding a PG shouldn&apos;t feel like<br />a full-time job.
          </h2>
          <p className="dark" style={{ marginTop: 16 }}>
            The current process is broken — and you&apos;ve felt every bit of it.
            Here&apos;s what we&apos;re fixing.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="problems-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {PROBLEMS.map(({ icon: Icon, title, description }) => (
          <motion.div key={title} className="problem-card" variants={cardVariants}>
            <div className="problem-icon">
              <Icon size={22} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
