"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

type Status = "idle" | "loading" | "success" | "already" | "error";

export function EarlyLaunchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [problems, setProblems] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check if user has already interacted with modal
    const dismissed = localStorage.getItem("early-launch-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500); // Show after 1.5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  function handleClose() {
    setIsOpen(false);
    localStorage.setItem("early-launch-dismissed", "true");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, problems }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }

      setStatus(data.alreadyJoined ? "already" : "success");
      localStorage.setItem("early-launch-dismissed", "true");
      
      // Close modal after success message
      setTimeout(() => {
        setIsOpen(false);
      }, 2500);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Try again.");
    }
  }

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="modal-close" onClick={handleClose} aria-label="Close modal">
          <X size={20} strokeWidth={2.5} />
        </button>

        <div className="modal-header">
          <span className="tag-brutalist tag-brutalist--green" style={{ fontSize: 10, padding: "3px 8px" }}>
            NEW LAUNCH
          </span>
          <h2 style={{ marginTop: 12, fontSize: 24, fontWeight: 900 }}>
            Join Our Early Launch Circle
          </h2>
          <p style={{ marginTop: 8, fontSize: 14, color: "var(--muted)", fontWeight: 600 }}>
            Help us build the ultimate broker-free PG experience. Share the biggest problems you face so we can solve them first!
          </p>
        </div>

        {status === "success" || status === "already" ? (
          <div className="modal-success-state">
            <div className="success-emoji">🎉</div>
            <h3 style={{ fontWeight: 900 }}>
              {status === "already" ? "You're already on the list!" : "Welcome to the circle!"}
            </h3>
            <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 6, fontWeight: 600 }}>
              We'll be in touch soon with early access.
            </p>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="modal-email" style={{ fontSize: 13, fontWeight: 800, marginBottom: 6, display: "block" }}>
                Your Email
              </label>
              <input
                id="modal-email"
                type="email"
                className="brutalist-input"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-field" style={{ marginTop: 16 }}>
              <label htmlFor="modal-problems" style={{ fontSize: 13, fontWeight: 800, marginBottom: 6, display: "block" }}>
                What problems do you face finding a PG?
              </label>
              <textarea
                id="modal-problems"
                className="brutalist-input brutalist-textarea"
                placeholder="e.g., High brokerage fees, fake listings, owner interference..."
                value={problems}
                onChange={(e) => setProblems(e.target.value)}
                rows={3}
                required
              />
            </div>

            {status === "error" && <p className="form-error" style={{ marginTop: 12 }}>{errorMessage}</p>}

            <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: 20 }} disabled={status === "loading"}>
              {status === "loading" ? "Joining..." : "Join Us"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
