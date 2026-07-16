import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import { residentialServices } from "../data/services";
import { projects } from "../data/projects";

export default function Residential() {
  return (
    <>
      <PageHero
        eyebrow="Residential"
        title="Homes engineered for how families actually live."
        intro="Net-zero envelopes, smart apartments, and low-carbon communities across Alberta, British Columbia, and New Brunswick."
      />

      <Section tone="light" eyebrow="Residential Services" title="What we build.">
        <div className="grid gap-6 md:grid-cols-3">
          {residentialServices.map((s) => (
            <Card key={s.title} title={s.title}>{s.detail}</Card>
          ))}
        </div>
      </Section>

      <Section tone="stone" eyebrow="Design Features" title="Details that hold up over decades.">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Deep masonry facades with natural timber accents",
            "Double-height, floor-to-ceiling glazing for daylight",
            "Waterfall stone kitchen islands, light-oak cabinetry",
            "Private entrances, attached garages, integrated landscaping",
          ].map((f) => (
            <div key={f} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--color-brass)]" />
              <p className="text-sm text-[var(--color-slate)]">{f}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="light" eyebrow="Residential Developments" title="See it built.">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.slug} eyebrow={p.location} title={p.name}>
              <p className="mb-4">{p.summary}</p>
              <Button to={`/projects/${p.slug}`} variant="dark">View Project</Button>
            </Card>
          ))}
        </div>
      </Section>

      <section className="bg-[var(--color-ink)] text-[var(--color-stone)] py-20 text-center">
        <h2 className="font-display text-3xl mb-6">Looking for your next home community?</h2>
        <Button to="/contact" variant="primary">Get in Touch</Button>
      </section>
    </>
  );
}
