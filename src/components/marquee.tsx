const TAGS = [
  "NO BROKERAGE",
  "100% VERIFIED PGS",
  "ZERO DEPOSIT OPTIONS",
  "INSTANT SITE VISITS",
  "FULLY FURNISHED ROOMS",
  "STUDENT FRIENDLY",
];
const TRACK = [...TAGS, ...TAGS, ...TAGS];

export function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {TRACK.map((tag, i) => (
          <span key={`${tag}-${i}`}>
            {tag}
            <span className="dot" aria-hidden="true">
              ★
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
