"use client";

import { useState, type FormEvent } from "react";
import { MapPinIcon } from "@/components/icons";

const TABS = ["PG", "Flat", "Flatmate"] as const;
type Tab = (typeof TABS)[number];

export function PropertySearch() {
  const [tab, setTab] = useState<Tab>("PG");
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = document.getElementById("waitlist-email");
    input?.scrollIntoView({ behavior: "smooth", block: "center" });
    (input as HTMLInputElement | null)?.focus();
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
          <MapPinIcon />
          <input
            type="text"
            placeholder="Search by city, neighborhood, or landmark"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary">
          Find Now
        </button>
      </form>
    </div>
  );
}
