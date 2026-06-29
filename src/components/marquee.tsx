const CITIES = ["BENGALURU", "MUMBAI", "DELHI NCR", "PUNE", "HYDERABAD", "CHENNAI"];
const TRACK = [...CITIES, ...CITIES];

export function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {TRACK.map((city, i) => (
          <span key={`${city}-${i}`}>
            {city}
            <span className="dot" aria-hidden="true">
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
