import { Link } from "react-router-dom";
import BlueprintLines from "../components/BlueprintLines";
import Button from "../components/Button";
import Section from "../components/Section";
import Card from "../components/Card";
import { locations } from "../data/locations";
import { residentialServices, commercialServices, sustainabilityPillars } from "../data/services";
import { projects } from "../data/projects";
import { teamGroups } from "../data/team";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[var(--color-ink)] text-[var(--color-stone)] overflow-hidden">
        <BlueprintLines
          variant="hero"
          className="absolute inset-0 w-full h-full opacity-70"
        />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-28 md:py-40">
          <p className="coord-label mb-6">AB · BC · NB — Tri-Provincial Development</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] max-w-3xl">
            Building the future:
            <br />
            <span className="italic text-[var(--color-brass)]">new-age development.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-[var(--color-stone)]/80 leading-relaxed">
            Next-generation residential and commercial spaces engineered for sustainability
            across Alberta, British Columbia, and New Brunswick.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/projects" variant="primary">Explore Active Projects</Button>
            <Button to="/team" variant="ghost">Meet Our Experts</Button>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <Section
        tone="light"
        eyebrow="Who We Are"
        title="We don't just build structures — we design the future."
        intro="A premier multi-provincial developer specializing in pioneering residential communities and cutting-edge commercial spaces."
      >
        <Button to="/about" variant="dark">Our Story</Button>
      </Section>

      {/* TRI-PROVINCIAL PRESENCE */}
      <Section
        tone="stone"
        eyebrow="Tri-Provincial Portfolio"
        title="Bridging Canada's most dynamic regions."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {locations.map((loc) => (
            <Card key={loc.code} eyebrow={loc.code} title={loc.name}>
              <p>{loc.focus}</p>
              <p className="mt-4 text-xs text-[var(--color-slate-light)]">{loc.hub}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* RESIDENTIAL & COMMERCIAL */}
      <Section
        tone="light"
        eyebrow="What We Develop"
        title="Residential innovation. Commercial evolution."
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl mb-4">Residential</h3>
            <ul className="space-y-4">
              {residentialServices.map((s) => (
                <li key={s.title} className="border-l-2 border-[var(--color-brass)] pl-4">
                  <p className="font-medium">{s.title}</p>
                  <p className="text-sm text-[var(--color-slate)] mt-1">{s.detail}</p>
                </li>
              ))}
            </ul>
            <Button to="/residential" variant="dark" className="mt-6">View Residential</Button>
          </div>
          <div>
            <h3 className="font-display text-2xl mb-4">Commercial</h3>
            <ul className="space-y-4">
              {commercialServices.map((s) => (
                <li key={s.title} className="border-l-2 border-[var(--color-brick)] pl-4">
                  <p className="font-medium">{s.title}</p>
                  <p className="text-sm text-[var(--color-slate)] mt-1">{s.detail}</p>
                </li>
              ))}
            </ul>
            <Button to="/commercial" variant="dark" className="mt-6">View Commercial</Button>
          </div>
        </div>
      </Section>

      {/* SUSTAINABILITY */}
      <Section
        tone="dark"
        eyebrow="The New Age Development Standard"
        title="Leading with sustainability."
        intro="We reduce environmental footprints without compromising luxury or structural integrity."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {sustainabilityPillars.map((p) => (
            <div key={p.title} className="border border-[var(--color-brass)]/25 p-6">
              <h3 className="font-display text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-[var(--color-stone)]/70 leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
        <Button to="/sustainability" variant="ghost" className="mt-10">Our Sustainability Approach</Button>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section
        tone="light"
        eyebrow="Active Developments"
        title="Featured Projects"
      >
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="group block border border-[var(--color-slate-light)]/30 bg-[var(--color-paper)] p-8 hover:border-[var(--color-brass)] transition-colors"
            >
              <p className="coord-label mb-3">{p.location}</p>
              <h3 className="font-display text-2xl mb-3">{p.name}</h3>
              <p className="text-sm text-[var(--color-slate)] leading-relaxed mb-6">{p.summary}</p>
              <span className="text-xs uppercase tracking-wider text-[var(--color-brass-deep)] group-hover:text-[var(--color-brass)]">
                View Project →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* TEAM TEASER */}
      <Section tone="stone" eyebrow="The Minds Shaping Tomorrow" title="Our Team">
        <div className="grid gap-6 md:grid-cols-3">
          {teamGroups.map((t) => (
            <Card key={t.role} title={t.role}>{t.detail}</Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-[var(--color-ink)] text-[var(--color-stone)] py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Ready to invest in a smarter, sustainable future?
          </h2>
          <p className="text-[var(--color-stone)]/70 mb-8">Let's design it together.</p>
          <Button to="/contact" variant="primary">Build With Us</Button>
        </div>
      </section>
    </>
  );
}
