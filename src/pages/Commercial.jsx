import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import { commercialServices } from "../data/services";

export default function Commercial() {
  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title="High-visibility space for the businesses that anchor a neighbourhood."
        intro="Street-front retail, green office complexes, and flexible workspaces built into the heart of our residential communities."
      />

      <Section tone="light" eyebrow="Commercial Services" title="What we develop.">
        <div className="grid gap-6 md:grid-cols-3">
          {commercialServices.map((s) => (
            <Card key={s.title} title={s.title}>{s.detail}</Card>
          ))}
        </div>
      </Section>

      <Section tone="stone" eyebrow="Mixed-Use Model" title="Retail below. Residents above.">
        <p className="max-w-2xl text-[var(--color-slate)] leading-relaxed mb-8">
          Our mixed-use developments position commercial tenants — clinics, cafes,
          pharmacies, and boutique retail — at street level, with transparent glass
          facades that maximize foot traffic and visibility, directly beneath the
          residential units that provide built-in customer volume from day one.
        </p>
        <Button to="/projects/miramichi" variant="dark">See the Miramichi Case Study</Button>
      </Section>

      <Section tone="light" eyebrow="Sectors" title="Where we operate.">
        <div className="grid gap-6 md:grid-cols-4">
          {["Retail", "Office", "Mixed-Use", "Industrial"].map((sector) => (
            <div key={sector} className="border border-[var(--color-slate-light)]/30 p-6 text-center">
              <p className="font-display text-lg">{sector}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-[var(--color-ink)] text-[var(--color-stone)] py-20 text-center">
        <h2 className="font-display text-3xl mb-6">Leasing inquiries welcome.</h2>
        <Button to="/contact" variant="primary">Request a Leasing Package</Button>
      </section>
    </>
  );
}
