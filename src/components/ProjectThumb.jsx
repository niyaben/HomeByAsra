import BlueprintLines from "./BlueprintLines";

// Compact project-card thumbnail used on the homepage highlight strip.
// Swap the inner <BlueprintLines> block for a real <img> once photography exists.
export default function ProjectThumb({ label, className = "" }) {
  return (
    <div className={`relative aspect-[4/3] bg-[var(--color-ink)] overflow-hidden ${className}`}>
      <BlueprintLines variant="hero" className="absolute inset-0 w-full h-full opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/80 via-transparent to-transparent" />
      {label && (
        <span className="absolute bottom-2 left-2 coord-label bg-[var(--color-ink)]/70 px-2 py-1 text-[var(--color-brass)]">
          {label}
        </span>
      )}
    </div>
  );
}
