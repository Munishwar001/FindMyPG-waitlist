"use client";

import React, { useState } from "react";
import { MapPin } from "lucide-react";

const TABS = ["PG", "Flat", "Flatmate"] as const;
type Tab = (typeof TABS)[number];

export function PropertySearch() {
  const [tab, setTab] = useState<Tab>("PG");
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const el = document.getElementById("final-cta");
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="search-card">
      <div className="search-tabs">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            className={`search-tab ${tab === t ? "active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <form className="search-row" onSubmit={handleSubmit}>
        <div className="search-input-wrap">
          <MapPin size={17} />
          <input
            type="text"
            placeholder={`Search ${tab === "Flatmate" ? "your city or area" : `${tab}s by city, area, or landmark`}`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary">
          Join Waitlist
        </button>
      </form>
    </div>
  );
}
