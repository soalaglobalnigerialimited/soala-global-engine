import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/hse", label: "HSE" },
  { to: "/services", label: "LPG Reticulation", hash: "lpg-reticulation-services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-deep/95 backdrop-blur supports-[backdrop-filter]:bg-navy-deep/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center bg-accent font-display text-xl font-bold text-accent-foreground">
            S
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold uppercase tracking-wide text-primary-foreground">
              Soala Global
            </span>
            <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/60">
              Nigeria Limited
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={`${item.to}-${item.label}`}
              to={item.to}
              hash={item.hash}
              activeOptions={{ exact: item.to === "/" }}
              className="font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground/75 transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent px-5 py-2.5 font-display text-sm font-bold uppercase tracking-widest text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" />
            Request a quote
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="p-2 text-primary-foreground lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-primary-foreground/10 bg-navy-deep px-5 pb-6 pt-2 lg:hidden">
          {nav.map((item) => (
            <Link
              key={`${item.to}-${item.label}`}
              to={item.to}
              hash={item.hash}
              activeOptions={{ exact: item.to === "/" }}
              onClick={() => setOpen(false)}
              className="block border-b border-primary-foreground/10 py-3 font-display text-base font-semibold uppercase tracking-widest text-primary-foreground/80"
              activeProps={{ className: "text-accent" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 block bg-accent py-3 text-center font-display font-bold uppercase tracking-widest text-accent-foreground"
          >
            Request a quote
          </Link>
        </nav>
      )}
    </header>
  );
}
