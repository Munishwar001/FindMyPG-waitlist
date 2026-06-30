"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

type Status = "idle" | "loading" | "success" | "already" | "error";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (status === "success" || status === "already") {
      const timer = setTimeout(() => setStatus("idle"), 3500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }
      setStatus(data.alreadyJoined ? "already" : "success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Try again.");
    }
  }

  const toastVisible = status === "success" || status === "already";

  return (
    <section className="final-cta-section" id="final-cta">
      <div className="final-cta-glow" aria-hidden="true" />

      <div className="final-cta-content">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="section-eyebrow section-eyebrow--dark" style={{ marginBottom: 24 }}>
            Limited Early Access
          </span>
          <h2>Your next home<br />starts here.</h2>
          <p>
            Join thousands already waiting for FindMyPG. Get priority access,
            launch discounts, and your permanent founder badge.
          </p>

          <form className="final-cta-form" onSubmit={handleSubmit}>
            <input
              id="waitlist-email"
              type="email"
              className="final-cta-input"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading"}
            />
            <button
              type="submit"
              className="btn-primary"
              disabled={status === "loading"}
            >
              {status === "loading"
                ? "Joining..."
                : status === "success"
                ? "You're in! 🎉"
                : status === "already"
                ? "Already joined 👀"
                : "Join Waitlist"}
            </button>
          </form>

          {status === "error" && (
            <p className="form-error">{errorMessage}</p>
          )}

          <div className="final-cta-trust">
            <Lock size={12} />
            <span>Free forever · No spam · Unsubscribe anytime</span>
          </div>
        </motion.div>
      </div>

      {/* Toast */}
      <div className={`toast ${toastVisible ? "show" : ""}`} role="status">
        {status === "already" ? "Already on the list 👀" : "You're on the list! 🎉"}
      </div>
    </section>
  );
}
