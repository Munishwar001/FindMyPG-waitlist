"use client";

import { motion } from "framer-motion";

const AVATARS = [
  { emoji: "👩", bg: "#dbeafe" },
  { emoji: "👨", bg: "#dcfce7" },
  { emoji: "👩‍💼", bg: "#fce7f3" },
  { emoji: "🧑", bg: "#fef3c7" },
  { emoji: "👩‍🎓", bg: "#ede9fe" },
];

const BADGES = [
  { label: "Students", emoji: "🎓" },
  { label: "Working Professionals", emoji: "💼" },
  { label: "Property Owners", emoji: "🏠" },
];

export function SocialProof({ count }: { count: number }) {
  return (
    <section className="social-proof">
      <motion.div
        className="social-proof-inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {/* Avatars + count */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div className="sp-avatars">
            {AVATARS.map((a, i) => (
              <div
                key={i}
                className="sp-avatar"
                style={{ background: a.bg, zIndex: AVATARS.length - i }}
              >
                {a.emoji}
              </div>
            ))}
            <div className="sp-avatar sp-avatar-more">+</div>
          </div>

          <div className="sp-info">
            <div className="sp-count">
              <span>{count.toLocaleString()}+</span> people joined
            </div>
            <p className="sp-label">already on the waitlist</p>
          </div>
        </div>

        <div className="sp-divider" />

        {/* Badges */}
        <div className="sp-badges">
          {BADGES.map((b) => (
            <div key={b.label} className="sp-badge">
              <div className="sp-badge-dot" />
              <span>{b.emoji}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
