export default function Card({ eyebrow, title, children, className = "" }) {
  return (
    <div
      className={`blueprint-frame border border-[var(--color-slate-light)]/30 bg-[var(--color-paper)] p-7 ${className}`}
    >
      {eyebrow && <p className="coord-label mb-2">{eyebrow}</p>}
      {title && (
        <h3 className="font-display text-xl mb-3 leading-snug">{title}</h3>
      )}
      <div className="text-sm leading-relaxed text-[var(--color-slate)]">{children}</div>
    </div>
  );
}
