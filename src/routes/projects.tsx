import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Soala Global Nigeria Limited" },
      {
        name: "description",
        content:
          "Selected tank cleaning, pipeline pre-commissioning, turnaround maintenance and EPC projects delivered across the Niger Delta.",
      },
      { property: "og:title", content: "Projects | Soala Global Nigeria Limited" },
      {
        property: "og:description",
        content:
          "Track record of decontamination, pipeline and construction projects for Nigerian operators and refiners.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div>
      <PageHero
        eyebrow="Track record"
        title="Projects delivered safely and on schedule"
        description="A selection of representative scopes completed for operators, refiners, terminals and indigenous producers."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col border-t-4 border-accent bg-card p-7 shadow-card"
            >
              <h2 className="font-display text-xl font-bold text-primary">
                {project.title}
              </h2>
              <p className="mt-2 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {project.location}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.scope}
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-xs uppercase tracking-widest text-accent">Outcome</p>
                <p className="mt-1 text-sm font-medium">{project.result}</p>
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                Client: {project.client}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
