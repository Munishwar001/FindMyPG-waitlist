"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "When will FindMyPG launch?",
    answer:
      "We're targeting a launch in Q3 2025, starting with Bangalore. Waitlist members in Bangalore will get access first, followed by other cities. Join the waitlist and you'll receive a personal email when we're live in your city.",
  },
  {
    question: "Which cities are supported at launch?",
    answer:
      "We're launching first in Bangalore, then expanding rapidly to Delhi NCR, Mumbai, Hyderabad, Pune, Chandigarh, Noida, and Gurgaon. More cities will be added based on demand — so the more people from your city who join, the faster we'll get there.",
  },
  {
    question: "Is FindMyPG free to use?",
    answer:
      "Yes, completely free for seekers. You can search, shortlist, message owners, and find flatmates at zero cost. We're committed to a zero-brokerage model — we make money through optional premium features for property owners, not from you.",
  },
  {
    question: "Can property owners list on FindMyPG?",
    answer:
      "Absolutely! Property owners and managers can register early to claim their spot. We offer basic free listings and premium plans with featured placement, analytics, and verification badges. Early owner registrations also get their first 3 months free.",
  },
  {
    question: "Will there be Android and iOS apps?",
    answer:
      "Yes! Both Android and iOS apps are in development and will launch alongside the web platform. Waitlist members will get beta access to the apps before the public release. The apps will include all features plus exclusive mobile-only ones like push alerts.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section section--surface" id="faq">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">FAQ</span>
          <h2 style={{ marginTop: 12 }}>Questions? We&apos;ve got answers.</h2>
          <p style={{ marginTop: 16 }}>
            Everything you need to know about FindMyPG, our launch,
            and how to be part of the early community.
          </p>
        </motion.div>
      </div>

      <div className="faq-list">
        {FAQS.map(({ question, answer }, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={question}
              className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <button
                className="faq-trigger"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="faq-question">{question}</span>
                <ChevronDown size={20} className="faq-chevron" />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="faq-answer">{answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
