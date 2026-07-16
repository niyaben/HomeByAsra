// Signature decorative device: hand-drafted site-plan / blueprint line art.
// Echoes the master-plan drawings referenced throughout the brief (Miramichi, Millet).
export default function BlueprintLines({ className = "", variant = "hero" }) {
  if (variant === "hero") {
    return (
      <svg
        className={className}
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="var(--color-brass)" strokeWidth="1" opacity="0.35">
          <rect x="80" y="120" width="340" height="220" />
          <rect x="80" y="360" width="160" height="140" />
          <rect x="260" y="360" width="160" height="140" />
          <line x1="80" y1="120" x2="80" y2="500" />
          <line x1="420" y1="120" x2="420" y2="500" />
          <circle cx="720" cy="260" r="140" />
          <circle cx="720" cy="260" r="90" />
          <line x1="580" y1="260" x2="860" y2="260" />
          <line x1="720" y1="120" x2="720" y2="400" />
          <path d="M 900 480 L 1080 480 L 1080 620 L 940 620 L 900 560 Z" />
          <line x1="900" y1="480" x2="1080" y2="620" />
        </g>
        <g stroke="var(--color-brass)" strokeWidth="0.5" opacity="0.2">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="800" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} />
          ))}
        </g>
      </svg>
    );
  }
  // "divider" variant: a slim horizontal site-line used between sections
  return (
    <svg
      className={className}
      viewBox="0 0 1200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <line x1="0" y1="30" x2="1200" y2="30" stroke="var(--color-brass)" strokeWidth="1" opacity="0.4" />
      <circle cx="600" cy="30" r="4" fill="var(--color-brass)" />
      <line x1="560" y1="10" x2="560" y2="50" stroke="var(--color-brass)" strokeWidth="1" opacity="0.5" />
      <line x1="640" y1="10" x2="640" y2="50" stroke="var(--color-brass)" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
