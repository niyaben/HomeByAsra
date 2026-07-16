export default function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="bg-[var(--color-ink)] text-[var(--color-stone)] py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        {eyebrow && <p className="coord-label mb-4">{eyebrow}</p>}
        <h1 className="font-display text-4xl md:text-5xl leading-tight">{title}</h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-[var(--color-stone)]/75 leading-relaxed">{intro}</p>
        )}
      </div>
    </section>
  );
}
