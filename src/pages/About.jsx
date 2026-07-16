import Section from "../components/Section";
import Card from "../components/Card";
import BlueprintLines from "../components/BlueprintLines";
import PageHero from "../components/PageHero";
import { locations } from "../data/locations";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Homes by Asra Inc."
        title="We design tomorrow's communities — without sacrificing structural longevity, luxury, or ecological harmony."
      />

      <Section tone="light" eyebrow="Who We Are" title="A premier multi-provincial developer.">
        <p className="max-w-2xl text-[var(--color-slate)] leading-relaxed">
          At Homes by Asra Inc., we do not just build structures; we design the future.
          We specialize in pioneering residential communities and cutting-edge commercial
          spaces engineered for high-utility, net-zero performance — from smart-grid urban
          hubs in Alberta to climate-resilient coastal developments in British Columbia and
          walkable master plans in New Brunswick.
        </p>
      </Section>

      <Section tone="stone" eyebrow="Our Footprint" title="Tri-provincial, and growing.">
        <div className="grid gap-6 md:grid-cols-3">
          {locations.map((loc) => (
            <Card key={loc.code} eyebrow={loc.code} title={loc.name}>
              {loc.focus}
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="light" eyebrow="Core Values" title="What guides every build.">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Structural Integrity", detail: "Materials and methods chosen for decades of performance, not just the ribbon-cutting." },
            { title: "Ecological Harmony", detail: "Every development is measured against its environmental footprint, from sourcing to operation." },
            { title: "Community First", detail: "We plan around walkability, shared space, and the daily life of the people who will live there." },
            { title: "Accountable Delivery", detail: "On-time, on-budget handovers across every province we operate in." },
          ].map((v) => (
            <div key={v.title} className="border-l-2 border-[var(--color-brass)] pl-5">
              <h3 className="font-display text-xl mb-2">{v.title}</h3>
              <p className="text-sm text-[var(--color-slate)] leading-relaxed">{v.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="relative bg-[var(--color-ink)] text-[var(--color-stone)] py-24 overflow-hidden">
        <BlueprintLines variant="divider" className="absolute top-0 left-0 w-full h-8" />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-display text-2xl md:text-3xl italic leading-relaxed">
            "Building the future, responsibly."
          </p>
        </div>
      </section>
    </>
  );
}
