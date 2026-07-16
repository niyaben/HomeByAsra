export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "light", // "light" | "dark" | "stone"
  className = "",
}) {
  const tones = {
    light: "bg-[var(--color-paper)] text-[var(--color-ink)]",
    dark: "bg-[var(--color-ink)] text-[var(--color-stone)]",
    stone: "bg-[var(--color-stone)] text-[var(--color-ink)]",
  };
  return (
    <section id={id} className={`${tones[tone]} py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {(eyebrow || title) && (
          <div className="mb-12 max-w-2xl">
            {eyebrow && <p className="coord-label mb-3">{eyebrow}</p>}
            {title && (
              <h2 className="font-display text-3xl md:text-4xl font-normal leading-tight">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-4 text-base leading-relaxed opacity-80 max-w-xl">{intro}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
