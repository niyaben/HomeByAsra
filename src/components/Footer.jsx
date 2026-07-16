import { Link } from "react-router-dom";
import { locations } from "../data/locations";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-stone)] pt-16 pb-8 border-t border-[var(--color-brass)]/20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-4 mb-14">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
                <circle cx="32" cy="32" r="31" fill="none" stroke="#B08D57" strokeWidth="1.5" />
                <path
                  d="M32 16 L48 46 H41 L38 39 H26 L23 46 H16 Z M32 24 L27.5 34 H36.5 Z"
                  fill="#B08D57"
                />
              </svg>
              <span className="font-display text-lg">Homes by Asra Inc.</span>
            </div>
            <p className="text-sm text-[var(--color-stone)]/70 max-w-sm leading-relaxed">
              Ready to invest in a smarter, sustainable future? Let's design it together.
            </p>
          </div>

          <div>
            <p className="coord-label mb-4">Navigate</p>
            <ul className="space-y-2 text-sm text-[var(--color-stone)]/80">
              <li><Link to="/about" className="hover:text-[var(--color-brass)]">About Us</Link></li>
              <li><Link to="/residential" className="hover:text-[var(--color-brass)]">Residential</Link></li>
              <li><Link to="/commercial" className="hover:text-[var(--color-brass)]">Commercial</Link></li>
              <li><Link to="/projects" className="hover:text-[var(--color-brass)]">Projects</Link></li>
              <li><Link to="/sustainability" className="hover:text-[var(--color-brass)]">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <p className="coord-label mb-4">Office Hubs</p>
            <ul className="space-y-2 text-sm text-[var(--color-stone)]/80">
              {locations.map((l) => (
                <li key={l.code}>{l.hub}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[var(--color-stone)]/80">
              <a href="mailto:Homebyasra@gmail.com" className="hover:text-[var(--color-brass)]">
                Homebyasra@gmail.com
              </a>
            </p>
            <p className="text-sm text-[var(--color-stone)]/80">+1(780)668-6161</p>
          </div>
        </div>

        <div className="border-t border-[var(--color-brass)]/15 pt-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-[var(--color-stone)]/50">
          <p>© {new Date().getFullYear()} Homes by Asra Inc. All Rights Reserved.</p>
          <p>Building the Future, Responsibly.</p>
        </div>
      </div>
    </footer>
  );
}
