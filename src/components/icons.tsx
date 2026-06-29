type IconProps = {
  className?: string;
};

const baseProps = {
  viewBox: "0 0 24 24",
  width: 22,
  height: 22,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} width={18} height={18} className={className}>
      <path d="M12 21s-7-7.2-7-12a7 7 0 1 1 14 0c0 4.8-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M12 3l7 3v5c0 5-3.2 8.5-7 10-3.8-1.5-7-5-7-10V6l7-3z" />
      <path d="M9 12.5l2 2 4-4.5" />
    </svg>
  );
}

export function ZapOffIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M12.5 3 7 12h4l-1.5 9L17 12h-4l1.5-9z" />
      <line x1="3" y1="3" x2="21" y2="21" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M15.5 14.2c2.4.4 4.5 2.4 4.5 5.8" />
    </svg>
  );
}
