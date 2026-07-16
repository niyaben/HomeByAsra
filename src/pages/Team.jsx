import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Card from "../components/Card";
import { teamGroups } from "../data/team";

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The minds shaping tomorrow."
        intro="Great structures start with a brilliant foundation. Homes by Asra Inc. is an elite, multi-disciplinary collective of industry veterans."
      />

      <Section tone="light" eyebrow="The Collective" title="Every build, by role.">
        <div className="grid gap-6 md:grid-cols-3">
          {teamGroups.map((t) => (
            <Card key={t.role} title={t.role}>{t.detail}</Card>
          ))}
        </div>
      </Section>

      <Section tone="stone" eyebrow="Delivery" title="Powered by premier expertise.">
        <p className="max-w-2xl text-[var(--color-slate)] leading-relaxed">
          From structural architects to green infrastructure engineers and regional
          development leads, our teams are organized around each provincial market
          we serve — ensuring local code expertise and consistent, on-budget delivery
          from Edmonton to Vancouver to Moncton.
        </p>
      </Section>
    </>
  );
}
