import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { services } from "@/lib/site-data";

const TITLE = "Industrial Decontamination & EPC Services Nigeria | Soala Global";
const DESCRIPTION =
  "Industrial decontamination, tank cleaning, pipeline cleaning, engineering, procurement, construction and maintenance services for oil and gas operators in Nigeria.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://soalaglobal.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://soalaglobal.com/services" }],
  }),
  component: Services,
});


function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Capabilities"
        title="Specialist services across the asset lifecycle"
        description="From vapour-freeing a column to erecting a tank and maintaining it for years afterwards, we cover the full scope with one accountable team."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="space-y-6">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className="grid gap-6 border-l-4 border-accent bg-card p-7 shadow-card lg:grid-cols-[1fr_1fr] lg:p-10"
            >
              <div>
                <p className="font-display text-sm font-bold tracking-[0.25em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-primary lg:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
              </div>
              <ul className="grid gap-3 self-center sm:grid-cols-2">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-navy">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground lg:text-4xl">
            Tell us what needs cleaning, built or maintained.
          </h2>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 bg-accent px-7 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-accent-foreground"
          >
            Request a quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
