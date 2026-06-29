import { PropertySearch } from "@/components/property-search";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" />

      <div className="eyebrow">🔊 The new standard for urban living</div>

      <h1>
        Find your space.
        <br />
        Find your people.
        <br />
        Find your city.
      </h1>

      <p className="subtext">
        Discover curated co-living spaces designed for modern professionals. No
        brokers, no hidden fees, just seamless living.
      </p>

      <PropertySearch />
    </section>
  );
}
