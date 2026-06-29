import { ShieldCheckIcon, ZapOffIcon, UsersIcon } from "@/components/icons";

const FEATURES = [
  {
    icon: ShieldCheckIcon,
    title: "100% Verified",
    description:
      "Every property is physically verified by our team. No fake photos, no false promises.",
  },
  {
    icon: ZapOffIcon,
    title: "Zero Brokerage",
    description:
      "Connect directly with owners and property managers. Save thousands on unnecessary fees.",
  },
  {
    icon: UsersIcon,
    title: "Find Your Tribe",
    description:
      "Match with flatmates based on lifestyle, habits, and preferences, not just budget.",
  },
];

export function Features() {
  return (
    <section className="features">
      <div className="section-head">
        <h2>Why choose FindMyPG</h2>
        <p>
          We&apos;re reimagining how you find your next home with transparency
          and verified listings.
        </p>
      </div>

      <div className="feature-grid">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div className="feature-card" key={title}>
            <span className="feature-icon">
              <Icon />
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
