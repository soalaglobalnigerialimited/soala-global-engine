export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-gradient-navy">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold text-primary-foreground lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75 lg:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
