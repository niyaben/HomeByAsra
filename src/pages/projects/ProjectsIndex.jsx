import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import Section from "../../components/Section";
import { projects } from "../../data/projects";

export default function ProjectsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Active Developments"
        title="Projects"
        intro="Master-planned communities across our tri-provincial footprint, from concept to community."
      />

      <Section tone="light">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="group block border border-[var(--color-slate-light)]/30 bg-[var(--color-paper)] p-8 hover:border-[var(--color-brass)] transition-colors"
            >
              <p className="coord-label mb-2">{p.status}</p>
              <h2 className="font-display text-2xl mb-2">{p.name}</h2>
              <p className="text-sm text-[var(--color-slate-light)] mb-4">{p.location} · {p.type}</p>
              <p className="text-sm text-[var(--color-slate)] leading-relaxed mb-6">{p.summary}</p>
              <span className="text-xs uppercase tracking-wider text-[var(--color-brass-deep)] group-hover:text-[var(--color-brass)]">
                View Project →
              </span>
            </Link>
          ))}

          <div className="border border-dashed border-[var(--color-slate-light)]/40 p-8 flex flex-col justify-center items-start">
            <p className="coord-label mb-2">Coming Soon</p>
            <h2 className="font-display text-2xl mb-2">Future Projects</h2>
            <p className="text-sm text-[var(--color-slate)] leading-relaxed">
              New developments across Alberta, British Columbia, and New Brunswick are in
              active planning. Check back soon, or contact us for early investor access.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
