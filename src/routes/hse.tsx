import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, ClipboardCheck, Leaf, Users } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import hseImage from "@/assets/hse-team.jpg";

const TITLE = "HSE Policy | Safety-Led Oil & Gas Contractor in Nigeria";
const DESCRIPTION =
  "The Soala Global health, safety and environment framework for Nigerian oil and gas work: permit-to-work discipline, confined space control, waste management and crew training.";

export const Route = createFileRoute("/hse")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://soalaglobal.com/hse" },
    ],
    links: [{ rel: "canonical", href: "https://soalaglobal.com/hse" }],
  }),
  component: Hse,
});


function Hse() {
  return (
    <div>
      <PageHero
        eyebrow="Health · Safety · Environment"
        title="No scope is worth an injury"
        description="Our HSE management system governs how we plan, mobilise and execute every job — from a two-day valve change to a month-long tank campaign."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={hseImage}
            alt="Safety officer holding a toolbox talk with industrial workers in hi-vis coveralls"
            loading="lazy"
            width={1280}
            height={960}
            className="w-full object-cover shadow-card"
          />
          <div>
            <p className="eyebrow">Our commitment</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">
              Planned, permitted, supervised
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Every mobilisation starts with a job hazard analysis and a method statement
              agreed with the client. Work is executed under permit-to-work, with gas
              testing, standby rescue teams and daily toolbox talks. Supervisors have
              explicit authority to stop work whenever conditions change.
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              {[
                "Job hazard analysis and method statements before mobilisation",
                "Permit-to-work, gas testing and confined space entry control",
                "Certified PPE, breathing apparatus and rescue standby",
                "Incident reporting, investigation and lessons-learned circulation",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            {
              icon: AlertTriangle,
              title: "Stop-work authority",
              body: "Any team member can halt an activity that looks unsafe, with no consequence.",
            },
            {
              icon: Users,
              title: "Competency training",
              body: "Recurrent training in confined space, working at height, H2S awareness and first aid.",
            },
            {
              icon: Leaf,
              title: "Environmental care",
              body: "Containment, spill response and certified disposal routes for all recovered waste.",
            },
            {
              icon: ClipboardCheck,
              title: "Audit and review",
              body: "Internal audits, client inspections and monthly HSE performance reporting.",
            },
          ].map((card) => (
            <div key={card.title} className="bg-card p-7 shadow-card">
              <card.icon className="h-8 w-8 text-accent" />
              <h3 className="mt-4 font-display text-lg font-bold text-primary">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
