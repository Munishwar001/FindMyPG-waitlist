"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { PropertySearch } from "@/components/property-search";

const FLOAT_CARDS = [
  {
    className: "hero-float-1",
    iconClass: "float-icon--blue",
    emoji: "🏠",
    label: "PG Available",
    sub: "₹7,500/mo · Koramangala",
    badge: null,
    delay: 0,
  },
  {
    className: "hero-float-2",
    iconClass: "float-icon--green",
    emoji: "✅",
    label: "Verified Property",
    sub: "4.9 ★ · 23 reviews",
    badge: "Verified",
    delay: 1.2,
  },
  {
    className: "hero-float-3",
    iconClass: "float-icon--purple",
    emoji: "🤝",
    label: "Flatmate Found",
    sub: "98% compatibility match",
    badge: null,
    delay: 0.6,
  },
  {
    className: "hero-float-4",
    iconClass: "float-icon--orange",
    emoji: "🚫",
    label: "Zero Brokerage",
    sub: "Save ₹15,000+ in fees",
    badge: null,
    delay: 1.8,
  },
];


export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const blobX = useTransform(springX, [-1, 1], [-20, 20]);
  const blobY = useTransform(springY, [-1, 1], [-15, 15]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      mouseX.set(((e.clientX - left) / width) * 2 - 1);
      mouseY.set(((e.clientY - top) / height) * 2 - 1);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  function scrollToHowItWorks() {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToWaitlist() {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <section className="hero" id="top" ref={heroRef}>
      {/* Animated background */}
      <div className="hero-bg">
        <div className="hero-grid" />
        <motion.div className="hero-blob hero-blob-1" style={{ x: blobX, y: blobY }} />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>

      {/* Floating glass cards */}
      {FLOAT_CARDS.map((card) => (
        <motion.div
          key={card.className}
          className={`hero-float-card ${card.className}`}
          initial={{ opacity: 0, scale: 0.85, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: card.delay + 0.8 },
            scale:   { duration: 0.6, delay: card.delay + 0.8 },
            y: { duration: 4 + card.delay * 0.3, repeat: Infinity, ease: "easeInOut" as const, delay: card.delay + 1 },
          }}
        >
          <div className={`float-icon ${card.iconClass}`}>{card.emoji}</div>
          <div className="float-body">
            <p className="float-label">{card.label}</p>
            {card.badge ? (
              <span className="float-badge">✓ {card.badge}</span>
            ) : (
              <p className="float-sub">{card.sub}</p>
            )}
            {card.badge && <p className="float-sub">{card.sub}</p>}
          </div>
        </motion.div>
      ))}

      {/* Hero content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="hero-eyebrow">
            <span>✦</span>
            <span>Now accepting early access</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          Find your{" "}
          <span className="hero-gradient-text">space.</span>
          <br />
          Find your{" "}
          <span className="hero-gradient-text">people.</span>
          <br />
          Find your{" "}
          <span className="hero-gradient-text">city.</span>
        </motion.h1>

        <motion.p
          className="hero-subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          FindMyPG helps students and working professionals discover verified PGs,
          hostels, flats and compatible flatmates — without brokers, without hassle.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <button className="btn-primary btn-primary--lg" onClick={scrollToWaitlist}>
            Join Waitlist — It&apos;s Free
          </button>
          <button className="btn-secondary" onClick={scrollToHowItWorks}>
            See How It Works <ArrowRight size={16} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <PropertySearch />
        </motion.div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
