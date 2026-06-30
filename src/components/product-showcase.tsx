"use client";

import { motion } from "framer-motion";
import { Home, Search, Heart, Users, MessageCircle, MapPin } from "lucide-react";

function HomeScreen() {
  return (
    <div className="app-screen">
      <div className="app-topbar">
        <div className="app-topbar-title">Good morning, Priya 👋</div>
        <div className="app-topbar-sub">Explore verified PGs near you</div>
      </div>
      <div className="app-search-bar">
        <Search size={10} />
        <span>Search city, area, landmark...</span>
      </div>
      <div className="app-body">
        {[
          { img: "🏠", imgClass: "app-card-img--blue", title: "Sunshine PG", meta: "Koramangala · 2.1 km", price: "₹7,500/mo", verified: true },
          { img: "🏡", imgClass: "app-card-img--purple", title: "Urban Nest", meta: "HSR Layout · 3.4 km", price: "₹6,200/mo", verified: true },
          { img: "🏢", imgClass: "app-card-img--green", title: "Green Villa PG", meta: "Indiranagar · 1.8 km", price: "₹9,000/mo", verified: false },
        ].map((c) => (
          <div key={c.title} className="app-card-mini">
            <div className={`app-card-img ${c.imgClass}`}>{c.img}</div>
            <div className="app-card-body">
              <div className="app-card-title">{c.title}</div>
              <div className="app-card-meta">{c.meta}</div>
              <div className="app-card-price">{c.price}</div>
              {c.verified && <div className="app-verified">✓ Verified</div>}
            </div>
          </div>
        ))}
      </div>
      <div className="app-tab-bar">
        {[{ icon: Home, label: "Home", active: true }, { icon: Search, label: "Search" }, { icon: Heart, label: "Saved" }, { icon: Users, label: "Match" }, { icon: MessageCircle, label: "Chat" }].map(({ icon: Icon, label, active }) => (
          <div key={label} className={`app-tab ${active ? "app-tab--active" : ""}`}>
            <div className="app-tab-dot" />
            <Icon size={13} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SearchScreen() {
  return (
    <div className="app-screen">
      <div className="app-topbar">
        <div className="app-topbar-title">Find PGs in Bangalore</div>
        <div className="app-topbar-sub">187 verified listings</div>
      </div>
      <div className="app-search-bar">
        <MapPin size={9} />
        <span>Koramangala, Bangalore</span>
      </div>
      <div className="app-body">
        {/* Filter chips */}
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 4 }}>
          {["₹5–10k", "PG", "For Girls", "Meals"].map((f) => (
            <span key={f} style={{ background: "var(--primary-light)", color: "var(--primary)", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 999, border: "1px solid var(--primary-glow)" }}>{f}</span>
          ))}
        </div>
        {[
          { img: "🏠", imgClass: "app-card-img--blue", title: "Comfort PG for Girls", meta: "Near Forum Mall · AC + WiFi", price: "₹8,000/mo", verified: true },
          { img: "🏡", imgClass: "app-card-img--green", title: "Boys PG with Meals", meta: "BTM Layout · Food Included", price: "₹6,500/mo", verified: true },
          { img: "🏢", imgClass: "app-card-img--purple", title: "Premium Co-living", meta: "100m from Metro", price: "₹11,000/mo", verified: true },
        ].map((c) => (
          <div key={c.title} className="app-card-mini">
            <div className={`app-card-img ${c.imgClass}`}>{c.img}</div>
            <div className="app-card-body">
              <div className="app-card-title">{c.title}</div>
              <div className="app-card-meta">{c.meta}</div>
              <div className="app-card-price">{c.price}</div>
              {c.verified && <div className="app-verified">✓ Verified</div>}
            </div>
          </div>
        ))}
      </div>
      <div className="app-tab-bar">
        {[{ icon: Home, label: "Home" }, { icon: Search, label: "Search", active: true }, { icon: Heart, label: "Saved" }, { icon: Users, label: "Match" }, { icon: MessageCircle, label: "Chat" }].map(({ icon: Icon, label, active }) => (
          <div key={label} className={`app-tab ${active ? "app-tab--active" : ""}`}>
            <div className="app-tab-dot" />
            <Icon size={13} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatScreen() {
  return (
    <div className="app-screen chat-screen">
      <div className="chat-topbar">
        <div className="chat-avatar">🏠</div>
        <div>
          <div className="chat-name">Sunshine PG Owner</div>
          <div className="chat-status">● Online now</div>
        </div>
      </div>
      <div className="chat-messages">
        <div className="chat-bubble chat-bubble--them">
          Hi! The room is available from 1st July. AC + WiFi included 😊
        </div>
        <div className="chat-bubble chat-bubble--me">
          Great! Can I schedule a visit this weekend?
        </div>
        <div className="chat-bubble chat-bubble--them">
          Saturday 11am works! I&apos;ll send you the address.
        </div>
        <div className="chat-bubble chat-bubble--me">
          Perfect, see you then! 👍
        </div>
        <div className="chat-bubble chat-bubble--them">
          No brokerage, direct move-in after visit 🎉
        </div>
      </div>
      <div className="chat-input">
        <span>Type a message...</span>
        <MessageCircle size={11} color="var(--primary)" />
      </div>
      <div className="app-tab-bar">
        {[{ icon: Home, label: "Home" }, { icon: Search, label: "Search" }, { icon: Heart, label: "Saved" }, { icon: Users, label: "Match" }, { icon: MessageCircle, label: "Chat", active: true }].map(({ icon: Icon, label, active }) => (
          <div key={label} className={`app-tab ${active ? "app-tab--active" : ""}`}>
            <div className="app-tab-dot" />
            <Icon size={13} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductShowcase() {
  return (
    <section className="showcase-section" id="showcase">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">The App</span>
          <h2 style={{ marginTop: 12 }}>Everything you need, in one place</h2>
          <p style={{ marginTop: 16 }}>
            A beautifully designed app that puts verified PGs, smart search,
            flatmate matching, and direct chat at your fingertips.
          </p>
        </motion.div>
      </div>

      <div className="showcase-phones">
        {/* Left phone */}
        <motion.div
          className="phone-wrap phone-wrap--side"
          initial={{ opacity: 0, x: -40, rotate: -4 }}
          whileInView={{ opacity: 0.85, x: 0, rotate: -4 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="phone-frame">
            <div className="phone-notch" />
            <div className="phone-screen">
              <SearchScreen />
            </div>
          </div>
        </motion.div>

        {/* Center phone (hero) */}
        <motion.div
          className="phone-wrap phone-wrap--center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          whileHover={{ y: -6 }}
        >
          <div className="phone-frame phone-frame--lg">
            <div className="phone-notch" />
            <div className="phone-screen">
              <HomeScreen />
            </div>
          </div>
        </motion.div>

        {/* Right phone */}
        <motion.div
          className="phone-wrap phone-wrap--side"
          initial={{ opacity: 0, x: 40, rotate: 4 }}
          whileInView={{ opacity: 0.85, x: 0, rotate: 4 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="phone-frame">
            <div className="phone-notch" />
            <div className="phone-screen">
              <ChatScreen />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
