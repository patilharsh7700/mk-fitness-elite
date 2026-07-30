import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/site/ui-bits";
import { REVIEWS } from "@/data/site";

export function Reviews() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Google reviews"
          title={
            <>
              RATED <span className="text-gradient">4.6★</span> BY OUR MEMBERS
            </>
          }
          subtitle="348+ Google reviews across the Punawale and Marunji branches."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              data-reveal="zoom"
              style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
              className="glass relative overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50"
            >
              <Quote className="absolute -right-2 -top-2 h-24 w-24 text-primary/10" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star
                    key={k}
                    className={`h-4 w-4 ${k < r.rating ? "fill-primary text-primary" : "text-muted"}`}
                  />
                ))}
              </div>
              <p className="relative mt-5 text-sm leading-relaxed text-muted-foreground">“{r.text}”</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/15 font-display text-lg text-primary">
                  {r.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <strong className="block truncate text-sm">{r.name}</strong>
                  <span className="block truncate text-xs text-muted-foreground">{r.since}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}