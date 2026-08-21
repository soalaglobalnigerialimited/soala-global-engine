import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

import { PageHero } from "@/components/site/PageHero";
import { services } from "@/lib/site-data";

const TITLE = "Contact | Tank Cleaning & Decontamination Quotes, Nigeria";
const DESCRIPTION =
  "Contact Soala Global Nigeria Limited in Port Harcourt for tank cleaning, industrial decontamination, pipeline and EPC enquiries. Call +234 916 000 9698 or send your scope.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://soalaglobal.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://soalaglobal.com/contact" }],
  }),
  component: Contact,
});


function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your scope"
        description="Send us the details of your tank, pipeline, plant or project and our engineers will respond with a technical and commercial proposal."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.2fr] lg:px-8 lg:py-28">
        <div>
          <h2 className="text-2xl font-bold lg:text-3xl">Head office</h2>
          <ul className="mt-6 space-y-5 text-sm">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>
                Plot 12, Trans-Amadi Industrial Layout
                <br />
                Port Harcourt, Rivers State, Nigeria
              </span>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>
                <a href="tel:+2349160009698" className="hover:text-accent">
                  +234 916 000 9698
                </a>
              </span>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>
                <a href="mailto:info@soalaglobal.com" className="hover:text-accent">
                  info@soalaglobal.com
                </a>
                <br />
                <a href="mailto:tenders@soalaglobal.com" className="hover:text-accent">
                  tenders@soalaglobal.com
                </a>
              </span>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>
                Mon – Fri, 8:00 – 17:00 WAT
                <br />
                24/7 shutdown &amp; emergency response
              </span>
            </li>
          </ul>
        </div>

        <div className="border-t-4 border-accent bg-card p-7 shadow-card lg:p-10">
          <h2 className="font-display text-2xl font-bold text-primary">Send an enquiry</h2>
          {submitted ? (
            <div className="mt-8 border border-border bg-muted p-6">
              <p className="font-display text-lg font-bold text-primary">
                Thank you — your enquiry has been recorded.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Our team will respond within one business day. For urgent shutdown support,
                call +234 916 000 9698.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-5 font-display text-sm font-bold uppercase tracking-widest text-accent"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form
              className="mt-7 grid gap-5 sm:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <Field label="Full name" name="name" />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" required={false} />
              <label className="sm:col-span-2 block">
                <span className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Service required
                </span>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.shortTitle}>
                      {s.shortTitle}

                    </option>
                  ))}
                  <option value="Other">Other / multiple</option>
                </select>
              </label>
              <label className="sm:col-span-2 block">
                <span className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Scope details
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Asset type, location, timing and any special requirements"
                  className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                />
              </label>
              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 bg-accent px-7 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Submit enquiry <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
      />
    </label>
  );
}
