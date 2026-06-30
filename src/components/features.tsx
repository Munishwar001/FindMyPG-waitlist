"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Users,
  Camera,
  SlidersHorizontal,
  Bell,
  GraduationCap,
  Train,
  Star,
} from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    description:
      "Every property is physically inspected by our team. Real photos, real rooms, no surprises.",
  },
  {
    icon: Zap,
    title: "Zero Brokerage",
    description:
      "Connect directly with owners and save thousands. No middlemen, no hidden charges.",
  },
  {
    icon: Users,
    title: "Flatmate Matching",
    description:
      "Our algorithm matches you with flatmates based on lifestyle, habits, and preferences.",
  },
  {
    icon: Camera,
    title: "Real Photos",
    description:
      "360° verified photos taken by our team. What you see is exactly what you get.",
  },
  {
    icon: SlidersHorizontal,
    title: "Smart Filters",
    description:
      "Filter by gender, meals, AC, WiFi, furnishing, budget, and 20+ more parameters.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description:
      "Get notified the moment a property matching your criteria becomes available.",
  },
  {
    icon: GraduationCap,
    title: "Nearby Colleges",
    description:
      "Find PGs within walking distance of your college or university campus.",
  },
  {
    icon: Train,
    title: "Nearby Metro",
    description:
      "Smart commute filters show properties near metro stations and bus stops.",
  },
  {
    icon: Star,
    title: "Property Reviews",
    description:
      "Honest reviews from verified residents. Know what you're signing up for.",
  },
];

const EASE = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function Features() {
  return (
    <section className="features-section" id="features">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Why FindMyPG</span>
          <h2 style={{ marginTop: 12 }}>Built for how you actually live</h2>
          <p style={{ marginTop: 16 }}>
            Every feature is designed to make your search faster, safer,
            and completely stress-free.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="features-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <motion.div key={title} className="feature-card" variants={cardVariants}>
            <div className="feature-icon">
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
