"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Cities", href: "#cities" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToWaitlist() {
    const el = document.getElementById("final-cta");
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
    setMobileOpen(false);
  }

  return (
    <nav className={scrolled ? "nav--scrolled" : ""}>
      <div className="nav-inner">
        <a href="#top" className="logo">
          <div className="logo-icon logo-icon--image">
            <Image src="/logo.png" alt="FindMyPG Logo" width={72} height={72} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <span className="logo-text">FindMy<span className="logo-highlight">PG</span></span>
        </a>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <button className="nav-cta" onClick={scrollToWaitlist}>
          Join Waitlist
        </button>

        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="nav-mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
