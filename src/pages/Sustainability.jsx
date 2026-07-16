import PageHero from "../components/PageHero";
import Section from "../components/Section";
import { sustainabilityPillars } from "../data/services";

export default function Sustainability() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="The new-age development standard."
        intro="We reduce environmental footprints without compromising luxury or structural integrity."
      />

      <Section tone="light" eyebrow="Our Approach" title="Three commitments, on every site.">
        <div className="grid gap-8 md:grid-cols-3">
          {sustainabilityPillars.map((p) => (
            <div key={p.title} className="border-t-2 border-[var(--color-brass)] pt-5">
              <h3 className="font-display text-xl mb-3">{p.title}</h3>
              <p className="text-sm text-[var(--color-slate)] leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="stone" eyebrow="In Practice" title="Net-zero, by design.">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Solar Readiness", detail: "Every development is designed for solar integration from the master-plan stage onward." },
            { title: "Geothermal Systems", detail: "Advanced geothermal infrastructure reduces long-term heating and cooling costs." },
            { title: "Smart Grids", detail: "High-efficiency smart-grid connections optimize energy use across each community." },
            { title: "Low-Carbon Materials", detail: "Responsibly sourced materials chosen for durability and reduced embodied carbon." },
          ].map((item) => (
            <div key={item.title} className="bg-[var(--color-paper)] p-6 border border-[var(--color-slate-light)]/30">
              <h3 className="font-display text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--color-slate)] leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
