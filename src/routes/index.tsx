import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, HardHat, ShieldCheck, Wrench } from "lucide-react";

import heroImage from "@/assets/hero-refinery.jpg";
import tankImage from "@/assets/tank-cleaning.jpg";
import { services, stats } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soala Global Nigeria Limited | Oil & Gas Services" },
      {
        name: "description",
        content:
          "Soala Global Nigeria Limited delivers industrial decontamination, tank and pipeline cleaning, engineering, procurement, construction and maintenance across Nigeria.",
      },
      {
        property: "og:title",
        content: "Soala Global Nigeria Limited | Oil & Gas Services",
      },
      {
        property: "og:description",
        content:
          "Industrial decontamination, tank and pipeline cleaning, and full EPCM services for the Nigerian oil and gas industry.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep">
        <img
          src={heroImage}
          alt="Refinery operators walking past crude oil storage tanks at dusk"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-hero-veil" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-36">
          <p className="eyebrow">Oil &amp; Gas Services · Nigeria</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-7xl">
            Cleaner assets. Safer plants. Stronger uptime.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 lg:text-lg">
            Soala Global Nigeria Limited is an indigenous oil and gas services company
            specialising in industrial decontamination, tank and pipeline cleaning, and
            integrated engineering, procurement, construction and maintenance.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-accent-foreground shadow-accent transition-transform hover:-translate-y-0.5"
            >
              Request a quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 px-7 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Our capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-6 py-8 text-center lg:py-10">
              <p className="font-display text-4xl font-bold text-primary lg:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-5xl">
              Built for Nigeria&rsquo;s toughest industrial environments
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              From our operational base in Port Harcourt, we support operators, refiners
              and terminal owners across the Niger Delta with specialist cleaning crews,
              multi-discipline engineers and fully certified equipment spreads. Every
              scope is planned around one non-negotiable outcome: work completed safely,
              on schedule and to specification.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Wholly indigenous company with full local content compliance",
                "Experienced crews trained in confined space and permit-to-work systems",
                "Owned equipment spread — no dependence on third-party mobilisation",
                "Documented handover packages for inspection and integrity records",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-primary hover:text-accent"
            >
              More about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={tankImage}
              alt="Technician in protective equipment cleaning the interior of a storage tank"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full object-cover shadow-card"
            />
            <div className="absolute -bottom-6 left-6 hidden bg-accent px-6 py-5 sm:block">
              <p className="font-display text-3xl font-bold text-accent-foreground">
                24/7
              </p>
              <p className="text-xs uppercase tracking-widest text-accent-foreground/80">
                Shutdown response
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-5xl">Core services</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Seven integrated service lines, delivered by one accountable team.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="border-t-4 border-accent bg-card p-7 shadow-card"
              >
                <h3 className="font-display text-xl font-bold text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
              </article>
            ))}
            <Link
              to="/services"
              className="flex flex-col justify-between bg-gradient-navy p-7 text-primary-foreground shadow-card"
            >
              <h3 className="font-display text-xl font-bold">
                See full scope &amp; methods
              </h3>
              <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-accent">
                All services <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Safety-led execution",
              body: "HSE plans, JSAs and toolbox routines on every job. Our record is measured in incident-free man-hours, not promises.",
            },
            {
              icon: HardHat,
              title: "Specialist crews",
              body: "Decontamination technicians, confined-space entrants, welders and engineers mobilised as one integrated team.",
            },
            {
              icon: Wrench,
              title: "Single-source delivery",
              body: "Engineering, procurement, construction and maintenance under one contract — fewer interfaces, tighter schedules.",
            },
          ].map((item) => (
            <div key={item.title} className="rule-accent">
              <item.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-navy">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-primary-foreground lg:text-4xl">
              Planning a shutdown or cleaning campaign?
            </h2>
            <p className="mt-3 max-w-xl text-primary-foreground/75">
              Send us your scope and we will respond with a method statement, manpower
              plan and commercial proposal.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 bg-accent px-7 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-accent-foreground"
          >
            Contact our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
