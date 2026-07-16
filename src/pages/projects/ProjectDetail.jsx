import { useParams, Link } from "react-router-dom";
import { getProjectBySlug, projects } from "../../data/projects";
import Section from "../../components/Section";
import Button from "../../components/Button";
import BlueprintLines from "../../components/BlueprintLines";
import NotFound from "../NotFound";

// Placeholder for a project image/rendering. Swap the `src` for a real photo
// or rendering once available — see the README for where image assets live.
function GalleryPlaceholder({ label, tall = false }) {
  return (
    <div
      className={`relative flex items-end bg-[var(--color-slate)]/10 border border-[var(--color-slate-light)]/30 ${
        tall ? "aspect-[3/4]" : "aspect-[4/3]"
      }`}
    >
      <BlueprintLines variant="hero" className="absolute inset-0 w-full h-full opacity-20" />
      <span className="relative m-3 coord-label bg-[var(--color-paper)]/80 px-2 py-1">{label}</span>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <NotFound />;

  const otherProjects = projects.filter((p) => p.slug !== slug);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[var(--color-ink)] text-[var(--color-stone)] overflow-hidden">
        <BlueprintLines variant="hero" className="absolute inset-0 w-full h-full opacity-50" />
        <div className="relative mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-32">
          <p className="coord-label mb-4">{project.location} · {project.status}</p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight max-w-3xl">{project.name}</h1>
          <p className="mt-4 text-lg italic text-[var(--color-brass)]">{project.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#contact" variant="primary">Contact Leasing</Button>
            <Button href="#downloads" variant="ghost">Download Brochure</Button>
          </div>
        </div>
      </section>

      {/* OVERVIEW + QUICK FACTS */}
      <Section tone="light" eyebrow="Overview" title="Project Overview">
        <div className="grid gap-10 md:grid-cols-3">
          <p className="md:col-span-2 text-[var(--color-slate)] leading-relaxed">{project.summary}</p>
          <div className="border border-[var(--color-slate-light)]/30 p-6">
            <p className="coord-label mb-4">Quick Facts</p>
            <dl className="space-y-3">
              {project.quickFacts.map((f) => (
                <div key={f.label} className="flex justify-between text-sm gap-4">
                  <dt className="text-[var(--color-slate-light)]">{f.label}</dt>
                  <dd className="font-medium text-right">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* MASTER PLAN / GALLERY */}
      <Section tone="stone" eyebrow="Master Plan" title="Site Plan & Gallery">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <GalleryPlaceholder label="Master Plan" tall />
          <GalleryPlaceholder label="Exterior" />
          <GalleryPlaceholder label="Interior" />
          <GalleryPlaceholder label="Streetscape" />
          <GalleryPlaceholder label="Amenities" />
          <GalleryPlaceholder label="Detail" />
        </div>
      </Section>

      {/* HIGHLIGHTS */}
      <Section tone="light" eyebrow="Project Highlights" title="What makes it work.">
        <div className="grid gap-8 md:grid-cols-2">
          {project.highlights.map((h) => (
            <div key={h.title} className="border-l-2 border-[var(--color-brass)] pl-5">
              <h3 className="font-display text-xl mb-2">{h.title}</h3>
              <p className="text-sm text-[var(--color-slate)] leading-relaxed">{h.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* COMMUNITY IMPACT */}
      <Section tone="dark" eyebrow="Community Impact" title="Why it matters.">
        <p className="max-w-2xl text-[var(--color-stone)]/80 leading-relaxed">{project.communityImpact}</p>
      </Section>

      {/* DOWNLOADS + CONTACT */}
      <Section id="downloads" tone="light" eyebrow="Resources" title="Downloads & Contact">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="border border-[var(--color-slate-light)]/30 p-6">
            <h3 className="font-display text-lg mb-2">Investor Brochure</h3>
            <p className="text-sm text-[var(--color-slate)] mb-4">
              Full leasing and investor prospectus, including floorplans and pricing.
            </p>
            {/* Replace href with a real PDF once available, e.g. /downloads/miramichi-brochure.pdf */}
            <Button href="#" variant="dark">Download PDF</Button>
          </div>
          <div id="contact" className="border border-[var(--color-slate-light)]/30 p-6">
            <h3 className="font-display text-lg mb-2">{project.contactLabel}</h3>
            <p className="text-sm text-[var(--color-slate)] mb-4">
              Reach out directly for leasing packages or investor inquiries.
            </p>
            <Button to="/contact" variant="dark">Contact Us</Button>
          </div>
        </div>
      </Section>

      {/* OTHER PROJECTS */}
      {otherProjects.length > 0 && (
        <Section tone="stone" eyebrow="Explore More" title="Other Developments">
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="block border border-[var(--color-slate-light)]/30 bg-[var(--color-paper)] p-6 hover:border-[var(--color-brass)] transition-colors"
              >
                <p className="coord-label mb-2">{p.location}</p>
                <h3 className="font-display text-xl">{p.name}</h3>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
