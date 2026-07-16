import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/residential", label: "Residential" },
  { to: "/commercial", label: "Commercial" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Our Team" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[var(--color-ink)]/95 backdrop-blur" : "bg-[var(--color-ink)]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-20">
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r="31" fill="none" stroke="#B08D57" strokeWidth="1.5" />
            <path
              d="M32 16 L48 46 H41 L38 39 H26 L23 46 H16 Z M32 24 L27.5 34 H36.5 Z"
              fill="#B08D57"
            />
          </svg>
          <span className="font-display text-lg text-[var(--color-stone)] tracking-wide">
            Homes by Asra
          </span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `font-body text-[13px] uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-[var(--color-brass)]"
                    : "text-[var(--color-stone)]/80 hover:text-[var(--color-brass)]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 border border-[var(--color-brass)] text-[var(--color-brass)] text-xs uppercase tracking-wider hover:bg-[var(--color-brass)] hover:text-[var(--color-ink)] transition-colors"
        >
          Build With Us
        </NavLink>

        <button
          className="lg:hidden text-[var(--color-stone)] text-2xl"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-[var(--color-ink)] border-t border-[var(--color-brass)]/20 px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-body text-sm uppercase tracking-wider py-2 ${
                  isActive ? "text-[var(--color-brass)]" : "text-[var(--color-stone)]/80"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
