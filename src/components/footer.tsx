import { Home } from "lucide-react";

const PRODUCT_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Cities", href: "#cities" },
  { label: "Early Access", href: "#final-cta" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Press", href: "#" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Contact Us", href: "#" },
];

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

const SOCIAL = [
  { Icon: XIcon, label: "X (Twitter)", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { Icon: GithubIcon, label: "GitHub", href: "#" },
];

export function Footer() {
  return (
    <footer className="footer-enhanced">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <div className="logo footer-logo" style={{ marginBottom: 16 }}>
            <div className="logo-icon">
              <Home size={18} strokeWidth={2.5} />
            </div>
            <span className="logo-text">FindMy<span className="logo-highlight">PG</span></span>
          </div>
          <p className="footer-brand-desc">
            Helping students and working professionals find verified PGs,
            flats, and compatible flatmates — without brokers.
          </p>
          <div className="footer-social">
            {SOCIAL.map(({ Icon, label, href }) => (
              <a key={label} href={href} className="footer-social-link" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Product */}
        <div>
          <div className="footer-col-title">Product</div>
          <div className="footer-col-links">
            {PRODUCT_LINKS.map((l) => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <div className="footer-col-title">Company</div>
          <div className="footer-col-links">
            {COMPANY_LINKS.map((l) => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div>
          <div className="footer-col-title">Legal</div>
          <div className="footer-col-links">
            {LEGAL_LINKS.map((l) => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 FindMyPG Technologies Pvt. Ltd. All rights reserved.
        </p>
        <div className="footer-legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
