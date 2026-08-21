import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import pipelineImage from "@/assets/pipeline.jpg";
import { stats } from "@/lib/site-data";

const TITLE = "About Us | Indigenous Oil & Gas EPC Contractor in Nigeria";
const DESCRIPTION =
  "Soala Global Nigeria Limited is an indigenous oil and gas services and EPC contractor based in Port Harcourt, serving operators, refiners and terminals across the Niger Delta.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://soalaglobal.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://soalaglobal.com/about" }],
  }),
  component: About,
});


function About() {
  return (
    <div>
      <PageHero
        eyebrow="About us"
        title="An indigenous partner to Nigeria's energy industry"
        description="Soala Global Nigeria Limited was founded to give operators a dependable local alternative for specialist industrial cleaning and integrated project delivery."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">
              Field-proven, locally rooted
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                We began as a small tank cleaning outfit serving terminals in Rivers
                State. As clients asked for more, we invested in people, certification and
                owned equipment — growing into a multi-discipline services company able to
                take a scope from engineering study through construction and long-term
                maintenance.
              </p>
              <p>
                Today our crews work inside tanks, along pipeline right-of-ways and across
                process plants, always under a documented permit-to-work and HSE regime.
                Our client relationships are long-running because we are transparent about
                risk, cost and schedule from the first site visit.
              </p>
            </div>
          </div>
          <img
            src={pipelineImage}
            alt="Engineers and welders at an oil pipeline construction site"
            loading="lazy"
            width={1280}
            height={960}
            className="w-full object-cover shadow-card"
          />
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-3 lg:px-8">
          {[
            {
              title: "Our mission",
              body: "To deliver specialist industrial services that protect people, assets and the environment, while creating skilled Nigerian jobs.",
            },
            {
              title: "Our vision",
              body: "To be West Africa's most trusted decontamination and asset-integrity services partner.",
            },
            {
              title: "Our values",
              body: "Safety before schedule. Honest reporting. Technical competence. Respect for host communities.",
            },
          ].map((card) => (
            <div key={card.title} className="border-t-4 border-accent bg-card p-8 shadow-card">
              <h3 className="font-display text-xl font-bold text-primary">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background px-6 py-8 text-center">
              <p className="font-display text-4xl font-bold text-primary">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
