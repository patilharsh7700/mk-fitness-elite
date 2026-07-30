import { Clock, MapPin, Phone, Star } from "lucide-react";
import { SectionHeading } from "@/components/site/ui-bits";
import { BRANCHES } from "@/data/site";

export function BranchesSection({ withMaps = false }: { withMaps?: boolean }) {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Our branches"
          title={
            <>
              TWO LOCATIONS. <span className="text-gradient">ONE STANDARD.</span>
            </>
          }
          subtitle="Gym in Punawale and gym in Marunji, minutes away from Hinjawadi."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {BRANCHES.map((b, i) => (
            <article
              key={b.area}
              data-reveal={i === 0 ? "left" : "right"}
              className="glass group relative overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50"
            >
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <h3 className="text-4xl leading-none">{b.area}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-primary">{b.name}</p>
                </div>
                <span className="glass flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold">
                  <Star className="h-4 w-4 fill-primary text-primary" /> {b.rating}
                  <span className="text-xs font-normal text-muted-foreground">({b.reviews})</span>
                </span>
              </div>

              <ul className="relative mt-6 grid gap-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b.address}
                </li>
                <li className="flex gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-primary" /> {b.timing}
                </li>
                <li className="flex gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a href={`tel:${b.phone}`} className="font-semibold text-foreground hover:text-primary">
                    {b.phone}
                  </a>
                </li>
              </ul>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {b.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {withMaps && (
                <iframe
                  title={`Map of ${b.area} branch`}
                  src={b.map}
                  loading="lazy"
                  className="relative mt-7 h-56 w-full rounded-2xl border border-border grayscale transition-all duration-500 hover:grayscale-0"
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}