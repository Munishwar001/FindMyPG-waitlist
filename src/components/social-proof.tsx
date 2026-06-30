"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AVATARS = [
  // { src: "/avatars/avatar1.png", alt: "Priya" },
  { src: "/avatars/avatar2.png", alt: "Rahul" },
  { src: "/avatars/avatar3.png", alt: "Anjali" },
  { src: "/avatars/avatar4.png", alt: "Arjun" },
  { src: "/avatars/avatar5.png", alt: "Neha" },
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
                style={{ zIndex: AVATARS.length - i }}
              >
                <Image src={a.src} alt={a.alt} width={40} height={40} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
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
