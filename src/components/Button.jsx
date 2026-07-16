import { Link } from "react-router-dom";

export default function Button({
  to,
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 font-body text-sm font-medium tracking-wide uppercase transition-colors duration-200";
  const variants = {
    primary:
      "bg-[var(--color-brass)] text-[var(--color-ink)] hover:bg-[var(--color-brass-deep)] hover:text-[var(--color-paper)]",
    ghost:
      "border border-[var(--color-brass)] text-[var(--color-stone)] hover:bg-[var(--color-brass)] hover:text-[var(--color-ink)]",
    dark:
      "border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-stone)]",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
