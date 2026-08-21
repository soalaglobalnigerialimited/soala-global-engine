import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center bg-accent font-display text-xl font-bold text-accent-foreground">
              S
            </span>
            <span className="font-display text-lg font-bold uppercase text-primary-foreground">
              Soala Global
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Indigenous Nigerian oil &amp; gas services company delivering industrial
            decontamination, tank and pipeline cleaning, and full EPCM support across the
            Niger Delta.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-[0.2em] text-primary-foreground">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/projects", label: "Projects" },
              { to: "/hse", label: "HSE Policy" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-[0.2em] text-primary-foreground">
            Capabilities
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Industrial Decontamination</li>
            <li>Tank Cleaning</li>
            <li>Pipeline Cleaning</li>
            <li>Engineering Services</li>
            <li>Procurement &amp; Construction</li>
            <li>Maintenance</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-[0.2em] text-primary-foreground">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>Port Harcourt, Rivers State, Nigeria</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+2349160009698" className="hover:text-accent">
                +234 916 000 9698
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:info@soalaglobal.com" className="hover:text-accent">
                info@soalaglobal.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs uppercase tracking-widest sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>&copy; {new Date().getFullYear()} Soala Global Nigeria Limited</p>
          <p>Safety First &middot; Quality Always</p>
        </div>
      </div>
    </footer>
  );
}
