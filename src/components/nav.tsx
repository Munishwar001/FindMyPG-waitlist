import { JoinWaitlistButton } from "@/components/join-waitlist-button";

const NAV_LINKS = [
  { label: "Properties", href: "#" },
  { label: "Locations", href: "#" },
  { label: "How it Works", href: "#" },
  { label: "About", href: "#" },
];

export function Nav() {
  return (
    <nav>
      <div className="logo">FindMyPG</div>
      <div className="nav-links">
        {NAV_LINKS.map((link) => (
          <a href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
      </div>
      <JoinWaitlistButton />
    </nav>
  );
}
