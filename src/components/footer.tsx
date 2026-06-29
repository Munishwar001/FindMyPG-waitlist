const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Careers", href: "#" },
];

export function Footer() {
  return (
    <footer>
      <div className="footer-row">
        <div className="logo">FindMyPG</div>
        <div className="footer-links">
          {FOOTER_LINKS.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
        <p className="copyright">© 2026 FindMyPG. All rights reserved.</p>
      </div>
    </footer>
  );
}
